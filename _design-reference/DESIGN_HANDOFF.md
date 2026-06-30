# Handoff: Hatch Insurance Agency — Site Redesign (Direction C, "Field Notes")

## Overview

A full marketing site redesign for **Hatch Insurance Agency** — an independent, family-owned insurance agency in Phoenix, AZ, founded 1973, licensed in 44 states. Hatch's differentiator is **specialty practices**: they aren't a generalist agency, they run eight distinct practice lines (Towing & Recovery, Hospitality, Affluent Personal, Commercial P&C, Artisan Contractors, Life & Family, Pest Control, and Garage & Dealers).

Direction C is the chosen visual direction. Internally we called it **"Field Notes"** — a warm, paper-textured, advisory-firm aesthetic that positions Hatch as a boutique private practice rather than a quote engine. It uses a cream paper background, italic Fraunces serif headlines, hand-set typography, and a single warm accent.

## About the design files

The files in this bundle are **design references**, produced as an HTML/React/CSS prototype. They show intended look, layout, copy, and behavior at high fidelity — but they are not production code to lift verbatim. Your task is to **recreate this design in the target codebase's environment**, using its established framework, component library, design tokens, and conventions. If the project is greenfield with no environment yet, choose the most appropriate stack for a content-driven marketing site (Next.js, Astro, or similar SSG/SSR) and implement the design there.

The HTML in `preview.html` runs the prototype as-is so you can scroll through and inspect every section in a browser. Open it directly (no build step required).

## Fidelity

**High-fidelity (hifi).** All colors, typography, spacing, copy, and interactive states are intentional and final. The developer should recreate the UI pixel-perfectly. Photography is currently using stock placeholders from the prototype; the production site should swap in commissioned editorial photography of operators, venues, homes, and crews (see "Assets" below).

## Pages / Views

This is a single-page marketing site. Reading top to bottom:

### 1. Top utility strip
- Full-width black bar (`#2a241b`), cream text (`#f4ede0`)
- Italic Fraunces, 13px
- Content: "An independent agency, since 1973." · phone `602-995-5692`
- Centered, 10px vertical padding, 56px horizontal

### 2. Header
- 3-column grid (auto / 1fr / auto), 28px top / 32px bottom padding, 56px horizontal
- **Left — Brand:**
  - 48×48px circular SVG seal (double concentric ring + italic "H" centered, Fraunces)
  - Wordmark: "Hatch" in italic Fraunces 32px, weight 500
  - Tagline beneath: "Insurance Agency · Phoenix" — uppercase, 11px, letter-spacing 0.16em, color `#6a5a40`
- **Center — Nav:** Practice / Specialties / Approach / People / Visit
  - Italic Fraunces, 17px, color `#2a241b`, hover → accent `#b85a26`
  - 32px gap
- **Right — CTA:** "Begin a conversation"
  - Pill button, dark background `#2a241b`, cream text, italic Fraunces 14px
  - 12px / 22px padding, 999px border-radius
  - Hover: background → accent `#b85a26`

### 3. Hero (full-bleed image)
- Min-height 780px, full-bleed background image (`assets/verticals/affluent.png` — replace with commissioned hero shot of a residence)
- Image filter: `saturate(0.92)`
- Two-layer scrim overlaid:
  - `linear-gradient(180deg, rgba(20,14,6,0.55) 0%, rgba(20,14,6,0.25) 35%, rgba(20,14,6,0.7) 100%)`
  - `linear-gradient(90deg, rgba(20,14,6,0.5) 0%, rgba(20,14,6,0.0) 50%)`
- Overlay content centered vertically, 88px / 56px padding
- **Headline (h1):** Fraunces, `clamp(60px, 7vw, 116px)`, weight 400, line-height 0.96, letter-spacing -0.025em
  - Copy: `Insurance is a *relationship*,<br/>before it is a policy.`
  - "relationship" is italic, color `#f0c89a`
  - Text-shadow: `0 2px 24px rgba(20,14,6,0.4)`

