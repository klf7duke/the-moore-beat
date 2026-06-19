# The Moore Beat — project guide for Claude

A local events / eats / live-music guide for **Moore County, NC** (towns: Pinehurst, Southern Pines, Aberdeen, Carthage, Cameron, Robbins, Seven Lakes). Audience: locals ~25–55. Owner is a non-developer — explain changes in plain language and keep the stack simple.

## Tech & deploy
- **Plain static site**: HTML + CSS + vanilla JS. **No build step, no framework, no dependencies.**
- Hosted on **Netlify**, auto-deploys on every push to the `main` branch of this GitHub repo. Publish directory is the repo root; there is **no build command**.
- To publish a change: commit + push (the owner does this in GitHub Desktop). Do not run deploy commands.
- It's an installable **PWA** (`manifest.json` + `sw.js`). If you change cached files, bump the `CACHE` version string in `sw.js`.

## Files
- `index.html` — homepage (hero, events, eat & drink, happy hours, local finds, submit).
- `weekend.html` — "This Weekend" (Fri/Sat/Sun grouped).
- `calendar.html` — month calendar; click a day to see its events.
- `happyhour.html` — happy-hour-by-day finder.
- `livemusic.html` — upcoming live-music shows + venue guide.
- `event.html` — internal event detail page (opened by "More info" links; reads `?t=<title>&d=<date>` from the URL).
- `events.js` — **THE single data file. All content lives here.** Edit this, not the HTML, to change events/deals/restaurants.
- `sw.js`, `manifest.json`, `logo.png`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `favicon-32.png` — PWA + branding.
- `incoming-posts.md` — local "drop zone" for social-media posts to convert (gitignored; not deployed).

## events.js data model
Five arrays, each documented with a comment header in the file:
- `EVENTS`: `{ title, date:"YYYY-MM-DD", time, town, category, description, link, [repeat:"weekly", repeatUntil, except:[]], [livemusic:true] }`
  - `category` is one of: Festival, Music, Market, Food & Drink, Family, Arts, Sports, Community.
  - Recurring events use `repeat:"weekly"` (date = first occurrence, sets the weekday). Homepage shows the **next** occurrence; calendar/weekend show **all**. Homepage events list is capped at 12.
  - `livemusic:true` makes an event appear on `livemusic.html`.
- `SPECIALS` (happy hours/deals): `{ business, town, days:["Tuesday"], offer, expires:"" }` — `days` drives the day finder.
- `RESTAURANTS`, `BUSINESSES`, `MUSIC_VENUES` — directory guides.

## Conventions / rules
- **Never hard-code content into the HTML** — everything data-driven from `events.js`.
- **"More info" links stay on-site**: they point to `event.html`, never out to Instagram/Facebook. For IG/FB sources, `event.html` shows a plain "Spotted on @handle" note (no link); only non-social official sources get an outbound "tickets/official site" button.
- Past one-time events auto-hide (date in the past). Keep recurring events; only rebuild one-time events when refreshing.
- **Cannot scrape Instagram/Facebook** (login-walled). Content comes from the owner (pasted posts / screenshots) or public sites (homeofgolf.com, southernpines.net, thepilot.com, sunrisetheater.com, the venues).

## Brand
- Colors: pine green `#2f5d4a`, brass gold `#c9a24a`, soft bone bg `#f7f5ef`, ink `#1c1e1a`.
- Fonts: **Fraunces** (display/headings) + **Inter** (body), loaded from Google Fonts.
- Logo: `logo.png` (badge) in the header; `MB` monogram icon for the app/favicon.

## Verifying changes
There are no tests. To sanity-check `events.js`, confirm all five arrays open and close (`const X = [ ... ];`). Note: the data file has very long single-line entries — edit with care and keep valid JS (commas between entries, double-quoted strings).
