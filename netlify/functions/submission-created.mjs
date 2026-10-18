// Netlify runs this function automatically for every verified form submission
// (event-triggered function: the file name is the event). For the "support"
// form it sends the customer an auto-reply, which the Theme Store requires.
//
// Email goes out through Resend's HTTP API. Set these environment variables in
// Netlify (Site configuration → Environment variables):
//   RESEND_API_KEY   — API key from resend.com (domain verified for SUPPORT_FROM)
//   SUPPORT_FROM     — e.g. "QToys Support <support@qdn.vn>"
//   SUPPORT_REPLY_TO — optional; where customer replies should go
// Without RESEND_API_KEY the function logs and exits, so the form still works.

const escapeHtml = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export const handler = async (event) => {
  const { payload } = JSON.parse(event.body || "{}");
  if (payload?.form_name !== "support") return { statusCode: 200, body: "ignored" };

  const data = payload.data ?? {};
  const to = data.email;
  const key = process.env.RESEND_API_KEY;
  const from = process.env.SUPPORT_FROM;
  if (!key || !from || !to) {
    console.warn("[auto-reply] skipped: RESEND_API_KEY, SUPPORT_FROM or the customer email is missing");
    return { statusCode: 200, body: "skipped" };
  }

  const name = escapeHtml(data.first_name || "there");
  const store = escapeHtml(data.store_url || "");
  const topic = escapeHtml(data.topic || "");
  const message = escapeHtml(data.message || "").replace(/\n/g, "<br>");
  const html = `
    <div style="font-family:-apple-system,Segoe UI,Inter,Arial,sans-serif;font-size:15px;line-height:1.6;color:#1e1e1a;max-width:560px">
      <p>Hi ${name},</p>
      <p>Thanks for contacting QToys support — we've received your request and will reply within two business days.</p>
      <p style="margin:24px 0 8px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#6b6a63">Your request</p>
      <p style="margin:0"><b>Store:</b> ${store}<br><b>Topic:</b> ${topic}</p>
      <blockquote style="margin:12px 0;padding:12px 16px;border-left:3px solid #a16207;background:#f7f6f3">${message}</blockquote>
      <p>While you wait, the <a href="${process.env.URL ?? ""}/faq" style="color:#7a4a06">FAQ</a> may already have the answer.</p>
      <p>— The QToys team</p>
    </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: process.env.SUPPORT_REPLY_TO || undefined,
      subject: "We've received your QToys support request",
      html,
    }),
  });
  if (!res.ok) {
    console.error("[auto-reply] Resend error", res.status, await res.text());
    return { statusCode: 502, body: "error" };
  }
  return { statusCode: 200, body: "sent" };
};
