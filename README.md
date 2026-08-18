# Portfolio — Somesh Khandelia

A static, no-build portfolio site. Plain HTML/CSS/JS, no framework, no npm install.
English/German toggle, light/dark mode, a narrative journey timeline, projects
and publications.

---

## 1. Put it online (GitHub Pages — free)

1. Create a GitHub account if you don't have one.
2. Create a **new public repository** named exactly:

   ```
   <your-username>.github.io
   ```

   (Using this exact name gives you `https://<your-username>.github.io` as the URL.
   Any other name works too, you'd just get `https://<your-username>.github.io/<repo-name>/`.)

3. Upload every file in this folder to the repo — including the hidden `.nojekyll`
   file. Easiest route: on the repo page click **Add file → Upload files**, then drag
   in the *contents* of this folder (not the folder itself).
4. Go to **Settings → Pages**. Under "Build and deployment", set Source to
   **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
5. Wait ~60 seconds, then open your URL. Done.

Every later change: edit the file on GitHub (or re-upload it) and the site updates
within a minute.

### Prefer the command line

```bash
git init
git add -A
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

### Custom domain (optional)

Buy a domain, add a file called `CNAME` containing just `yourdomain.com`, then point
your domain's DNS at GitHub Pages. Settings → Pages has the exact records.

---

## 2. Where to change things

Almost everything lives in **one file**: `assets/js/content.js`.

Every piece of text is a pair:

```js
headline: { en: "English version", de: "Deutsche Fassung" }
```

Change the `en` and `de` strings and that's it. You never need to touch the HTML.

| I want to change… | Edit |
|---|---|
| Name, email, GitHub/LinkedIn links | `content.js` → `meta` |
| Opening headline and intro | `content.js` → `hero` |
| Jobs and degrees | `content.js` → `journey` |
| Skills chips | `content.js` → `skills` |
| Projects | `content.js` → `projects` |
| Papers and talks | `content.js` → `publications` |
| Colours and fonts | `assets/css/style.css` → the `:root` block at the top |

Deleting an entry is just deleting its `{ … }` block from the list. Deleting *all*
publications automatically hides that section and its nav link.

---

## 3. Adding photos

**You do not need to edit any code to add a photo.** Every slot already has a
filename reserved. Save your image with that exact name in that exact folder and it
appears on the site. Until then you'll see a placeholder tile that literally displays
the filename it is waiting for — so you can always tell what's missing.

| Save your photo as | Slot |
|---|---|
| `assets/img/portrait.jpg` | Your portrait / photo of you |
| `assets/img/journey/01-klinikum.jpg` | TUM Klinikum rechts der Isar — Research Associate · Data Integration Center |
| `assets/img/journey/02-amazon.jpg` | Amazon — Software Developer · Amazon Robotics, Scanless Technology |
| `assets/img/journey/03-tum-project.jpg` | Technical University of Munich (TUM) — Research Associate · Technical Project Lead |
| `assets/img/journey/04-scandio.jpg` | Scandio GmbH — Software Developer |
| `assets/img/journey/05-dlr.jpg` | German Aerospace Center (DLR) — Earth Observation Center — Researcher · Master's Thesis |
| `assets/img/journey/06-tng.jpg` | TNG Technology Consulting GmbH — Working Student · Software Developer |
| `assets/img/journey/07-siemens.jpg` | Siemens AG — Digital Lab, Global Business Services — Working Student · Machine Learning |
| `assets/img/journey/08-volkswagen.jpg` | Volkswagen Data Lab — Internship · Web Developer |
| `assets/img/journey/09-rohde-schwarz.jpg` | Rohde & Schwarz — Working Student · Machine Learning |
| `assets/img/journey/10-fusionbase.jpg` | Fusionbase — Working Student · Data Engineer |
| `assets/img/journey/11-tum.jpg` | Technical University of Munich (TUM) — M.Sc. Computer Science |
| `assets/img/journey/12-iit-kgp.jpg` | Indian Institute of Technology Kharagpur (IIT KGP) — Research Associate · CNeRG |
| `assets/img/journey/13-deshaw.jpg` | D. E. Shaw & Co. — Software Developer · Options Trading |
| `assets/img/journey/14-nit-durgapur.jpg` | National Institute of Technology Durgapur (NIT DGP) — B.Tech. Computer Science & Engineering |
| `assets/img/journey/15-mp-birla.jpg` | M. P. Birla Foundation Higher Secondary School — Indian School Certificate (Year 12) |
| `assets/img/journey/16-st-aloysius.jpg` | St. Aloysius Orphanage and Day School — Indian Certificate of Secondary Education (Year 10) |
| `assets/img/projects/cell-tracking.jpg` | Cell Tracking with Graph Neural Networks |
| `assets/img/projects/alexa-story.jpg` | Collaborative Storytelling Alexa Skill |
| `assets/img/projects/attendance-automator.jpg` | Attendance Automator |
| `assets/img/projects/excel-addin.jpg` | Excel Add-in for Unix Data |
| `assets/img/projects/twitter-followership.jpg` | What Makes Someone a Celebrity on Twitter |
| `assets/img/projects/misc.jpg` | Smaller things |

`.jpg` is assumed above. If you'd rather use `.png` or `.webp`, change the extension
in `content.js` to match your file.

**Resize before uploading.** Aim for about 1600px on the long edge and under ~400 KB
per image. Journey photos display at roughly 4:3, project covers at 16:10 —
they're cropped to fill, so anything roughly landscape works.

## 4. Google Maps links

In `content.js`, each journey stage has:

```js
location: {
  name: { en: "Munich, Germany", de: "München, Deutschland" },
  maps: "https://www.google.com/maps/search/?api=1&query=Munich%2C+Germany"
}
```

To get a link: open Google Maps, search the place, click **Share → Copy link**, and
paste it in. Set `maps: ""` to show the location without a clickable link.

---

## 5. Your CV PDF

`assets/files/CV_Somesh_Khandelia.pdf` is a publish-safe CV generated from your own
formal German CV. Removed, because this file is publicly downloadable and PDFs are
indexed by search engines:

- home address
- date of birth and place of birth
- nationality and marital status
- both phone numbers
- the signature block (it belongs on a signed application, not a website)

Everything else — dates, German job titles, grades, degree award dates — is unchanged.
**Read it once before you publish** and replace it with your own file if you'd rather.
Keep the filename, or point `meta.links.cv` in `content.js` at a different one.

## 6. Contact form

Out of the box the form opens the visitor's email client — no setup, nothing to break.

To receive messages as email instead:

1. Sign up free at [formspree.io](https://formspree.io) and create a form.
2. Copy the endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. Paste it into `content.js` → `contact.formspree`.

The free tier covers 50 messages a month.

---

## 7. Continuing this with Claude

The repo carries a `CLAUDE.md` at its root. Any Claude session opened on this folder
reads it automatically and picks up the conventions — bilingual content pairs, the
photo-slot naming, the German job titles, and the rule about never adding personal
data. You should not have to re-explain the project.

To work on it locally:

1. Put the folder somewhere permanent (not Downloads).
2. In the Claude desktop app, add that folder to your trusted folders so Claude can
   read and write it.
3. Ask for changes in plain language — "add my new job at X", "swap the accent colour",
   "write the German for this paragraph". Almost everything lives in
   `assets/js/content.js`.
4. Commit and push when you're happy:

```bash
git add -A
git commit -m "Describe the change"
git push
```

The site redeploys about a minute after the push.

## 8. If you push a change and the site looks unchanged

That is almost always your browser, not the deploy. Hard-reload first:

- Windows / Linux: **Ctrl + Shift + R**
- Mac: **Cmd + Shift + R**
- Phone: open the site in a private tab

`index.html` loads its assets with a `?v=` version number. **Bump all three of them
whenever you change `content.js`, `app.js` or `style.css`** — that forces every
visitor's browser to fetch the new file instead of reusing its cached copy:

```html
<link rel="stylesheet" href="assets/css/style.css?v=3">
<script src="assets/js/content.js?v=3"></script>
<script src="assets/js/app.js?v=3"></script>
```

If it still looks stale after that, check the **Actions** tab on GitHub — a red mark
there means the deploy itself failed.

## 9. Preview locally before publishing

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Opening `index.html` by double-clicking also works.

---

## Notes

- Language and theme choices are remembered in the browser, and the site picks a
  sensible default first time based on the visitor's own system settings.
- Fonts load from Google Fonts; if that's ever blocked the site falls back to clean
  system fonts and still looks right.
- No cookies, no analytics, no trackers.
