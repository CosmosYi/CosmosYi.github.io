# Publication BibTeX links design

## Goal

Add a working `[BibTeX]` action to every publication in the A preview and align the publication resource-link row's typography and spacing with Weijie Ma's homepage.

## Link content and order

- Keep `[Page]` as the first link for every publication.
- Preserve each publication's existing resource and press links.
- Rename ReasoningShield's `[Data]` label to `[Dataset]`.
- Add `[BibTeX]` as the last ordinary resource link for all four publications.
- Keep the GitHub Stars badge after `[BibTeX]` for publications with a repository.
- Separate adjacent bracketed links with one standard text space.

The resulting ReasoningShield sequence is `[Page] [Paper] [Code] [Models] [Dataset] [BibTeX]`, followed by its Stars badge.

## Link-row typography

- Limit the style change to the publication resource-link row.
- Keep the inherited 16-pixel font size, matching Weijie Ma's publication links.
- Change the row line-height from `1.5` to `1.2`, matching Ma's publication-list rhythm.
- Do not alter publication titles, authors, venue typography, media sizes, or card spacing.

## BibTeX data

- Store one local `.bib` file per publication under the A preview.
- Use arXiv metadata as the primary source and cross-check titles, authors, years, identifiers, and published status against the existing site data.
- Keep citation keys meaningful and unique.
- Avoid runtime requests to arXiv or another citation service.

## BibTeX interaction

- Clicking `[BibTeX]` opens a modal containing that publication's citation.
- The modal provides Copy and Download actions and a visible close control.
- It closes through the close control, clicking the backdrop, or pressing Escape.
- Focus moves into the modal when opened and returns to the triggering link when closed.
- Copy provides visible success feedback; download uses the corresponding local `.bib` filename.
- Loading or clipboard failures produce a concise visible status without breaking the page.

## Related text cleanup

- Change the Academic Service item to `Invited Participant, Safety & Alignment Closed-Door Mixer, OpenAI`.

## Verification

- Validate all four BibTeX files for parseable syntax and required metadata.
- Confirm every publication has exactly one working `[BibTeX]` action in the specified position.
- Confirm link rows compute to 16 pixels with a 1.2 line-height and preserve one visible space between bracket groups.
- Open every citation, test Copy and Download, and test all three close paths.
- Verify keyboard focus restoration, desktop layout, 390-pixel mobile layout, and absence of horizontal overflow.
