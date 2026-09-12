# A Preview Photo Size Adjustment

## Goal

Make the portrait in the Weijie-based A preview slightly smaller without changing the surrounding layout or image crop.

## Approved adjustment

- Desktop portrait: `200 × 267px` to `190 × 254px`.
- Mobile portrait: `170 × 227px` to `162 × 216px`.
- Desktop portrait column: `200px` to `190px`.
- Keep aspect ratio, `object-fit`, `object-position`, spacing, and the formal legacy homepage unchanged.

## Verification

- Load the A preview at desktop and mobile widths.
- Confirm the portrait is about 5% smaller and remains aligned with the profile content.
- Confirm no files outside the A preview are changed by the implementation.
