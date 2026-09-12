# Changyi profile photo preview design

## Goal

Preview `images/changyi.png` as the A homepage portrait without changing the established profile layout.

## Change

- Replace the A homepage portrait source from `images/changyi_20260901.png` to `images/changyi.png`.
- Keep the existing alternative text.
- Keep the desktop portrait box at 200 by 267 pixels.
- Keep the mobile portrait box at 170 by 227 pixels.
- Preserve `object-fit: cover` and the current top-centered crop.
- Do not modify either source image file or any other homepage content.

## Verification

- Capture the A homepage at 1440 pixels wide and visually inspect the portrait balance against the profile text.
- Capture the A homepage at 390 pixels wide and confirm the portrait remains fully within the viewport.
- Confirm there is no horizontal overflow and that the image retains its aspect without distortion.
