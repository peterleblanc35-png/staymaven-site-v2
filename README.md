# Stay Maven — staymaven.co

Marketing site for **Stay Maven**, a boutique short-term rental management company serving the Triangle (Durham/Raleigh, NC), Southeast Florida, and Columbus, OH.

Built as a fast, hand-written static site with no framework, no build step, and production-quality branding.

---

## Stack

- **HTML** — hand-authored, semantic, indexed by Google
- **CSS** — custom design system, CSS variables, zero preprocessor
- **JS** — ~60 lines of vanilla JS (nav scroll state, mobile menu, reveal-on-scroll, contact form UX)
- **Fonts** — Fraunces (editorial serif) + Inter (sans) via Google Fonts
- **Images** — Unsplash direct URLs (ready to swap for your CDN of choice)
- **Hosting** — Netlify-ready (`netlify.toml` includes legacy URL redirects); also works on Vercel, Cloudflare Pages, or GitHub Pages

## Brand

| Token            | Value      | Usage                                     |
|------------------|------------|-------------------------------------------|
| `--hunter`       | `#1F3A2E`  | Primary brand color, CTAs, nav            |
| `--hunter-deep`  | `#132219`  | Dark sections, footer                     |
| `--gold`         | `#C9A961`  | Accent, highlights, premium cues          |
| `--bone`         | `#F7F2EA`  | Page background, warm neutral             |
| `--sand`         | `#EDE4D0`  | Section alt background                    |
| `--ink`          | `#0F1A14`  | Body copy                                 |

Type: `Fraunces` for display (editorial, variable serif with italic); `Inter` for UI/body.

## Structure

```
/
├── index.html                   Homepage
├── owners.html                  Primary conversion funnel + revenue estimate form
├── services.html                Full-Service Management + Maven Assist
├── about.html                   Company story, principals, team, values
├── contact.html                 Contact form + direct info
├── 404.html                     Branded 404
├── markets/
│   ├── durham.html              Durham, NC (HQ market)
│   ├── raleigh.html             Raleigh, NC
│   ├── deerfield-beach.html     Deerfield Beach, FL
│   ├── south-florida.html       Greater South Florida
│   └── columbus.html            Columbus, OH
├── css/style.css                Full design system
├── js/main.js                   Navigation + interactions
├── assets/
│   └── logo.svg
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── netlify.toml                 Redirects from legacy URLs + security headers
```

## Local development

No build step. Serve the folder with any static server:

```bash
# Python 3
python3 -m http.server 8000

# Or Node
npx serve .
```

Then visit `http://localhost:8000`.

## Deploying

### Netlify (recommended)
Drag-and-drop the folder to https://app.netlify.com/drop, or connect this GitHub repo and Netlify will auto-deploy on every push. `netlify.toml` handles legacy URL redirects.

### GitHub Pages
1. Push to `main`
2. In repo Settings → Pages, set source to `main` / root
3. Custom domain: add `staymaven.co` in Pages settings, update DNS to point at GitHub Pages IPs.

## What's left (owner checklist)

- [ ] Replace Unsplash hero/property photos with branded Stay Maven photography
- [ ] Wire up the contact + revenue-estimate forms (Netlify Forms, Formspree, or your CRM of choice)
- [ ] Swap in real portfolio photos on market pages
- [ ] Update `tel:+19195551234` to your actual OpenPhone line in nav/footer/contact
- [ ] Drop Google Analytics / Plausible snippet (suggested: just before `</head>`)
- [ ] Add `privacy.html` and `terms.html`
- [ ] Google Business Profile verification + schema.org `LocalBusiness` per-market enrichment

## License

© 2026 Stay Maven LLC. All rights reserved.
