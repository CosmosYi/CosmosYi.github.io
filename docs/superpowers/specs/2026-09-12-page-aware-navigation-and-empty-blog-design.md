# Page-aware navigation and empty Blog design

## Goal

Make the top navigation indicate the visitor's current section, shorten the displayed update date to month precision, and leave the Blog index ready for future writing without publishing placeholder posts.

## Navigation behavior

- On the homepage, `Changyi Li` is the active item: black text with the blue underline.
- On the Blog index and Blog article template, `Blog` is the active item: black text with the blue underline.
- All other navigation items retain the existing blue, non-underlined appearance.
- Existing `aria-current="page"` attributes remain the source of truth for both styling and accessibility.
- Desktop geometry, mobile menu behavior, typography, link destinations, and the fixed navigation layout remain unchanged.

## Updated label

- Change the navigation label from `Updated: 2026-09-12` to `Updated: 2026-09` on the homepage, Blog index, and Blog article template.
- Bump the shared CSS and JavaScript query-string version so browsers load the new navigation styling instead of a cached copy.

## Blog index

- Keep the `Notes & Essays` heading and its existing introductory sentence.
- Remove the `2026` heading and the complete placeholder post list.
- Retain `blog/executable-environments.html` as an unlinked template for future posts.
- Keep the Blog footer and shared navigation.

## Verification

- Load pages with browser caching disabled and confirm the correct active item on the homepage, Blog index, and article template.
- Confirm all three navigation bars retain identical geometry and typography while only the active item changes.
- Confirm the Blog index contains no post list or year heading.
- Confirm all three pages display `Updated: 2026-09`.
- Test desktop and 390-pixel mobile layouts for horizontal overflow and mobile-menu open/close behavior.