### 4. Intro band (below hero)
- Cream paper background `#f4ede0`, 72px / 56px / 56px padding
- Two-column grid (1.4fr / 1fr), 64px gap, bottom border `1px solid #c8b896`, 32px bottom padding
- **Left — Lede:** Fraunces 21px, line-height 1.4, max-width 600px
  - Copy: "For fifty years we have done the same thing — sit with operators, owners, and households, listen to what they actually do, and place the coverage that fits. We work with a panel of A-rated carriers so the recommendation is yours, not theirs."
- **Right — Meta grid:** 2×2 grid, 20px row gap / 24px col gap
  - Each cell: label (mono caps, 10px, `#6a5a40`) over value (italic Fraunces, 17px)
  - Cells: Practice → "Independent · Boutique"; Established → "Phoenix, 1973"; Footprint → "44 states · 8 specialties"; Hours → "Mon–Fri · 7:30a–4:30p MST"

### 5. Approach (Section II — "How we work.")
- Background `#ebe1cb` (one shade darker cream), 96px / 56px padding
- **Section head** (centered, max-width 760px, 56px bottom margin):
  - Kicker: italic Fraunces 14px, color `#6a5a40`, copy "— II —"
  - Headline: Fraunces, `clamp(40px, 4.5vw, 64px)`, weight 400, copy "How we work."
- **Letter card:** max-width 760px, centered; background `#faf4e7`, 1px border `#c8b896`, 48px / 56px padding
  - Body: Fraunces 19px, line-height 1.5
  - 2 paragraphs of body → "— The Hatch Team" sign-off (italic, 17px, `#6a5a40`, top border, 24px top margin / 20px top padding)
  - Full copy is in `direction-c.jsx` (search for `dirC__letter`)
- **Steps grid:** max-width 1200px, centered; 4-column grid, 1px border `#c8b896`, background `#faf4e7`, vertical dividers between cells
  - Each cell: 32px / 28px padding
  - Step number: mono caps, 11px, `#6a5a40`, letter-spacing 0.14em, 16px bottom margin (e.g. "01", "02")
  - Title (h4): Fraunces 22px weight 500
  - Body: 14px, line-height 1.55, `#4a4030`
  - Steps: `01 Pre-qualification` / `02 Carrier presentation` / `03 Packaging` / `04 Stewardship` (full copy in JSX)

### 6. Specialties (Section III — "The eight practices.")
- Cream `#f4ede0` background, 80px / 56px padding
- **Section head** centered with III kicker, headline "The eight practices.", and italic Fraunces 19px supporting line
- **Tab strip:** flex-wrap, 8px gap, centered, 32px bottom padding, 1px bottom border `#c8b896`
  - Each tab: 1px border `#c8b896`, 12px / 18px padding, 999px border-radius, transparent background
  - Tab content: number (mono, 10px, `#6a5a40`) + label (italic Fraunces, 16px, `#2a241b`)
  - Active tab: background `#2a241b`, number → `rgba(244,237,224,0.6)`, label → cream
  - Hover: border → `#2a241b`
- **Plate (active specialty detail):** 2-column grid (1.1fr / 1fr), 56px gap, 32px padding, background `#faf4e7`, 1px border `#c8b896`
  - **Left image:** 4/5 aspect ratio, 1px border `#c8b896`, object-fit cover
  - **Right body:** flex column, 16px gap, 16px / 8px padding
    - Plate number: mono, 11px, letter-spacing 0.14em, `#6a5a40` (e.g. "No. 03")
    - Title (h3): Fraunces 48px, weight 400
    - Audience: italic Fraunces 16px, color accent `#b85a26`
    - Summary: 16px, line-height 1.55, `#4a4030`
    - "What we look at" tag list: dashed-bullet list (`::before { content: '—' }`), italic Fraunces 16px, 16px top padding with top border `#c8b896`
    - CTA: pill, dark `#2a241b` background, cream text, italic Fraunces 16px, 12px / 24px padding
  - Eight specialties — full data array in `data.jsx` (`SPECIALTIES`)

### 7. Voices (Section IV — "Voices from the file.")
- Cream `#f4ede0`, 96px / 56px padding
- Section head centered, IV kicker
- 2-column voice grid, 32px gap, max-width 1200px centered
- Each voice card: background `#faf4e7`, 1px border `#c8b896`, 36px / 40px padding
  - Quote: Fraunces 22px italic, line-height 1.35, leading "qmark" — a 56px accent-colored quotation mark with `vertical-align: -0.4em`
  - Caption: name (Fraunces 16px weight 500) + role (italic Fraunces 13px, `#6a5a40`)
