# Three High-Fidelity Homepage Replicas

## Goal

Create three independent, runnable previews of Changyi Li's academic homepage. Each preview will closely reproduce the visual system and information architecture of one reference site while replacing all personal content and media with Changyi's own material.

The previews will not replace the production homepage. They exist so that one direction can be selected before integration.

## Scope

Each preview contains:

- a homepage;
- a blog index;
- one representative blog article;
- responsive desktop and mobile layouts;
- Changyi's current portrait, biography, advisor links, news, publications, CV link, and social links;
- only local project assets or Changyi-owned external links.

The work does not copy the reference authors' biography text, publication content, photographs, analytics identifiers, or account-specific scripts.

## Output Structure

The three previews will live under a new, isolated directory:

```text
design-previews/
  weijie/
    index.html
    blog/index.html
    blog/executable-environments.html
    style.css
  zhanghanbo/
    index.html
    blog/index.html
    blog/executable-environments.html
    style.css
  micah/
    index.html
    blog/index.html
    blog/executable-environments.html
    style.css
```

Relative paths will point to the repository's existing `images/` and `files/` assets. The previews will not alter `index.html`, `stylesheet.css`, or the current production URLs.

## Shared Content Model

All three versions use the same facts so the comparison is visual rather than editorial:

- Heading: `Changyi Li` and `李长艺` where the reference supports bilingual identity.
- Position: `Ph.D. Student`.
- Program: a joint doctoral program between Shanghai Innovation Institute and Fudan University.
- Supervision: advised by Xudong Pan and Min Yang; co-advised by Xipeng Qiu.
- Research: AI safety, AI alignment, autonomous agents, and cybersecurity agents.
- Featured work: AutoControl Arena, ReasoningShield, CyberEvolver, and AI self-replication.
- Blog sample: an original demonstration article based on Changyi's research themes, clearly marked as preview copy rather than a published claim.

Advisor names, institutions, papers, PDFs, code repositories, and project pages will retain hyperlinks.

## Version A: Weijie/Jemdoc Replica

Reference: <https://weijiemax.github.io/>

This version reproduces the reference's document-like Jemdoc presentation:

- light gray browser canvas;
- centered white content sheet with an approximately 960 px maximum width;
- Georgia/Times serif body typography and restrained Arial metadata;
- dark text, `#224b8d` links, and thin gray section rules;
- table-like two-column hero with identity on the left and a formal rectangular portrait on the right;
- simple Biography, News, Publications, and Blog headings;
- compact square-bullet news and text-led publication entries;
- no decorative cards, gradients, pills, shadows, or invented accent colors.

The blog uses the same white-sheet layout, serif type, blue links, thin rules, and chronological list. Individual posts read like plain academic notes.

## Version B: Zhang Hanbo Replica

Reference: <https://zhanghanbo.github.io/>

This version reproduces the reference's narrow editorial research portfolio:

- white background and an approximately 700–770 px reading column;
- Charter/Georgia-style body copy and Futura-style headings/navigation;
- compact header with English/Chinese switching treatment;
- circular responsive portrait aligned with the introductory text;
- warm brown-red link color taken from the live page rather than a new palette;
- publication rows with a fixed-width image or animation preview on the left and title, authors, venue, and links on the right;
- restrained separators and responsive stacking on small screens.

The existing Changyi project images will replace the reference site's publication GIFs. The blog reproduces the reference's post-list typography, date treatment, language control, and article-width reading layout.

## Version C: Micah Carroll Replica

Reference: <https://micahcarroll.github.io/>

This version reproduces the reference's compact Minima/Jekyll presentation:

- white background with a dark top rule;
- approximately 740 px wrapper;
- Helvetica/system sans-serif typography at roughly 16 px and 1.5 line height;
- site title and text navigation in the header;
- horizontal biography layout with a roughly 220 px portrait on the right;
- conversational introduction;
- compact publication entries without large teaser images;
- category filter controls modeled on Selected, AI Safety, Agents, Cybersecurity, and All;
- blue links and neutral gray borders taken from the reference style.

The blog is a first-class navigation route and follows a conventional Jekyll post index: date, title, excerpt, and tags. The sample article uses the same narrow reading column and minimal typography.

## Implementation Approach

The previews will be clean, dependency-free HTML and CSS so they can be opened directly or served by GitHub Pages. Small vanilla JavaScript is permitted only where a reference interaction requires it, such as publication filters or language switching.

CSS values will follow the live reference pages closely. Shared abstractions will not be introduced across the three versions because doing so would erase meaningful differences between their source designs.

If the selected production direction later uses Jekyll, the chosen static blog markup can be converted into `_layouts`, `_includes`, and `_posts` in a separate integration step. The previews themselves stay static to make visual comparison simple and avoid changing the current deployment setup.

## Responsive Behavior

- Version A collapses the two-column hero while preserving the document-sheet feel.
- Version B moves the circular portrait above the introduction and narrows publication media rows.
- Version C stacks the portrait and biography and wraps filter controls.
- All versions must work without horizontal scrolling at 375 px viewport width.

## Verification

Before handoff:

1. Open all nine HTML pages through a local HTTP server.
2. Check navigation and relative asset links.
3. Compare desktop layouts against the live references at equivalent viewport widths.
4. Check each homepage and blog page at 1440 px and 375 px widths.
5. Confirm that the production homepage and its stylesheet have no additional changes.
6. Scan the preview directories for copied names, biographies, photos, analytics IDs, and links that do not resolve.

## Selection and Integration

After reviewing the three previews, Changyi selects one version or requests bounded adjustments. Production integration, Jekyll conversion, and publication are separate follow-up work and are not part of this preview phase.
