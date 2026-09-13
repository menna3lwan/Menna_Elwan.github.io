# Menna Elwan — Logo Kit (v2: "Fused Ascender")

## Concept

The mark merges the Latin letter **M** with the Arabic letter **ع** (ain),
written in **Ruq'ah (خط الرقعة)** calligraphy — sourced from the Aref Ruqaa
typeface, a dedicated Ruq'ah-style Arabic font, deliberately distinct from
the Naskh style used in earlier drafts.

The two letters are not placed side by side or carved as a separate hole —
the entire mark is built from **one continuous stroke**. Starting at the
M's left foot, the line climbs to the left peak, drops into the valley,
then instead of rising straight to a plain right-hand point, it curls
through the ع's Ruq'ah hook (open counter and all) on its way up to the
right peak. The ع is literally one of the M's own strokes, not an
add-on — reflecting the merge of "M" (Menna) and "ع" (the first letter of
علوان / Elwan).

The outer M keeps crisp, mitred, geometric corners (the "modern/tech" half
of the identity); the ع portion is the only part of the mark allowed to
flow and curve (the "classic/calligraphic" half) — one shape, two
readings, deliberately balanced rather than decorative.

## Files

- `svg/menna-monogram-{black,white,currentColor}.svg` — the icon-only mark.
  `currentColor` is used for the site navbar so it follows the active
  theme automatically.
- `svg/menna-primary-logo-{black,white}.svg` — the primary lockup: mark +
  "Menna Elwan" wordmark + "Flutter Developer" subline.
- `svg/menna-favicon.svg` — favicon build with an embedded
  `prefers-color-scheme` rule so it auto-inverts on dark browser UIs.
- `svg/menna-favicon-black.svg` — same favicon-safe mark, fixed dark fill.
- `png/menna-monogram-{black,white}-{128,256,512,1024,2048}.png` —
  transparent monogram rasters.
- `png/menna-favicon-{16,32,48,64,180,192,512}.png` — transparent favicon
  and touch-icon rasters.
- `png/menna-primary-logo-{black,white}.png` — transparent primary-logo
  raster.
- `source/menna-monogram.pdf`, `source/menna-primary-logo.pdf` — vector
  editable source files (open in Illustrator / Figma / Inkscape / Affinity
  Designer to adjust the outline directly).
- `previews/light-dark-size-test.png` — verification sheet: monogram and
  favicon mark on light and dark backgrounds at 256/64/32/16px.

## Design notes

- All files are fully transparent — no background baked in.
- The favicon mark uses a slightly bolder stroke and a more open counter
  than the primary mark, because the finer counter of the primary mark
  starts to lose definition below ~32px. Below ~16px the ع's open counter
  reduces to a simple bold "M" silhouette — a deliberate, considered
  fallback rather than a compromise on the primary mark's detail.
- Corner treatment: crisp/mitred on the outer M, softened with a small
  fillet pass (`buffer(-r).buffer(r)`) for a refined, non-razor edge; the
  ع hook keeps its natural calligraphic curve throughout.
