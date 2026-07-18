---
version: alpha
name: "MIT Technology Review"
website: "https://www.technologyreview.com"
description: >-
  MIT's technology magazine whose marketing site runs NeueHaas and NeueHaasText — a proprietary grotesk pairing — across all editorial tiers, with a systematic roster of pastel-neon accent colors (mint aqua, chartreuse, sage green, lavender, peach, sky blue) assigned to editorial sections and used as card background fills rather than brand chrome. The canvas is near-black for the hero and pure white below the fold. The primary CTA button is mint-aqua on black at 0px radius, with a yellow display headline — creating a high-contrast pairing that reads as laboratory print rather than consumer publishing. TRMono, a custom monospace face, appears exclusively in section-identifiers at 10px uppercase.

seo:
  title: "MIT Technology Review Design System for React — pastel-neon section palette, NeueHaas, 16 components"
  metaDescription: "MIT Technology Review's design system as a DESIGN.md file. Near-black hero with pastel-neon section accent fills, NeueHaas display at weight 600, sharp-cornered editorial layout, TRMono section labels, 16 components for React and AI tools."
  highlights:
    - "Pastel-neon section palette — six distinct accent colors (mint aqua, chartreuse, sage green, lavender, peach, sky blue) fill section-category card backgrounds rather than appearing as brand chrome"
    - "Yellow display headline on near-black — the hero h2 runs in golden yellow on a dark canvas, a pairing closer to a scientific journal cover than to consumer tech publishing"
    - "NeueHaas weight 600 across all display — the system never goes to 400 or 700 for headings; a single semibold weight handles every editorial hierarchy tier"
    - "TRMono at 10px for section identifiers — a custom monospace face appears only in the smallest label tier, adding academic-register texture without committing to a full mono voice"
    - "Zero border-radius throughout — every card, input, button, and panel in the system runs at 0px or approximately 1px; there is no pill or rounded-corner treatment anywhere on the editorial surface"
  tags:
    - "News & Publishing"
    - "Education & Learning"
  lastUpdated: "2026-05-19"
  author:
    name: "Dov Azencot"
    url: "https://x.com/dovazencot"
  opening: |
    MIT Technology Review's homepage opens with a near-black canvas, a 62px golden-yellow headline, and a mint-aqua subscribe button at 0px radius. It is the most deliberately academic-looking home page in technology journalism. Where Wired leans into neon-saturated tech-bro energy and The Verge uses a system-level rounded-corner grammar, MIT Technology Review stays flat and compositional — sharp edges throughout, pastel-neon accents filling section card backgrounds rather than appearing on CTAs or nav chrome, and a monospace face (TRMono) reserved for the smallest section-identifier labels.

    The DESIGN.md file packages the system into a machine-readable spec for React and AI tools. Inside: 18 color tokens — a near-black structural layer for the dark hero, a white canvas for editorial content below the fold, six pastel-neon section-category accent fills (mint aqua, chartreuse, sage green, lavender, peach, sky blue), and dark counterpart fills for each section's inverted card variant. Twelve typography tokens span NeueHaas in three display sizes at weight 600, NeueHaasText in two body and label tiers at weight 400, and TRMono at 10px for the single monospace-identifier moment. The radius scale has one value: effectively zero. Sixteen components cover the sharp-cornered CTA, the colored-fill section cards, the TRMono section labels, and the newsletter input module.

    Feed this file to an AI coding tool and it reproduces MIT Technology Review's specific moves: near-black hero with pastel-neon colored-fill section cards, NeueHaas 600 as the single display weight, sharp corners everywhere, golden-yellow display headline, and TRMono for the section-identifier label tier only. The discipline worth borrowing for academic or research publications: using color as a section-classifier rather than as a brand accent creates a navigational system that lets readers identify content categories at a glance — a UX choice driven by editorial function rather than brand marketing.
  related:
    - href: "/design"
      title: "Browse all design systems"
      description: "The full directory of DESIGN.md files on shadcn.io, with live mockups for each."
    - href: "https://www.technologyreview.com"
      title: "MIT Technology Review — official site"
      description: "MIT Technology Review's public marketing site — the source of truth for the live tokens captured in this file."
    - href: "https://github.com/google-labs-code/design.md"
      title: "The DESIGN.md specification"
      description: "Google Labs' open spec for machine-readable design system files — the format this page is built on."
  questions:
    - id: "primary-color"
      title: "What is MIT Technology Review's primary brand color?"
      answer: "MIT Technology Review does not operate a single brand voltage in the conventional sense. The primary CTA button uses mint aqua — the most frequently occurring pastel-neon token — as its background fill against a near-black canvas. But the same mint aqua also fills AI-section card backgrounds, making it a section-classifier as much as a brand accent. The golden yellow used for the hero display headline is a second chromatic moment of similar prominence. The system is better described as a section-palette system than a single-voltage brand: six pastel neon tones (mint aqua at frequency 54, chartreuse at 20, sage at 11, lavender at 11, peach at 10, sky blue at 10) each identify a content category. MIT's historical brand color is cardinal red, but it does not appear in the captured marketing chrome."
    - id: "typography"
      title: "What typefaces does MIT Technology Review use, and what should I use as a substitute?"
      answer: "MIT Technology Review runs three typefaces: NeueHaas for all display and heading tiers (62px, 40px, 26px, 18px) at weight 600; NeueHaasText for body paragraphs and small labels at weight 400 and a bold 700 label variant; and TRMono — a custom monospace face — appearing exclusively in section-identifier labels at 10px uppercase. NeueHaas is a proprietary Linotype grotesk; the closest open-source substitute for the display and heading tiers is Inter at weight 600 with -0.01em letter-spacing adjustment. For NeueHaasText at body sizes, IBM Plex Sans at weight 400 is a close match. TRMono can be approximated by IBM Plex Mono at 10px uppercase with 0.04em letter-spacing."
    - id: "radius-philosophy"
      title: "Why does MIT Technology Review use zero border radius throughout?"
      answer: "The entire captured surface — every card, every CTA button, every text input, every section divider — uses either 0px or approximately 1px border radius. This is not an oversight but a direct consequence of the academic-register aesthetic the publication cultivates. MIT's print magazine tradition uses squared-off editorial frames; the digital system inherits the same compositional grammar. For comparison, Wired uses 4–8px on cards, The Verge uses 8–12px on cards and pill-shaped tags, and Axios uses a minimal 2px on cards. MIT Technology Review's flat-cornered approach places it closer to The Financial Times or The Economist in the spectrum of editorial radius choices — formality through sharpness."
    - id: "section-palette"
      title: "How does the section-color system work, and why are the colors so vivid against black?"
      answer: "MIT Technology Review assigns a distinct pastel-neon color to each editorial section — mint aqua for AI content, chartreuse yellow-green for climate/energy, sage green for biotech, lavender for computing, peach-orange for space and transport, sky blue for emerging technology. These colors fill the background of section-card components in the editorial grid, making the section affiliation of each article readable at a glance without text-based labels. The colors are calibrated at high lightness (L 0.80–0.91 in Oklch) to read vividly against both the near-black hero canvas and the white below-fold canvas. The dark counterpart fills (deep teal, wine, forest green, navy) are used in inverted card variants within dark-background sections. Bloomberg uses a similar section-color system for its market and industry verticals; MIT Technology Review's version is more chromatic and more systematically applied."
    - id: "use-in-project"
      title: "Can I use this DESIGN.md to build an academic or research publication site?"
      answer: "Yes — the file is designed to be fed into Claude, Cursor, or any AI tool that reads structured design tokens. The agent will reproduce MIT Technology Review's specific moves: near-black hero with golden-yellow display headline, mint-aqua sharp-cornered CTA, pastel-neon section-category card fills, NeueHaas-equivalent weight 600 across all display tiers, and TRMono for section-identifier labels. All token references resolve without invention. The caveat for direct replication: the section-palette system requires a clear content taxonomy where articles map cleanly to a small number of recurring categories. Publications with fluid or cross-category editorial structures will find the color-per-section discipline hard to maintain consistently."