- Four testimonials in `data.jsx` (`TESTIMONIALS`)

### 8. People (Section V — "The people on your file.")
- Background `#ebe1cb`, 96px / 56px padding
- Section head with V kicker, italic supporting copy "The advisor on your file is the advisor on your call. No queues, no routing trees."
- 6-column grid, 16px gap
- Each person card (centered):
  - Portrait: 3/4 aspect ratio, 1px border `#c8b896`, dark background (`#2a241b` / `#4a3a26` / `#6a5230` rotated by `:nth-child(2n)`/`(3n)`)
  - Diagonal accent overlay: `linear-gradient(135deg, transparent, rgba(184, 90, 38, 0.2))`
  - Initials displayed: italic Fraunces 48px, cream text (`#f4ede0`)
  - Name (h4): Fraunces 17px weight 500
  - Role: italic Fraunces 13px, `#6a5a40`
- 6 people in `data.jsx` (`TEAM`)

### 9. Visit (Section VI — "Come by, or pick up the phone.")
- Cream, 96px / 56px padding
- 2-column grid (1fr / 1fr), 64px gap, max-width 1200px, centered, items aligned to center vertically
- **Left:** VI kicker + headline (Fraunces `clamp(48px,5vw,72px)`) + italic Fraunces 19px supporting copy
- **Right — Visit card:** background `#2a241b`, cream text, 32px / 36px padding
  - Rows: 2-column grid (100px / 1fr), 20px gap, 14px padding, bottom border `rgba(244,237,224,0.16)`
  - Label: mono caps, 10px, letter-spacing 0.14em, color `rgba(244,237,224,0.55)`
  - Value: Fraunces 16px weight 500
  - Rows: Office (2-line address), Toll free, Local, Email, Hours
  - Final CTA: pill, accent `#b85a26` background, cream text, italic Fraunces 17px, 14px / 26px padding, with right-arrow `→` glyph
  - Hover: background → cream, text → dark

### 10. Footer
- Background `#2a241b`, cream text, 28px / 56px padding, centered, italic Fraunces 14px
- Top border `1px solid #c8b896`
- Copy: "Hatch Insurance Agency · Independent since 1973 · Phoenix, Arizona"

## Interactions & Behavior

- **Hover states:** Already documented per element above. Common pattern: dark elements hover → accent; bordered elements hover → border darkens to `#2a241b`.
- **Specialty tab switching:** Clicking a tab in section 6 swaps the plate content (image, title, audience, summary, list, CTA). Single source of truth is the `SPECIALTIES` array in `data.jsx`. State held in `tab` index. No animation between switches in the prototype — feel free to add a subtle 150–200ms cross-fade.
- **Smooth scroll:** Header nav links should scroll to section IDs (`#practice`, `#specialty`, `#approach`, `#people`, `#visit`). Use CSS `scroll-behavior: smooth` on `html`.
- **Phone link:** Header CTA and visit card CTA both `tel:` links.
- **No carousels, modals, or complex JS** — this is intentionally a static, document-feeling page.
- **Responsive behavior** (NOT in the prototype — needs to be designed in implementation):
  - **<= 1024px:** Hero text scale down via `clamp()` already handles. Hero overlay padding → 56px. 2-column grids in Approach/Visit/Specialty plate collapse to 1 column. Steps grid 4 → 2 cols. People grid 6 → 3 cols.
  - **<= 720px:** Header collapses; nav becomes a hamburger or hides. Voices grid 2 → 1 col. People grid 3 → 2 cols. Tab strip remains horizontally scrollable. Section padding reduces to 64px / 24px.
  - **<= 480px:** Hero min-height 560px. All grids 1 col. Plate body padding 16px.

## State Management

Minimal:
- `tab: number` — index into `SPECIALTIES` for the active specialty plate (0–7).

