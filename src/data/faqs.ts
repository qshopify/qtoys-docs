/** FAQ shown on /faq. Answers are short HTML; link to the docs for detail. */
export type Faq = { q: string; a: string };
export type FaqGroup = { topic: string; items: Faq[] };

export const FAQS: FaqGroup[] = [
  {
    topic: 'Getting started',
    items: [
      {
        q: 'Can I try QToys before buying it?',
        a: 'Yes. Click <b>Try theme</b> on the Theme Store listing to add QToys to your theme library and preview it with your own products. You only pay when you publish it.',
      },
      {
        q: 'Will my store look like the demo store?',
        a: 'The layout, colors and fonts match the demo. The demo’s images, text and product data don’t transfer, so you’ll see placeholders until you add your own — and the grow line appears once your products have the <code>custom.age_bands</code> metafield. See <a href="/docs/getting-started/install">Install QToys</a>.',
      },
      {
        q: 'Which menus does QToys use?',
        a: 'The header uses your <b>Main menu</b> and the footer uses your <b>Footer menu</b> from <b>Online Store &gt; Navigation</b>. You can choose different menus in the header and footer sections.',
      },
      {
        q: 'How do I change the logo and favicon?',
        a: 'Upload the logo in the <b>Header</b> section (<b>Logo image</b>) and the favicon in <b>Theme settings &gt; Favicon</b>. Without a logo image, the header shows a text wordmark — change it with <b>Wordmark text</b>.',
      },
    ],
  },
  {
    topic: 'Presets and design',
    items: [
      {
        q: 'Which presets does QToys include?',
        a: 'Five: QToys, Sprout, Rocket, Pebble and Pop. Each preset has its own color schemes, fonts, header, footer and home, product and collection templates, and all of them use the grow line. See <a href="/docs/getting-started/theme-settings">Theme settings</a>.',
      },
      {
        q: 'Can I switch presets after installing?',
        a: 'A preset is a starting point, not a separate theme: every setting can be changed afterward. To start from a different preset’s templates, add QToys again from the Theme Store with that style selected, and compare the two copies in your theme library.',
      },
      {
        q: 'How do I change colors and fonts?',
        a: 'In <b>Theme settings</b>, edit the <b>color schemes</b> and pick fonts for headings and body text. Every section has a <b>Color scheme</b> setting, so a change to a scheme updates every section that uses it. Each scheme also sets the grow line colors: <b>Age bands it fits</b>, <b>Next band</b> and <b>Empty band</b>.',
      },
      {
        q: 'Why isn’t the demo’s heading font available?',
        a: 'The Myoi Toys demo brand uses Baloo 2, which isn’t in Shopify’s font library. QToys defaults to Fredoka, the closest rounded face in the library. You can pick any library font under <b>Theme settings &gt; Typography</b>.',
      },
      {
        q: 'How do I add a badge such as “Bestseller” to a product card?',
        a: 'Add a product tag starting with <code>badge:</code>, for example <code>badge:Bestseller</code>. Sale and sold-out badges appear automatically.',
      },
    ],
  },
  {
    topic: 'The grow line',
    items: [
      {
        q: 'What is the grow line?',
        a: 'A line of six age bands, from newborn to eight years, with the bands a toy suits filled in. It appears on product cards, the product page, quick view, the cart, search, collection filters, the home age picker and the account page. See <a href="/docs/grow-line/how-the-grow-line-works">How the grow line works</a>.',
      },
      {
        q: 'Why doesn’t a product show a grow line?',
        a: 'The line needs the product’s <code>custom.age_bands</code> metafield: a list of single line text, with choices. Create the definition in <b>Settings &gt; Custom data &gt; Products</b>, tick the bands the toy suits on each product, and make sure the choices match <b>Age bands</b> in <b>Theme settings &gt; Grow line</b> exactly — including the dash, as in <code>6–12m</code>. See <a href="/docs/grow-line/grow-data">Grow data</a>.',
      },
      {
        q: 'Which metafields do I need to set up?',
        a: 'Only <code>custom.age_bands</code> is needed for the grow line. Optional ones add more: <code>custom.skills</code> for skill tags, <code>custom.tile_color</code> for the color behind the toy, <code>custom.play_stages</code> for the Play stages section, safety and materials fields, and <code>custom.condition</code> for pre-loved toys. See <a href="/docs/products/product-data">Product data</a>.',
      },
      {
        q: 'Can I change the age bands or skill names?',
        a: 'Yes, in <b>Theme settings &gt; Grow line</b>: <b>Age bands</b>, <b>Stage names</b>, <b>Band edges in months</b> and <b>Skill names</b>, with a color for each skill. If you rename them, update the choices of your <code>custom.age_bands</code> and <code>custom.skills</code> metafield definitions to match.',
      },
      {
        q: 'How does the age check know my customer’s child?',
        a: 'Shoppers pick an age with the chips under the grow line, or add their children’s name and birth month under <b>My kids</b> on the account page. These are kept in the shopper’s browser only — nothing is sent to Shopify or saved to the customer record.',
      },
    ],
  },
  {
    topic: 'Filters and search',
    items: [
      {
        q: 'How do I let shoppers filter by age and skill?',
        a: 'Filters need Shopify’s free <b>Search &amp; Discovery</b> app. In the app, add product metafield filters on <code>custom.age_bands</code> and <code>custom.skills</code>, and optionally <code>custom.condition</code>. QToys draws the age filter as the six grow line segments and skills as colored chips. Then set <b>All toys collection</b> in <b>Theme settings &gt; Grow line</b>. See <a href="/docs/collections-and-search/collection-pages#age-and-skill-filters">Age and skill filters</a>.',
      },
      {
        q: 'Why don’t the age links in the header or collection banner filter anything?',
        a: 'They link to the <b>All toys collection</b> with the <b>Age filter</b> parameter (by default <code>filter.p.m.custom.age_bands</code>). The filter must exist in <b>Search &amp; Discovery</b>, and the products must have <code>custom.age_bands</code> values.',
      },
    ],
  },
  {
    topic: 'Products and cart',
    items: [
      {
        q: 'How does the wishlist work?',
        a: 'Shoppers save toys with the heart on cards or the <b>Wishlist button</b> block, and see them on a page with the <b>wishlist</b> template. The list is kept in the shopper’s browser: it isn’t linked to a customer account, doesn’t sync between devices, and you can’t see it in your admin.',
      },
      {
        q: 'Does the trade-in estimator give store credit?',
        a: 'No. The <b>Trade-in</b> estimator shows shoppers an estimate only, from the prices and condition rates you enter. It doesn’t create store credit, gift cards or orders — you assess each toy and issue credit yourself, for example as a gift card.',
      },
      {
        q: 'How do I sell gift cards?',
        a: 'Create a gift card product in <b>Products &gt; Gift cards</b> and assign the <b>gift-card</b> template. Its <b>Gift card recipient</b> block lets shoppers send the card to someone else by email, with a message and send date. The <b>Gift card purchase</b> section can sell it from any page.',
      },
      {
        q: 'Does gift wrap add a charge?',
        a: 'No. The <b>Gift wrap</b> block adds a <i>Gift wrap</i> line property to the item so you see it on the order. To charge for wrapping, sell it as its own product.',
      },
      {
        q: 'How do I show review stars?',
        a: 'Install a review app that writes Shopify’s standard <code>reviews.rating</code> metafield. Stars then appear on cards, quick view and the product page. Add the app’s review widget as an app block on the product page.',
      },
      {
        q: 'Does QToys support subscriptions?',
        a: 'Yes. Install a subscription app that creates selling plans, then assign the <b>subscription</b> product template. The chosen plan shows on the product page and in the cart.',
      },
      {
        q: 'Why doesn’t the bundle builder discount the price?',
        a: 'The bundle builder shows the discount, but the price change comes from a discount you create in <b>Discounts</b> — for example an automatic discount on three items from the collection.',
      },
      {
        q: 'The free shipping meter says “free”, but checkout charges shipping.',
        a: 'The meter is a message only. Create the matching free shipping rate in <b>Settings &gt; Shipping and delivery</b>.',
      },
    ],
  },
  {
    topic: 'Updates and support',
    items: [
      {
        q: 'Will I lose my changes when I update the theme?',
        a: 'No — settings, sections and content carry over, and so do your metafields, which live on your products. Code edits don’t, so keep custom code in the <b>Custom liquid</b> section or block where possible. See <a href="/docs/support/updating">Updating QToys</a>.',
      },
      {
        q: 'Can you enter my product data or customize the theme for me?',
        a: 'Theme support covers setup questions and bugs, including how the grow line and its metafields work — not entering product data or custom work. For custom features, hire a Shopify Partner from the <a href="https://www.shopify.com/partners/directory">Partner Directory</a>. See our <a href="/docs/support/support-policy">support policy</a>.',
      },
      {
        q: 'How do I contact support?',
        a: 'Use the <a href="/support">support form</a>. We reply within two business days.',
      },
    ],
  },
];
