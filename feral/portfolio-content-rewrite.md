# Portfolio content rewrite v3 — whole-site pass, designer-first

Structural fixes, not just wording. Two files were the real source of "confused":

---

## 1. `Skills.jsx` — this was the main offender

**Page hero label** (line 189): `'Grouped by Web, UI UX, 3D, Game, and Tools'` →
```jsx
<div className={p.label} data-page-label>Product design, systems, and the code that ships them</div>
```

**Intro copy** (line 197-199):
```jsx
<p>
  A map of the skills behind the work: product design, design systems, and
  the frontend that ships them. 3D and game UI are part of the range.
</p>
```

**FRONT_COVER** (lines 79-88) — this is the one directly encoding the four-discipline tag. Change:
```js
const FRONT_COVER = {
  title: 'Skills Map',
  page: 'front cover',
  code: '<stack />',
  tone: 'mint',
  visual: 'spark',
  top: ['Product Design', 'Design Systems', 'Frontend'],
  bottom: ['3D & game, on request', 'Production handoff'],
  cover: true,
}
```

**Rename** `SKILL_PAGES.uiux.title` from `'UI UX'` to `'Product Design'` — matches the anchor identity used everywhere else now.

**Reading order** — `BOOK_PAGES` (line 114-123), reorder so design leads and 3D/game trail:
```js
const BOOK_PAGES = [
  FRONT_COVER,
  SKILL_PAGES.uiux,
  SKILL_PAGES.handoff,
  SKILL_PAGES.web,
  SKILL_PAGES.tools,
  SKILL_PAGES.game,
  SKILL_PAGES.art,
  BACK_COVER,
]
```

Left alone, deliberately: `ZINE_PAGES` (the "flat sheet as printed" array) — that's a physical fold simulation, its order is load-bearing for the visual layout code, not just content. Don't reorder it or the fold breaks.

---

## 2. `Contact.jsx` — CONTACT_TYPES dropdown

Current list makes you look like six different careers. Cut to four, fold 3D/game into the free-text message field instead of giving it its own dropdown slot:

```js
const CONTACT_TYPES = [
  'Product / UI design role',
  'Design Engineer role',
  'Freelance product design project',
  'Portfolio feedback or collaboration',
]
```

If someone specifically wants 3D/game work, they'll say so in the message box — it doesn't need a standing dropdown option competing with your actual target roles.

---

## 3. `Work.jsx` — FILTERS, light touch only

Filter matching uses substring match against each project's tags, so reordering is safe but renaming isn't (would break matching). Just reorder to lead with design tools:

```js
const FILTERS = ['All', 'Figma', 'React', 'UI UX', 'Unity', 'Blender', 'Freelance']
```

CTA copy (line 118) was already fine — "Design systems in Figma, shipped as code — with 3D and game art range." No change needed.

---

## Already fixed (yours, from before) — confirmed consistent
`BRAND.role`, About bigQuote, About intro paragraphs, SERVICES/SERVICE_CARDS, seo.js.

## 4. `Home.jsx` — the tiles

The tile labels (Work / Skills / Reviews / Blog / About / Contact) are nav, not identity — leave them. Tile 1 already pulls from `SERVICES`, already fixed above. The one line worth changing is the Skills tile's badge (line 294):

```jsx
<div className={styles.workBadge}>React / Figma / Blender</div>
```
→
```jsx
<div className={styles.workBadge}>Figma / React / Design Systems</div>
```

Same reasoning as everywhere else: leads with the design tool, keeps the code claim, drops 3D off the homepage teaser — Blender still lives on the Skills page itself, just not on the first thing a visitor sees.

## 5. `content.js` — BLOG_POSTS, fleshed out

Your three drafts were 3 short paragraphs each and all still say `date: 'Draft'`. Kept the format, wrote real content, added one new post so the ratio isn't 2-to-1 in favor of 3D/game — two design-core posts, two range posts, same as everywhere else on the site now. Swap in real dates when you publish.

```js
export const BLOG_POSTS = [
  {
    slug: 'figma-to-react',
    title: 'How I think about Figma to React',
    code: '<handoff />',
    date: 'Draft',
    desc: 'A short note on turning playful visual systems into reusable React components without losing personality.',
    tags: ['Figma', 'React', 'UI UX'],
    body: [
      'The hard part of Figma to React is not copying pixels. It is deciding what needs to become a reusable rule and what should stay expressive.',
      'I usually start by naming the rhythm: spacing, border weight, radius, type scale, and motion timing. After that, the playful parts become easier to preserve.',
      'On Layer, that meant the cart stayed composition-first — no heavy scripting — so it shipped fast without breaking budget. A good handoff keeps the feeling of the design while making the code easier to maintain later.',
    ],
  },
  {
    slug: 'design-systems-before-screens',
    title: 'What a design system needs before the first screen',
    code: '<tokens />',
    date: 'Draft',
    desc: 'Notes from building token architecture on Pockit and Packr before drawing a single production screen.',
    tags: ['Design Systems', 'Figma', 'Tokens'],
    body: [
      'On Pockit, I defined 377 variables before laying out one screen. It felt slow at the time. It meant dark mode shipped as a mode, not a second design pass.',
      'Primitives feed semantic tokens, semantic tokens feed components. Skip a layer and you end up hardcoding a color that should have been a decision made once, upstream.',
      'Packr took that further: every Figma variable maps to a TypeScript constant, so the system stays traceable in code, not just documented in a file nobody reopens after handoff.',
    ],
  },
  {
    slug: '3d-art-to-web',
    title: 'Bringing 3D art into web portfolios',
    code: '<webgl />',
    date: 'Draft',
    desc: 'What I learned from Blender assets, WebGL scenes, optimization, and making 3D work feel usable in a browser.',
    tags: ['3D', 'Blender', 'WebGL'],
    body: [
      '3D in a portfolio works best when it supports navigation or storytelling, not when it is a heavy object dropped into a section to look impressive.',
      'The web version needs optimized meshes, careful lighting, and a moment where the user understands what to do next — the same clarity a product screen needs, just rendered differently.',
      'I keep this as range, not the headline. It is useful when a brief calls for it, and it sharpens how I think about performance and hierarchy everywhere else.',
    ],
  },
  {
    slug: 'internship-skyroutes',
    title: 'SkyRoute internship notes',
    code: '<unity />',
    date: 'Draft',
    desc: 'Notes from building game UI, assets, and mobile-friendly environments during my Inficom internship.',
    tags: ['Unity', 'Game UI', 'Internship'],
    body: [
      'SkyRoute connected visual design with interaction design early. A game screen has to explain state in under a second, because the player is already busy.',
      'Working between Blender and Unity changed how I think about constraints: every asset has to look right and still hold 95% performance consistency across real devices, not just in a preview.',
      'That discipline — design decisions that survive real constraints — is what carried over into product work afterward, more than any specific 3D skill did.',
    ],
  },
]
```
