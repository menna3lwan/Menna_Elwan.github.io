# Menna Elwan — Personal Logo System

Two original monogram concepts, each built from real letterforms (not clip-art icons):
the Latin **M** is the outline of Avenir Next Heavy's "M"; the Arabic **ع** (ain) is the
isolated Naskh glyph from **Amiri Bold**, an open-source Naskh revival typeface — so the
Arabic letter is authentic calligraphy, not an approximation.

## Concepts

### Concept 1 — "Fused Valley" (recommended primary)
The ع nests directly inside the M's top valley, its tail threading down through the
middle of the M and continuing below the baseline as a signature flourish. The two
letters are genuinely merged into one monogram, not just placed side by side.

- `icon-monogram-*` — compact version (tail shortened to a small point) for everyday use:
  website header, favicon, app icon, social avatar. This is the **workhorse mark**.
- `icon-hero-*` — full flourish-tail version for large, expressive use: hero sections,
  business cards, letterhead, merchandise, splash screens.

### Concept 2 — "Paired Baseline"
A more conservative alternative: ع and M sit side by side, sharing a top skyline and
baseline, connected by proportion and rhythm rather than overlap. Safer if you want
maximum legibility of both letters at a glance in every context.

Files: `concept2-paired-*`

## Lockups (icon + name)

- `lockup-horizontal-*` — icon left, "Menna Elwan" wordmark right. Use in the site
  navbar, letterhead header, email signature.
- `lockup-stacked-*` — icon above the wordmark, centered. Use for a business card,
  cover page, or square social post.
- `wordmark-*` — the name alone, no icon (Avenir Next Demi Bold, set in the same
  font family as the M for a cohesive type system).

All of the above use **Concept 1's compact icon**. Swap in the Concept 2 or hero SVGs
by editing the `<g>` that holds the icon if you'd prefer a different pairing.

## Colors

| Variant | M | ع | Use |
|---|---|---|---|
| `color` | `#0a0e17` (navy) | `#3ab7ff` (site blue) | Default — matches the portfolio's existing `--primary` / dark theme |
| `black` | `#000000` | *(negative-space cutout)* | Print, stamps, one-color contexts, dark-text-on-light backgrounds |
| `white` | `#ffffff` | *(negative-space cutout)* | Dark backgrounds, dark UI, photography overlays |
| `navy` | `#0a0e17` | *(negative-space cutout)* | Light backgrounds when you want a quieter single-color mark |

**Why "negative-space cutout" for single-color versions:** if both letters were
painted the same flat color, the ع would visually disappear into the M wherever they
overlap. Instead, the single-color versions carve the ع out of the M as a transparent
channel — it reads as an intentional engraved detail rather than as an error, and it
stays legible on any background. The two-tone `color` version doesn't need this trick
because the blue/navy contrast already separates the letters.

## Backgrounds

- `previews/preview-on-light.png` — navy mark on a light card
- `previews/preview-on-dark.png` — white mark on the site's dark navy
- `previews/preview-on-dark-color.png` — full two-tone color mark on dark (this is the
  best all-round default: it already matches the site's dark theme)

## Sizing — tested from favicon to hero

The compact icon was tested at 1024/512/256/128/64/32/16 px:

- **1024 → 64px:** the M + ع fusion, loop, and tail all stay clearly legible.
- **48 → 32px:** still reads as a distinct monogram with a colored accent; fine detail
  in the loop softens slightly under anti-aliasing but remains recognizable.
- **16px (browser tab favicon size):** the ع's fine calligraphic detail is too small to
  render cleanly — it reads as an abstract blue accent rather than a legible Arabic
  letter. This is a normal, expected limit for any script letterform at 16px (the same
  is true of most Arabic/Latin combination marks). **Recommendation:** use
  `icon-monogram-*-16.png` / `-32.png` as-is for a bold, on-brand blue accent, or supply
  a simplified single-letter "M only" favicon at 16px if perfect Arabic legibility at
  that exact size matters to you — happy to produce that variant on request.

## File formats

- `svg/` — hand-built vector source, fully editable (open directly in Illustrator,
  Figma, Inkscape, etc.)
- `pdf/` — vector PDF export of every SVG. Open in Illustrator and use **File → Save As
  → Illustrator (.ai)** or **Illustrator EPS (.eps)** for a one-click native AI/EPS file
  (no native AI/EPS exporter was available in this environment, but PDF is a lossless
  vector interchange format Illustrator reads natively).
- `png/` — transparent-background raster exports at production sizes (1024/512/256/
  128/64/32/16 for icons; multiple widths for lockups and the wordmark).

## Fonts used (for future edits)

- **M:** Avenir Next Heavy (macOS system font) — bold, geometric-humanist, modern-tech feel.
- **ع:** Amiri Bold — open-source (OFL) Naskh revival typeface, https://github.com/aliftype/amiri
- **Wordmark:** Avenir Next Demi Bold — same family as the M for one cohesive type system.