mockups:
  - "marketing-hero"
  - "editorial-article"

colors:
  primary: "#89f0e1"
  secondary: "#f2dc6f"
  tertiary: "#d2eb8f"
  section-lavender: "#eaa0f5"
  section-peach: "#f5ad6e"
  section-sky: "#9ddcf2"
  section-teal-dark: "#004142"
  section-wine-dark: "#400a26"
  section-navy-dark: "#14263e"
  ink: "#111111"
  ink-deep: "#08090c"
  canvas: "#ffffff"
  surface-1: "#ebecf0"
  surface-dark: "#302c2c"
  hairline: "#ebecf0"
  shadow: "#000000"

typography:
  display-xl:
    fontFamily: "NeueHaas, \"input mono\", sans-serif"
    fontSize: 62px
    fontWeight: 600
    lineHeight: 64px
    letterSpacing: 0
  display-lg:
    fontFamily: "NeueHaas, \"input mono\", sans-serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 44px
    letterSpacing: 0
  heading-lg:
    fontFamily: "NeueHaas, \"input mono\", sans-serif"
    fontSize: 26px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: 0
  heading-md:
    fontFamily: "NeueHaas, \"input mono\", sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 24px
    letterSpacing: 0
  heading-sm:
    fontFamily: "NeueHaas, \"input mono\", sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: "-0.18px"
  body-lg:
    fontFamily: "NeueHaasText, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0
  body-md:
    fontFamily: "NeueHaasText, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0
  body-sm:
    fontFamily: "NeueHaasText, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0
  label-md:
    fontFamily: "NeueHaasText, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 24px
    letterSpacing: "0.96px"
  button-md:
    fontFamily: "NeueHaasText, sans-serif"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 24px
    letterSpacing: "1.04px"
  nav-link:
    fontFamily: "NeueHaasText, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0
  mono-label:
    fontFamily: "TRMono, monospace, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: "0.4px"

