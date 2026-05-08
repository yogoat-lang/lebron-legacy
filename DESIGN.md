# Design Brief

## Direction

Premium Sports Editorial — bold, sophisticated showcase optimizing for 60-second video prominence and career statistics visibility with gold accents representing legacy and achievement.

## Tone

Dark editorial aesthetic inspired by ESPN and Sports Illustrated — professional, ambitious, unforgettable sports broadcasting experience.

## Differentiation

Gold accent lines on key statistics and video controls create a premium luxury sports showcase distinct from standard sports content.

## Color Palette

| Token      | OKLCH   | Role                            |
| ---------- | ------- | ------------------------------- |
| background | 0.145 0.014 260 | Deep charcoal, primary surface |
| foreground | 0.94 0.01 260 | Editorial text, high contrast |
| card       | 0.18 0.014 260 | Elevated sections, facts grid |
| primary    | 0.72 0.17 70 | Gold/amber, trophies, stats |
| accent     | 0.42 0.14 240 | Slate blue, interactive states |
| muted      | 0.22 0.02 260 | Secondary backgrounds |

## Typography

- Display: Space Grotesk — bold, athletic headings for hero and section titles
- Body: DM Sans — clean, readable, professional interface text
- Mono: Geist Mono — stats and numerical data
- Scale: hero clamp(3rem, 7vw, 7rem) bold tight, h2 text-3xl bold, label text-sm font-semibold uppercase, body text-base

## Elevation & Depth

Minimal shadow hierarchy: subtle xs/sm on hover, elevated shadow on video player and card focus states. Depth through layering and color shifts, not dramatic blur.

## Structural Zones

| Zone    | Background  | Border   | Notes                                   |
| ------- | ----------- | -------- | --------------------------------------- |
| Header  | card        | primary (3px bottom) | Navigation with gold underline |
| Hero    | background  | —        | Full-width video player, title overlay |
| Facts   | alternating (card/muted) | border | 8-10 stat cards with gold accents |
| Timeline| card        | accent   | Team era sections with achievements |
| Footer  | muted       | border   | Copyright and external links |

## Spacing & Rhythm

SpaciousLayout: 3rem/4rem gaps between major sections, 1.5rem padding inside cards, 0.5rem micro-spacing in stat labels. Editorial density with breathing room.

## Component Patterns

- Buttons: gold primary, rounded-lg, hover elevated shadow, uppercase label
- Cards: rounded-lg, bg-card/bg-muted alternating, border-border subtle, shadow-sm hover:shadow-md
- Stats: label (text-sm uppercase gold), value (text-2xl bold mono), accent-line separator
- Video: full-width hero, rounded-lg, shadow-elevated, play overlay

## Motion

- Entrance: fade-in 0.4s ease-out on page load
- Hover: shadow elevation 0.2s smooth transition
- Decorative: slide-up 0.5s ease-out for facts cards (staggered)
- Video controls: smooth opacity transitions

## Constraints

- Never use raw colors; reference CSS tokens only
- Gold accents only on primary actions, stats, and achievements
- Dark mode primary (no light variant)
- Maintain AA+ foreground-on-background contrast (0.94 vs 0.145 = 0.795 delta)
- Maximum 3px gold lines for visual accent

## Signature Detail

Gold accent lines beneath key statistics and video controls — subtle premium sports magazine detail that elevates the entire experience and signals achievement focus.
