# Menna Elwan — Personal Monogram

A from-scratch redesign of the personal brand mark, built to replace the earlier
"M + ع" gradient-tile logo. This version drops the container entirely: the mark
is a single flat shape on a fully transparent canvas — no background, no
gradients, no shadows, no decorative effects.

## Concept: "Carved Valley"

The mark is a bold letter **M** with the Arabic letter **ع (ain)** — drawn in a
simplified, modern take on Naskh calligraphy (a rounded counter/loop flowing
into a swooping tail) — **carved into it as a single continuous negative-space
cut**, rather than two letters placed side by side or overlaid as separate
colors. Read it as "M", then look again and find "ع" living inside it: one
personal monogram, not two adjacent letterforms.

- **No background** — the SVG/PNG files contain only the ink shape; the canvas
  is fully transparent. Any light/dark tiles shown in `previews/` are preview
  mockups only, not part of the delivered files.
- **No gradients/effects/shadows** — pure flat single-color construction.
- **ع stays recognizable** as a Naskh letterform (loop + counter + tail) even
  merged into the M.
- **Subtle Flutter/tech nod** — the outer silhouette uses a small, consistent
  corner-rounding (a quiet nod to modern, geometric, Material-adjacent design
  language) without touching the Flutter logo or its colors in any way.
- **Icon-only** — works as a standalone monogram, no wordmark required.

Three alternative merge concepts were explored before this direction was
chosen — see `previews/concepts-contact-sheet.png` (carved hole vs. an
escaping-tail flourish vs. an additive fused loop) and
`previews/light-dark-test.png` / `previews/size-legibility-test.png` for the
visibility/legibility testing that informed the final construction (including
why a separate, bolder favicon-specific variant exists — see below).

## Files

```
svg/
  menna-monogram-black.svg        primary mark, dark ink       — portfolio, GitHub, CV, print
  menna-monogram-white.svg        primary mark, light ink      — dark surfaces, social banners
  menna-monogram-currentColor.svg primary mark, fill="currentColor" — inline embedding (navbar, HTML)
  menna-favicon.svg               favicon-optimized shape, auto light/dark via prefers-color-scheme
  menna-favicon-black.svg         favicon-optimized shape, static dark ink

png/  (all transparent backgrounds)
  menna-monogram-black-{128,256,512,1024,2048}.png
  menna-monogram-white-{128,256,512,1024,2048}.png
  menna-favicon-{16,32,48,64,180,192,512}.png

source/
  menna-monogram.pdf              vector editable source (Illustrator / Figma / Inkscape)
  (the SVGs themselves are also fully editable vector source)

previews/
  concepts-contact-sheet.png      the 3 concepts explored, at 1024/64/32/16px
  light-dark-test.png             visibility test on light + dark preview tiles
  size-legibility-test.png        final mark at 1024/64/32/16px
  favicon-size-test.png           favicon-optimized variant at 64/32/16px
```

## Why two shapes (primary vs. favicon)?

At full size the carved ع detail (loop + tail) reads clearly. At true favicon
scale (16–32px) that fine detail naturally softens — a universal limitation of
fine negative-space at tiny pixel grids, not specific to this design. Rather
than compromise the primary mark's detail, `menna-favicon*` is a bolder,
simplified variant of the same construction (a rounder, chunkier cut) tuned
specifically to stay crisp at 16–32px. Everywhere else — website, GitHub,
LinkedIn, CV, social profiles — use the primary `menna-monogram-*` mark.
