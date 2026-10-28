# Portfolio site — working notes for Claude

Static personal site for Somesh Khandelia. No build step, no framework, no npm
install. Plain HTML/CSS/JS served straight from GitHub Pages.

Live at `https://someshkhandelia.github.io`.

## Hard rule: no personal data

This site is public and its PDF is indexed by search engines. **Never** add to any
file in this repo:

- home address
- phone numbers
- date of birth or place of birth
- nationality or marital status

The source CVs these files were built from contain all of the above. If asked to
re-import from a CV, strip those fields first and say so. "Valid German work permit"
is fine and is deliberately present in `hero.facts`.

## Layout

The site is deliberately text-only. There are no images, no `assets/img/`
directory, and no photo fields in `content.js` — don't reintroduce them unless the
user asks.

```
index.html               Empty shell. Sections are divs; JS fills them.
assets/js/content.js     ALL content. This is the only file to edit for copy changes.
assets/js/app.js         Render engine. Rarely needs touching.
assets/css/style.css     Theme tokens in :root at the top; components below.
assets/files/            CV PDFs: CV_… (English), Lebenslauf_… (German)
tools/build_cv.py        Source for both CV PDFs. Not part of the site; run by hand.
.nojekyll                Required — stops GitHub running Jekyll and dropping assets/
```

## How content works

Every user-visible string is a pair:

```js
{ en: "English", de: "Deutsch" }
```

`app.js` re-renders the entire page on language switch, so there are no `data-i18n`
attributes — just keep both halves of every pair populated. **If you add English,
add German in the same edit.** German copy here is idiomatic, not literal: match
that register rather than translating word by word.

German job titles in `journey[].role` come from the user's own formal German CV
(*Wissenschaftlicher Mitarbeiter*, *Werkstudent, Teilzeit*, *Wissenschaftler,
Masterarbeit*, *Praktikum*). Don't "improve" them — they're contractual.

### CV PDFs

`meta.links.cv` is an `{en, de}` pair like everything else, so the hero's download
button serves the CV in the page language. Both PDFs come from `tools/build_cv.py`
(ReportLab, Python 3.10+), which uses the same `{"en", "de"}` pairs. Edit both halves
there, then run `python3 tools/build_cv.py`. It rewrites both files and prints their
page counts, and both must stay at two pages. The English CV keeps the German
contractual titles with an English gloss in brackets; the German CV uses the titles
alone. The no-personal-data rule above applies to this file too.

### Adding a timeline stage

Append to `CONTENT.journey`, newest first. `type` is `work` | `education` |
`milestone` (controls the badge and the dot colour). `location.maps` is a
`https://www.google.com/maps/search/?api=1&query=<urlencoded>` link.

### Sections

`renderPublications` hides itself if `CONTENT.publications` is empty, and the nav
filter in `renderNav` drops links whose content array is empty. A travel/blog section
existed and was removed on request — check git history if it's ever wanted back.

## Theme and language

CSS custom properties under `html[data-theme="dark"|"light"]`. An inline script in
`index.html` applies the saved theme before first paint to avoid a flash.

`localStorage` is wrapped in try/catch with an in-memory fallback (`store` in
app.js) so the page also works from `file://`. Don't unwrap it.

## Verifying a change

```bash
python3 -m http.server 8000
```

Then check, at minimum: both themes, both languages, and a mobile width. Toggling
language re-renders everything, so a broken content entry usually shows up there
first. Watch the console — it should be silent apart from Google Fonts if offline.

## Cache busting — do this on every content change

`index.html` loads assets with a version query string:

```html
<link rel="stylesheet" href="assets/css/style.css?v=2">
<script src="assets/js/content.js?v=2"></script>
<script src="assets/js/app.js?v=2"></script>
```

**Whenever you edit `content.js`, `app.js` or `style.css`, bump every `?v=` number in
`index.html` in the same commit.** Browsers cache these files aggressively; without a
bump the user pushes a change and still sees the old site, which looks like a broken
deploy. Keep all three numbers identical — one shared version is simpler to reason
about than per-file versions.

## Deploying

Push to `main`. GitHub Pages redeploys within about a minute. There is no CI.
