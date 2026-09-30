# Portfolio content

Reviewed 2026-09-30 against the public GitHub API:
https://api.github.com/users/xiangjianan/repos?per_page=100&type=owner&sort=updated

All 29 public repositories are included in `src/data/repositories.json`. Private repositories and actual personal usage frequency are not known. The snapshot is static; it does not make GitHub API calls in visitors' browsers. Update the snapshot date when refreshing it.

Selection combines the original homepage's emphasis, recent pushes, project descriptions and README content. A push date is activity evidence, not proof of substantial development or daily personal usage.

Featured projects (selected by the owner):
- Mini Desk: local-first workspace; uses the current README URL https://minidesk.online.
- jindou-blog: AI research and technical writing; uses the owner-specified URL https://aiblog.helloxjn.com/.
- daily-digest: mobile-friendly summaries of automated task outputs; uses https://xiangjianan.github.io/daily-digest/.

All homepage copy and project descriptions are in English. LKs and AI Daily News remain in the curated project index.

Readme sources:
- https://github.com/xiangjianan/mini-desk#readme
- https://github.com/xiangjianan/lks#readme
- https://github.com/xiangjianan/ai-daily-news#readme
- https://github.com/xiangjianan/daily-original-games#readme
- https://github.com/xiangjianan/daily-creative-tools#readme
- https://github.com/xiangjianan/fm#readme
- https://github.com/xiangjianan/scheduler#readme

Categories describe purpose rather than implementation language. The index matches the current public repository list: 28 former entries were removed and world-fragments, daily-games, and daily-tools were added. Daily game and utility collections are listed through their current repositories. The default selection is curated in `SELECTED_NAMES` in `src/data/site.js`; filtering exposes every repository in the selected category. Repository-only projects link to source rather than an inferred deployment.
