# WeChat QR Image Replacement Design

## Scope

Replace the WeChat QR image displayed on `wechat.html` with the supplied WeChat profile QR screenshot. Keep the page markup, URL, supporting text, and styling unchanged.

## Implementation

The supplied JPEG will replace the contents of `images/wechat.png`, retaining the existing filename and reference. This avoids changes to `wechat.html` and keeps the homepage WeChat link working without modification.

The existing responsive `.qr` rule will continue to constrain the image to a maximum width of 280px while preserving its portrait aspect ratio.

## Validation

Confirm the replacement image is present at `images/wechat.png`, the page still references that path, and the repository's site build completes successfully.
