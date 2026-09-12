# A Preview Profile Vertical Centering

## Goal

Move the left side of the A preview profile slightly upward so its visual center aligns with the portrait.

## Approved adjustment

- Change the desktop first profile-cell top padding from `20px` to `8px`.
- Keep the portrait size, horizontal spacing, content, and image crop unchanged.
- Keep the existing mobile override at `0`, so mobile layout is unaffected.
- Do not change the formal legacy homepage.

## Verification

- Render the A preview at desktop width and compare the visual centers of the text block and portrait.
- Confirm the computed desktop top padding is `8px` and the mobile top padding remains `0px`.
- Inspect the staged diff to ensure only the A preview stylesheet and cache-version references are included.