No data fetching; all content is static (in `data.jsx`). When porting to a real CMS-backed codebase, treat each item in `SPECIALTIES`, `TEAM`, and `TESTIMONIALS` as a content collection.

## Design Tokens

### Colors
| Token | Hex | Used for |
|---|---|---|
| `--paper` | `#f4ede0` | Main page background (cream) |
| `--paper-2` | `#ebe1cb` | Alt section background (slightly darker) |
| `--paper-card` | `#faf4e7` | Card / letter / plate background |
| `--ink` | `#2a241b` | Primary text, dark UI surfaces |
| `--ink-muted` | `#4a4030` | Body copy on cream |
| `--ink-soft` | `#6a5a40` | Tertiary text, mono labels |
| `--rule` | `#c8b896` | Hairline borders, dividers |
| `--accent` | `#b85a26` | Italic emphasis, CTAs, hover, tags |
| `--accent-light` | `#f0c89a` | Italic emphasis on dark hero |
| `--ink-overlay` | `rgba(20, 14, 6, X)` | Hero scrim gradients (X = 0.25–0.7) |
| `--cream-overlay` | `rgba(244, 237, 224, X)` | Inverse text on dark (X = 0.16–0.95) |

### Typography
Three families. Pull from Google Fonts.
- **Display / body serif: Fraunces** — weights 400, 500, 600; both italic and roman; used for nearly all headlines and most body copy. The italic is doing a LOT of the work in this design — preserve italics liberally.
- **UI sans: Inter Tight** — used as `body` default; appears mainly in plate-summary body paragraphs and any neutral body text.
- **Mono: JetBrains Mono** — weights 400, 500; used for tiny caps labels (eyebrows, kickers, meta labels).

Type ramp:
| Use | Family | Size | Weight | Style | Tracking |
|---|---|---|---|---|---|
| Hero headline | Fraunces | `clamp(60px, 7vw, 116px)` | 400 | upright + italic mix | -0.025em |
| Section h2 | Fraunces | `clamp(40px, 4.5vw, 64px)` | 400 | upright | -0.025em |
| Visit h2 | Fraunces | `clamp(48px, 5vw, 72px)` | 400 | upright | -0.025em |
| Plate h3 | Fraunces | 48px | 400 | upright | -0.02em |
| Step h4 / Voice quote | Fraunces | 22px | 500 / italic 400 | mixed | -0.01em |
| Brand wordmark | Fraunces | 32px | 500 | italic | -0.015em |
| Hero lede | Fraunces | 21px | 400 | upright | — |
| Body / sec-head supporting | Fraunces | 19px | 400 | italic | — |
| Nav | Fraunces | 17px | 400 | italic | — |
| Card body | Inter Tight | 16px | 400 | upright | — |
| Mono labels | JetBrains Mono | 10–11px | 400 | upright caps | 0.10–0.16em |

### Spacing scale
Section vertical padding: 56px / 72px / 80px / 96px / 120px (use 96px as default).
Horizontal page padding: **56px** (consistent everywhere).
Card padding: 32px outer / 36–48px inner.
Grid gaps: 16px / 20px / 24px / 32px / 56px / 64px.

### Borders & radii
- Hairline: `1px solid #c8b896` (everywhere)
- Hairline dark: `1px solid rgba(244, 237, 224, 0.16)` (on dark)
- Pill border-radius: `999px` (all CTAs, all tab buttons)
- Cards: **square corners** (no border-radius). The design intentionally avoids rounded card corners to feel like a printed plate, not a SaaS UI. Only buttons are pill-shaped.

### Shadows
- Hero headline only: `text-shadow: 0 2px 24px rgba(20, 14, 6, 0.4)` for legibility over the photo. **No drop shadows on cards or buttons** — they would break the paper aesthetic.

### Texture
The body of `.dirC` has a subtle paper-grain effect via a pseudo-element:
```css
.dirC::before {
  content: ''; position: absolute; inset: 0;
  background-image: radial-gradient(rgba(60, 40, 20, 0.06) 1px, transparent 1px);
  background-size: 3px 3px;
  pointer-events: none;
  opacity: 0.5;
  mix-blend-mode: multiply;
}
```
Preserve this — it's small but it's what makes the page feel like paper rather than a flat color fill.