rounded:
  none: "0px"
  xs: "1px"
  sm: "4px"
  full: "9999px"

spacing:
  xs: "4px"
  sm: "10px"
  base: "16px"
  md: "24px"
  lg: "30px"
  xl: "40px"
  2xl: "60px"
  section: "48px"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "16px 28px"
    height: "56px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "10px 20px"
    borderColor: "{colors.ink}"
    height: "44px"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    padding: "16px 40px"
    height: "64px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "4px 10px"
  hero-heading:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.display-xl}"
    padding: "40px 0px"
  hero-section:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.secondary}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "48px 40px 64px"
  body-paragraph:
    backgroundColor: "transparent"
    textColor: "{colors.ink-deep}"
    typography: "{typography.body-md}"
    padding: "0px"
  section-heading:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.heading-lg}"
    padding: "0px"
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    padding: "16px"
    borderColor: "{colors.hairline}"
  card-colored:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.heading-lg}"
    rounded: "{rounded.xs}"
    padding: "16px"
  card-dark:
    backgroundColor: "{colors.section-teal-dark}"
    textColor: "{colors.canvas}"
    typography: "{typography.heading-lg}"
    rounded: "{rounded.xs}"
    padding: "16px"
  section-label:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.mono-label}"
    padding: "2px 10px"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.none}"
    padding: "8px 10px"
    borderColor: "{colors.ink}"
    height: "44px"
  footer:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.canvas}"
    typography: "{typography.body-sm}"
    padding: "48px 40px"
  newsletter-module:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "40px"
  article-card-heading:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.heading-lg}"
    padding: "0px"
---

## Overview

MIT Technology Review's homepage does something most technology journalism avoids: it makes the section-color system do structural work rather than decorative work. **Taxonomy through color.** Each editorial section — AI, Climate, BioTech, Computing, Space — receives a distinct pastel-neon fill used as the card background for every article in that section. The result is a scanning experience where a reader can identify the subject area of an article before reading a word of the headline, by the color of the card's background. Wired uses color as brand energy; The Verge uses color for hover state and accent decoration; MIT Technology Review uses color as editorial wayfinding.

The display typographic system reinforces the academic register. The hero h2 runs in golden yellow on a near-black canvas at 62px / weight 600 in NeueHaas — not the 700+ that consumer-tech titles favor, not the 300 that luxury brands deploy. The primary CTA button is mint aqua on near-black at 0px radius: a sharp-cornered, large-format action surface that reads more like a newspaper button than a SaaS pill. TRMono, a custom monospace face appearing only at 10px uppercase for section identifiers, adds one academic-register texture note without committing the system to a mono-first aesthetic. The full type stack — NeueHaas for display, NeueHaasText for body, TRMono for labels — is the closest thing in editorial publishing to the Neue Haas Grotesk / IBM Plex Mono pairing in a technical documentation system.

