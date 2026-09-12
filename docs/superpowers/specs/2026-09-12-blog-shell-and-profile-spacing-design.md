# A Homepage Blog Shell and Profile Spacing

## Scope

Refine the A (`design-previews/weijie`) homepage and its two existing Blog pages. Preserve publication ordering, links, star counters, filters, images, profile wording, social links, and all unrelated content.

## Publication status wording

- Change the self-replication paper venue from `arXiv 2025` to `Preprint, 2025`.
- Change the CyberEvolver venue from `Under review at NeurIPS 2026` to `NeurIPS 2026 (Under Review)`.
- Keep the existing venue typography and do not render `Under Review` as a separate badge.

## Blog shell alignment

- Apply the homepage's fixed navigation shell to both `blog/index.html` and `blog/executable-environments.html`.
- Use the same brand, navigation order, typeface, maximum page width, horizontal padding, translucent background, updated date, and responsive hamburger behavior as the homepage.
- Use Blog-relative links for the homepage sections and CV.
- Mark `Blog` as the current navigation item on both Blog pages.
- Load the existing `site.js` so the mobile navigation behaves consistently without duplicating JavaScript.
- Add the same top offset used by the homepage so Blog content does not sit beneath the fixed navigation.
- Preserve the Blog index's post list and the article page's editorial content. Keep their existing Blog-specific list and article styles.
- Use the same footer wording and visual treatment as the homepage while retaining a useful route back to the homepage or all posts.

## Profile spacing

- Keep the current name, profile title, portrait, social icons, and motto sizes.
- Use a 16 px gap after the name and an 8 px gap after `Ph.D. Student`.
- Use a 14 px gap between the institution line and email.
- Use a 16 px gap between email and the social icon row.
- Use an 18 px gap between the social icons and motto.
- Preserve the approximately 20 px desktop offset of the left profile column and remove that offset on mobile.
- After the first screenshot, allow spacing adjustments of up to 4 px per gap only when needed to balance the left column against the portrait. Record the final computed gaps during verification.

## Verification

- Capture and inspect desktop and 390 px mobile screenshots of the homepage, Blog index, and Blog article.
- Confirm the two venue strings exactly match the approved wording.
- Confirm both Blog pages share the homepage navigation geometry and that the mobile menu opens and closes.
- Confirm Blog content is not obscured by the fixed navigation and no page has horizontal overflow.
- Measure the final Profile gaps and confirm the information reads as distinct groups without extending awkwardly beyond the portrait.
- Confirm existing publication filters still show 4, 3, and 3 items.
