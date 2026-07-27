# Design Notes — Saroja Polasapalli Portfolio

## Source of truth
Content extracted via OCR/VLM from `Saroja_.pdf` + `POWER POINT PRESENTATION 2019 ELECTIONS.pptx`.
Design replicated from the 10+ reference screenshots provided by the client.

## Color palette (confirmed from screenshots)
> NOTE: The client's brief said "deep maroon + gold + cream", but every reference screenshot
> consistently shows **deep forest green + gold + cream**. The screenshots are the visual ground
> truth, so the live palette uses green. Hex values below are taken directly from the screenshots.

| Token | Hex | Usage |
|---|---|---|
| `--forest` | `#1B4D3E` | Primary brand — logo, buttons, headlines |
| `--forest-deep` | `#143a2e` | Hover / footer bg |
| `--forest-ink` | `#0E2A22` | Deepest green (impact section bg) |
| `--gold` | `#C9A961` | Accent — tagline, italic emphasis, dividers |
| `--gold-bright` | `#D4AF37` | Hover/bright gold |
| `--cream` | `#FAF8F5` | Page background |
| `--cream-warm` | `#F3EFE7` | Subtle surface / cards |
| `--ink` | `#1F2A24` | Body text |
| `--slate` | `#6B6B6B` | Secondary text |
| `--line` | `#E4DED2` | Hairline borders |

## Typography
- **Display / Headings**: `Playfair Display` (serif) — authority, elegance. Weights 600–800. Italic for emphasis words.
- **Body / UI**: `Plus Jakarta Sans` (sans-serif) — clean, modern. Weights 400–600.
- **Labels / small caps**: uppercase, letter-spacing 0.15–0.2em, gold or slate.

## Section order (matches nav)
1. Hero (no index)
2. `01 — ABOUT` two-column split (image left / text right) + quick-facts grid
3. `02 — JOURNEY` alternating left/right timeline cards with center spine
4. `03 — IMPACT IN NUMBERS` dark-forest section, 4 glassmorphism stat cards w/ watermark numbers
5. `04 — POLASAPALLI FOUNDATION` split headline + 3 vertical portrait cards + 4 initiative tiles
6. `05 — VOICES` quote carousel / grid
7. `06 — EVENTS & PRESS` newspaper-clipping grid
8. `07 — GALLERY` masonry of community photos
9. `08 — CONNECT` contact section with address/phone/email
10. Footer (dark forest, sticky to bottom)

## Key design patterns
- Sticky header: circular "S" monogram + "Saroja Polasapalli" serif + "MAYOR · LEADER · REFORMER" gold micro-tagline; center nav; "Get In Touch" forest pill CTA with phone icon.
- Section labels: `—— 0N —— LABEL` gold uppercase with hairlines.
- Headlines: two-tone — line 1 forest green, line 2 gold italic emphasis word.
- Hero: floating badges on portrait ("ESTABLISHED 2005", "FULL TERM 2005–2010", frosted name card).
- Impact cards: translucent green glass, big watermark numerals 01–04, gold lucide icon, big serif stat, gold caps label.
- Journey: vertical center spine with gold dots; cards alternate left/right; year in large gold serif.
- Floating "Get Involved" pill button bottom-right (persistent).
- 3-second loading screen: forest gradient bg, animated "S" monogram, percentage counter 0→100%, gold progress bar.

## Image mapping (from PPTX media)
- Hero portrait: `image2.jpeg` (solo headshot, white & gold saree)
- Foundation cards: `image16` (women march), `image18` (rural visit), `image19` (lamp lighting)
- Gallery: image5,6,7,8,9,15,16,17,18,19,33,34
- Events/press: image3,12,13,14,21,22,25–32 (newspaper clippings)
- Journey: image5,7,8,9,11,15,19,20,23,34,37,38