**Key Characteristics:**
- Six pastel-neon section fills (`{colors.primary}` mint aqua, `{colors.secondary}` golden yellow, `{colors.tertiary}` chartreuse, `{colors.section-lavender}`, `{colors.section-peach}`, `{colors.section-sky}`) used as card-background section classifiers, not as brand chrome.
- Near-black hero canvas (`{colors.ink-deep}`) with golden yellow display headline — high-contrast pairing that reads as laboratory print.
- NeueHaas weight 600 across all display tiers — a single semibold weight for 62px, 40px, 26px, and 18px headings, with no 700+ or 400 alternative at any heading level.
- TRMono at 10px uppercase for section-identifier labels — the sole monospace occurrence in the chrome.
- 0px border radius everywhere — all cards, buttons, inputs, section panels, and containers run sharp-cornered.
- NeueHaasText at weight 400 for body and weight 700 for label/button tiers — two weights in the text family separate editorial prose from interface actions.
- Dark counterpart fills (`{colors.section-teal-dark}`, `{colors.section-wine-dark}`, `{colors.section-navy-dark}`) for inverted card variants within dark-background sections.

## Colors

### Brand

- **Primary** (`{colors.primary}` — ): frequency 54. Used as bg (36), text (7), border (11). Mint aqua — the AI-section identifier and the primary CTA button fill. The most-used accent color in the captured page, appearing as the subscribe button fill and as the background of AI-content editorial cards.
- **Secondary** (`{colors.secondary}` — ): frequency 20. Used as bg (12), text (4), border (4). Golden yellow — the hero display headline color and a section-card fill for specific editorial categories. The hero h2 text color.
- **Tertiary** (`{colors.tertiary}` — ): frequency 11. Used as bg (11). Chartreuse — section-card background for climate and energy content.
- **Section Lavender** (`{colors.section-lavender}` — ): frequency 11. Used as bg (11). Computing-section card background.
- **Section Peach** (`{colors.section-peach}` — ): frequency 10. Used as bg (6), text (2), border (2). Space and transport-section card background.
- **Section Sky** (`{colors.section-sky}` — ): frequency 10. Used as bg (6), text (2), border (2). Emerging-tech section card background.

### Surface Dark (section inverts)

- **Section Teal Dark** (`{colors.section-teal-dark}` — ): frequency 2. Used as bg (2). Deep teal — inverted card variant for AI-section dark contexts.
- **Section Wine Dark** (`{colors.section-wine-dark}` — ): frequency 2. Used as bg (2). Deep wine — inverted card variant for BioTech-section dark contexts.
- **Section Navy Dark** (`{colors.section-navy-dark}` — ): frequency 2. Used as bg (2). Deep navy — inverted card variant for Computing-section dark contexts.

### Structural

- **Ink** (`{colors.ink}` — ): frequency 2276. Used as text (1142), border (1134). The dominant near-black ink — runs every below-fold headline, body paragraph, nav link, and border rule.
- **Ink Deep** (`{colors.ink-deep}` — ): frequency 842. Used as text (419), border (419), bg (3), shadow (1). A slightly deeper near-black with a faint blue tint — used for the hero canvas background, the footer, and below-fold editorial text where maximum contrast is needed.
- **Canvas** (`{colors.canvas}` — ): frequency 655. Used as text (262), border (260), bg (129), shadow (4). The editorial body floor — pure white for the below-fold content area.
- **Surface-1** (`{colors.surface-1}` — ): frequency 102. Used as text (47), border (47), bg (8). A cool light grey — hairline dividers, the newsletter module background, and secondary surface fills.
- **Surface Dark** (`{colors.surface-dark}` — ): frequency 5. Used as bg (2), text (2), border (1). A warm dark charcoal for mid-dark surface contexts.

### Hairline

- **Hairline** (`{colors.hairline}` — ): carried by the surface-1 token at border contexts. Cool light grey dividers between editorial sections and card outlines.

### Elevation

- **Shadow** (`{colors.shadow}` — ): frequency 180 as shadow ink, concentrated in the deep-shadow gradient overlays beneath photography (0px 0px 180px fill). Used at high opacity to create the fade-to-black effect behind article photography in dark-background sections.