## Assets

### Photography (CRITICAL — replace placeholders)
The prototype uses placeholder photography from the existing site. Production should commission **editorial, on-location photography** of:
- A high-end Phoenix-area residence (hero — current placeholder: `assets/verticals/affluent.png`)
- A wrecker / tow operator at work (specialty 01 — `towing.jpg`)
- A bar/restaurant interior at service (specialty 02 — `bars.jpg`)
- An affluent residence detail (specialty 03 — `affluent.png`)
- A small-business owner / commercial scene (specialty 04 — `commercial.jpg`)
- A contractor on a job site (specialty 05 — `contractor2.png`)
- A family / household scene (specialty 06 — `life.png`)
- Pest control technician (specialty 07 — currently reuses `contractor2.png`)
- Garage / dealership service bay (specialty 08 — currently reuses `commercial.jpg`)
- Headshots of all 6 team members (currently the design uses initials on dark gradient swatches; this is a reasonable fallback if real headshots aren't available, but real headshots are strongly preferred)

All images placed in `assets/verticals/`. The plate image renders at 4/5 ratio; the hero is full-bleed; commission accordingly with appropriate crops.

### Fonts
All from Google Fonts — already linked in `preview.html`:
- Fraunces (ital, opsz 9..144, wght 400/500/600)
- Inter Tight (wght 400/500/600)
- JetBrains Mono (wght 400/500)

### Logo / Mark
The "H" seal in the header is rendered inline as SVG. Source is in `direction-c.jsx` inside `.dirC__brand`:
```jsx
<svg viewBox="0 0 60 60" width="48" height="48">
  <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="0.8"/>
  <circle cx="30" cy="30" r="22" fill="none" stroke="currentColor" strokeWidth="0.8"/>
  <text x="30" y="36" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="22" fontWeight="600" fill="currentColor">H</text>
</svg>
```
This is intentional — a typographic seal, not a logomark. If Hatch has a real logomark to use instead, swap it in here.

## Files in this bundle

- `preview.html` — runs the design as-is in any browser. Open it directly. No build step.
- `direction-c.jsx` — the React component containing all markup, copy, and structure for Direction C.
- `data.jsx` — all content (specialties, team, testimonials, brand info). Single source of truth.
- `direction-c.css` — full stylesheet for Direction C, with the small base reset from the original `styles-shared.css` prepended.
- `assets/verticals/*` — placeholder imagery (replace in production).
- `README.md` — this file.

## Implementation notes for Claude Code

1. **Start by opening `preview.html`** in a browser. Scroll, click tabs, inspect. Get a feel for the rhythm and density before writing code.
2. Read `direction-c.jsx` end-to-end. It is the canonical reference for markup structure, copy, and section ordering. The class names (`dirC__*`) map 1:1 to the styles in `direction-c.css`.
3. Read `data.jsx` to understand the content shape. When you port, the brand object (`HATCH`), specialties array, team array, and testimonials should map to whatever content layer the target codebase uses (CMS collections, MDX files, JSON config, etc.).
4. Recreate components using the target codebase's primitives. Don't lift the BEM-style `.dirC__*` classes verbatim if the codebase uses CSS-in-JS, Tailwind, CSS modules, or a design-system component kit — translate to that idiom while preserving the visual outcome.
5. Convert the design tokens (color hex values, the type ramp, the 56px page padding, the 999px pill radius, the `#c8b896` hairline) into the codebase's token system before building components. This is what keeps the design coherent as it gets ported.
6. Add responsive behavior (see "Responsive behavior" notes above). The prototype is desktop-only.
7. For accessibility:
   - The CTA pill colors meet WCAG AA contrast (cream-on-dark and dark-on-accent are both ≥ 4.5:1).
   - Header nav and footer links need visible focus states — add a 2px accent-colored focus ring.
   - The hero `<img>` has `alt=""` (decorative); replace with descriptive alt when commissioned photography goes in.
   - Ensure tab roles are correct on the specialty tab strip (`role="tab"` / `aria-selected` / `aria-controls`).
8. Hatch is a real, currently-operating agency with the contact info in `data.jsx`. Treat that data as live — use it; don't replace with lorem.
