# CV synchronization design

## Scope

- Update the English CV source at `/Users/mac/Personal/CV/CV_en/main.tex`.
- Update the Chinese CV source at `/Users/mac/Personal/CV/CV_zh_from_en/main.tex`.
- Regenerate both PDFs.
- Replace only the English PDF served by the personal website at `files/Changyi_Li_CV.pdf`.

## Changes

- Comment out the undergraduate education entry in both CV sources while retaining the source text.
- In the English CV, add the cybersecurity focus to Research Interests.
- Add the Seoul Alignment Workshop invited talk to AutoControl Arena's impact.
- Add ReasoningShield's NeurIPS 2026 review scores (5/5/4, all positive), update Hugging Face downloads from 2K+ to 3K+, and add its project-page link.
- Add the invention-patent outcome to the Full-Stack Multimodal Guardrail System entry.

## Validation

- Build both LaTeX sources successfully.
- Confirm that neither generated PDF contains the undergraduate education entry.
- Confirm the website PDF is byte-identical to the regenerated English PDF.
- Render the PDFs and inspect their page count and layout for clipping or overflow.