## Typography

### Font Families

The system runs three families: **NeueHaas** (display and heading tiers, weight 600 throughout), **NeueHaasText** (body and label tiers, weights 400 and 700), and **TRMono** (section-identifier labels only, weight 400). NeueHaas and NeueHaasText are proprietary Linotype grotesks used exclusively by MIT Technology Review's brand; TRMono is a custom monospace face. The two Neue Haas variants share a visual family but have different optical corrections — NeueHaas is calibrated for display sizes, NeueHaasText for running text.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-xl}` | 62px | 600 | 64px | Hero h2 ("10 Things That Matter in AI Right Now") |
| `{typography.display-lg}` | 40px | 600 | 44px | Section display headings |
| `{typography.heading-lg}` | 26px | 600 | 28px | Article card headlines, primary grid h3 |
| `{typography.heading-md}` | 18px | 600 | 24px | Secondary article card headings |
| `{typography.heading-sm}` | 18px | 600 | 20px | -0.18px | In-grid subheadings |
| `{typography.body-lg}` | 18px | 400 | 24px | Lead body paragraphs |
| `{typography.body-md}` | 16px | 400 | 22px | Default running body text |
| `{typography.body-sm}` | 14px | 400 | 24px | Captions, metadata, secondary text |
| `{typography.label-md}` | 12px | 700 | 24px | 0.96px | Small-caps section labels above article groups |
| `{typography.button-md}` | 13px | 700 | 24px | 1.04px | Subscribe CTA button label |
| `{typography.nav-link}` | 16px | 400 | 22px | Top navigation links |
| `{typography.mono-label}` | 10px | 400 | 24px | 0.4px | TRMono section identifier (uppercase) |

### Principles

NeueHaas at weight 600 is the system's single display weight — used at 62px, 40px, 26px, and 18px without variation. This uniformity prevents a weight-ladder approach where display headlines shout and sub-headings whisper. Every heading arrives at the same semibold confidence regardless of size, letting the size differential alone communicate hierarchy. The label and button tier jumps to NeueHaasText weight 700 and adds uppercase tracking (0.96–1.04px), creating a clear signal that these small elements are interface actions rather than editorial text. TRMono at 10px uppercase sits beneath even the labels — a register-marker rather than a navigation device.

### Note on Font Substitutes

NeueHaas and NeueHaasText are proprietary. The closest open-source substitute for display and heading tiers is **Inter** at weight 600, with line-height set to 1.03× font-size to match NeueHaas's tight leading. For NeueHaasText at 16px body, **IBM Plex Sans** at weight 400 is the closest match — both have a slightly technical, neutral quality that suits editorial prose. For TRMono at 10px uppercase, **IBM Plex Mono** with 0.04em letter-spacing is the nearest freely available equivalent.

## Layout

### Spacing System

- **Base unit:** 16px — the dominant padding token, appearing 102 times.
- **Tokens:** `{spacing.xs}` 4px · `{spacing.sm}` 10px · `{spacing.base}` 16px · `{spacing.md}` 24px · `{spacing.lg}` 30px · `{spacing.xl}` 40px · `{spacing.2xl}` 60px · `{spacing.section}` 48px.
- **Section padding:** `{spacing.section}` (48px) vertical for the hero band; 40px horizontal on major sections.
- **Card internal padding:** `{spacing.base}` (16px) — standard across all editorial card types.
- **Newsletter module padding:** `{spacing.xl}` (40px) — the most generous contained surface on the page.

### Grid & Container

- **Hero:** full-width near-black canvas at `{colors.ink-deep}`, with content centered at approximately 840px max-width. The golden-yellow headline in a narrow column (316px wide in the extracted component) reads as a tall thin editorial column, distinct from the full-bleed hero conventions of most consumer tech publications.
- **Editorial grid:** a primarily two-column layout at the content level, with the hero article taking left-column prominence and secondary articles at right. Below the fold, the grid opens to a 3–4 column card grid with section-colored card backgrounds.
- **Newsletter module:** a centered container at approximately 720px max-width with the cool grey `{colors.surface-1}` background — the only below-fold surface that departs from pure white.
- **Most Popular section:** a full-width white surface with article titles in a uncluttered horizontal scroll at desktop.

