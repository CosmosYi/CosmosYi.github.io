# A Homepage Profile Rhythm and Adaptive Publication Media

## Scope

Refine only the A (`design-previews/weijie`) homepage. Preserve the current typography, navigation, publication text, star counters, Spotlight styling, and all unrelated homepage content.

## Profile layout

- Keep the desktop portrait at 200 × 267 px and the mobile portrait at 170 × 227 px.
- On desktop, offset the left profile information downward by approximately 20 px instead of aligning the name with the top of the portrait.
- Keep this information order: name, `Ph.D. Student`, institutions, `Shanghai, China`, email, social icons.
- Render `Shanghai, China` on its own line immediately below the institutions.
- Add approximately 10 px of vertical separation between the location and email block.
- Add the personal motto `I would devote 90% of my time to defining the right problem and the remaining 10% to solving it.` below the social icons.
- Present the motto as understated small italic text with no attribution. It belongs to the left profile column and should wrap naturally without competing with the name.
- Do not add artificial top spacing to the stacked mobile layout.

## Social links

- Keep the order Google Scholar, GitHub, X, LinkedIn, WeChat.
- Render all five marks as monochrome black inline SVGs with consistent visual weight.
- Keep each clickable area at 30 × 30 px and align all five icons on one baseline.
- On hover or keyboard focus, reduce opacity to approximately 65%.
- Preserve the existing destinations, `_blank` behavior, `noopener noreferrer`, `aria-label`, and `title` attributes.

## Publication media

- Keep the desktop media column at 240 px so the existing text-to-image column ratio remains stable.
- Remove fixed image heights, forced 16:9 aspect ratios, and cropping.
- Display each publication image at the full media-column width with `height: auto`, preserving its intrinsic aspect ratio.
- On mobile, use the available content width with `height: auto`.
- Preserve the existing light border, rounded corners, and subtle shadow; the frame height must follow the image.

## Publication filters

- Keep only `Selected`, `AI Safety`, and `Agents`.
- Do not restore a `Cybersecurity` filter or category token.
- Expected visible counts remain 4, 3, and 3 respectively.

## Verification

- Capture and inspect desktop and 390 px mobile screenshots.
- Confirm there is no horizontal overflow.
- Confirm the five social links are 30 × 30 px, aligned, monochrome, keyboard-accessible, and point to the intended destinations.
- Confirm the desktop left profile content begins approximately 20 px below the portrait top while mobile receives no artificial offset.
- Confirm the motto appears below the social icons, has no Einstein attribution, and wraps without overflow.
- Confirm every publication image preserves its natural aspect ratio and the media column remains 240 px wide on desktop.
- Confirm publication filter labels and visible counts are correct.
