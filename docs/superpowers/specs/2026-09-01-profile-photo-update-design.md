# Profile photo update design

## Scope

- Preserve the existing `images/changyi.png` and `images/changyi_old.png` files unchanged.
- Add the supplied portrait as `images/changyi_20260901.png`.
- Update the homepage avatar and Person structured-data image URL in `index.html` to use the new file.

## Implementation

The new portrait remains a PNG and keeps its supplied dimensions. The existing homepage image width and layout styles remain unchanged. The current and earlier portrait assets stay in the repository as backups.

## Validation

- Confirm `images/changyi_20260901.png` matches the supplied portrait.
- Confirm both `index.html` references point to the new image.
- Confirm Git records the new image and the intended HTML change only.