### Rhythm

The page alternates between the near-black hero band and the white editorial-content band without any gradient or photographic transition. The boundary is a hard cut. Below the fold, section-colored card grids are interspersed with white editorial sections, creating a rhythm of color-then-neutral that mirrors the section-palette taxonomy. The deep-shadow gradient (`{spacing.section}` 180px shadow) appears behind article photography in sections where text overlays photography — a purely structural shadow, not an elevation effect.

## Elevation

The system uses the **deep shadow gradient** technique rather than traditional card shadows. The 180px bottom shadow in near-black (`{colors.shadow}`) appears as a fade-to-black gradient beneath article photography, creating contrast for white text overlaid on images. This is a photography-text legibility device, not a surface-elevation signal.

- **Flat (no shadow):** all cards, nav, newsletter module, editorial content — 98% of surfaces.
- **Photography gradient:** 0px 0px 180px `{colors.shadow}` ink — the fade-beneath-photo treatment that lets white headlines sit on photographic backgrounds without a separate overlay panel.
- **Card outlines:** `{colors.hairline}` 1px borders on standard editorial cards — surface separation comes from hairlines rather than shadows.

## Shapes

The radius scale is **flat throughout**:

- `{rounded.none}` 0px — all standard surfaces: editorial cards, the subscribe CTA button, the email subscription input, section panels, and the hero.
- `{rounded.xs}` 1px — a near-zero rounding appearing on cards in some article grid contexts; visually indistinguishable from 0px but technically present.
- `{rounded.sm}` 4px — appears on the `tag-chip` UI in reader-interaction contexts.
- `{rounded.full}` 9999px — reserved for circular avatar treatments (profile icons, author photography).

There is no pill CTA, no rounded-corner card, no 8–20px middle tier. The system is the flattest in the publishing category — flatter than The Financial Times, flatter than the WSJ, and decisively flatter than consumer-tech publications like The Verge or Wired. The sharpness signals academic formality.

## Components

**`button-primary`** — The signature subscribe CTA. Mint aqua `{colors.primary}` fill, near-black `{colors.ink-deep}` text, NeueHaasText at 13px / 700 / uppercase / 1.04px tracking, 0px radius, 16×28px padding, 56px height. "Subscribe" is the canonical instance. No border; the mint fill sits against the near-black hero canvas with maximum contrast.

**`button-secondary`** — Transparent fill, near-black text, 1px ink border, 0px radius, 10×20px padding, 44px height. Secondary actions below the fold — newsletter "Sign up" style CTAs outside the hero.

**`top-nav`** — White `{colors.canvas}` surface, near-black text, 64px height, 40px horizontal padding. Contains the MIT Technology Review wordmark, primary section navigation links, and the subscribe CTA on the right side.

**`nav-link`** — Transparent, near-black text, NeueHaasText 16px / 400, 4×10px padding. Section navigation links — no uppercase, no tracking, no bold weight. The nav intentionally reads as quiet reference text.

**`hero-section`** — Near-black `{colors.ink-deep}` canvas, golden yellow headline, 48×40px padding, 0px radius. The full-width hero band that anchors the top of the page.

**`hero-heading`** — Golden yellow `{colors.secondary}` text, NeueHaas 62px / 600, 40px vertical padding, 0px horizontal. The hero display headline — unusually narrow in rendered width (316px) for a 62px type size.

**`body-paragraph`** — Near-black `{colors.ink-deep}` text, NeueHaasText 16px / 400, 22px line height. The default reading text for article body content.

**`section-heading`** — Near-black text, NeueHaas 26px / 600. Section display headings within the editorial grid.

**`card`** — White `{colors.canvas}` surface, near-black text, approximately 1px hairline border, 16px padding. The default editorial card for articles without a section color assignment.

**`card-colored`** — Section-pastel fill (mint aqua `{colors.primary}` as the canonical instance), near-black text, NeueHaas 26px / 600, approximately 1px radius, 16px padding. Used for every article in a color-coded section — the background fill identifies the section, not the text label.

**`card-dark`** — Deep teal `{colors.section-teal-dark}` fill (or wine/navy variants), white text, NeueHaas 26px / 600, approximately 1px radius, 16px padding. The inverted card variant for dark-background editorial sections.

**`section-label`** — Transparent, near-black text, TRMono 10px / 400 / uppercase / 0.4px tracking, 2×10px padding. The monospace section-identifier label — the single TRMono occurrence in the entire chrome.

**`text-input`** — White `{colors.canvas}` fill, near-black text, NeueHaasText 18px / 400, 0px radius, 8×10px padding, 44px height, 1px ink border. Email subscription field — sharp-cornered to match the CTA button's zero-radius treatment.

**`footer`** — Near-black `{colors.ink-deep}` fill, white text, NeueHaasText 14px / 400, 48×40px padding. Mirrors the hero canvas color, bookending the page.

**`newsletter-module`** — Cool grey `{colors.surface-1}` fill, near-black text, 0px radius, 40px padding. The newsletter signup container — the only below-fold surface that departs from pure white; the grey separates it from the surrounding editorial content without introducing an accent color.

**`article-card-heading`** — Transparent, near-black text, NeueHaas 26px / 600. The heading text within editorial cards.

## Do's and Don'ts

**Do** treat the pastel-neon colors as section classifiers, not brand accents. The mint aqua, chartreuse, lavender, peach, and sky blue tokens exist to identify content sections at a glance — they belong on card backgrounds and section dividers, not on hover states, inline links, or navigation chrome outside the section grid.

**Do** keep every display and heading tier at NeueHaas weight 600. The uniformity of a single display weight across 62px, 40px, 26px, and 18px is the system's typographic signature — introducing a lighter 400 weight on secondary headings or a heavier 700 on the hero breaks the semibold-throughout discipline.

**Do** use TRMono exclusively for the 10px uppercase section-identifier label tier. The monospace appears exactly once in the chrome to add academic register to the smallest label surface. Using it at body sizes or in headings converts it from a texture note into a typographic voice, which the system explicitly avoids.

**Do** maintain 0px border radius on all interactive surfaces including the subscribe CTA button. The flat-cornered CTA button is the system's most counter-discoverable choice and its clearest academic-register signal — rounding it even to 4px moves it toward consumer tech publishing and away from the scientific-journal aesthetic.

**Don't** introduce the section colors into the navigation bar or the CTA button label. The mint aqua appears on the subscribe button as a background fill against the near-black hero — using it as a link accent inside the white-canvas editorial area would dissolve the section-classification function it serves.

**Don't** render golden yellow (`{colors.secondary}`) outside the hero display headline. The golden yellow is calibrated for maximum contrast on a near-black background; against the white canvas below the fold it reads as a muted tan rather than a vivid yellow, and its sectional meaning (it also identifies specific editorial categories) becomes ambiguous.

**Don't** use box shadows on cards. The system achieves card separation through hairline borders (`{colors.hairline}`) and section-color fill contrast. Adding shadows on editorial cards introduces a depth layer the academic register explicitly does not use.

**Don't** expand card padding beyond 16px. The editorial grid's information density depends on 16px as the card-internal padding standard. Expanding to 24px reduces headline density per viewport and changes the reading character of the page from dense-information-surface to selected-magazine — a fundamentally different editorial posture.

## Known Gaps

- **Hover and focus states:** no interactive hover states were captured from the static marketing surface; link underline conventions, button hover fills, and focus ring styles are not documented.
- **Dark mode:** the page uses a dark hero section and a light editorial body, but a full system-level dark mode is not represented in the captured tokens.
- **Article page typography:** the long-form article reading surface likely uses a larger body size, increased line height, and possibly a different font-weight profile optimized for sustained reading — not captured from the homepage.
- **Subscriber and paywall states:** the metered paywall overlay, the registration prompt, and the subscriber-specific navigation states are not visible on the public homepage capture.
- **Mobile layout:** the mobile navigation drawer, the collapsed section grid, and the touch-optimized article card sizes at small breakpoints are not represented.
- **Section-color mapping:** the complete taxonomy linking specific content sections to specific pastel-neon tokens is not fully documented — only the most frequent colors were captured; additional section colors may exist for categories not heavily represented in the captured page.
- **Animation and transitions:** the article card hover animations, the section-carousel scroll behavior, and the newsletter module interaction states are not captured.
