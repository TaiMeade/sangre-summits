# Sangre de Cristo Guides

Marketing website for **Sangre de Cristo Guides** — an outdoor guiding company
offering overnight backcountry trips in northern New Mexico (hunting, forest
therapy, fly fishing, backpacking, and backcountry skiing).

Built with **Vue 3 + Vite**, **Vuetify 3**, **Tailwind CSS**, and **EmailJS**
for the contact form. It's a single-page scroll site with anchor navigation.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Editing content

All copy, contact details, trips, and gallery images live in one file:

```
src/config/site.js
```

Update the company name, tagline, phone/email, the five `trips`, and the
`gallery` array there — no component edits needed.

## Swapping in real photos

The site ships with curated Unsplash placeholder URLs. To use your own photos:

1. Drop image files into `src/assets/images/`.
2. In `src/config/site.js`, either import the files
   (`import hero from '@/assets/images/hero.jpg'`) and use the variable, or
   replace the URL strings with your hosted image URLs.

Image slots: `heroImage`, each `trips[].image`, `about.image`, and every
`gallery[].src` (set `span: 'wide'` on a gallery item to make it span two
columns).

## Connecting the contact form (EmailJS)

The form works without configuration — until keys are added it shows a friendly
"reach us directly" notice instead of erroring.

To enable real email delivery:

1. Create a free account at <https://www.emailjs.com/>.
2. Add an **Email Service** and an **Email Template**.
3. Copy `.env.example` to `.env` and fill in your three values:

   ```
   VITE_EMAILJS_SERVICE_ID=...
   VITE_EMAILJS_TEMPLATE_ID=...
   VITE_EMAILJS_PUBLIC_KEY=...
   ```

4. Restart `npm run dev`.

### Template variables

The form sends these fields — reference them in your EmailJS template as
`{{variable}}`:

| Variable          | Description              |
| ----------------- | ------------------------ |
| `from_name`       | Visitor's name           |
| `reply_to`        | Visitor's email          |
| `phone`           | Phone (or "Not provided")|
| `trip_type`       | Selected trip            |
| `preferred_dates` | Preferred dates          |
| `party_size`      | Party size               |
| `message`         | Their message            |

> **Note:** `.env` is gitignored. The `VITE_EMAILJS_PUBLIC_KEY` is a publishable
> key intended for client-side use; restrict allowed domains in your EmailJS
> dashboard for production.

## Project structure

```
src/
  config/site.js        ← all content (edit here)
  plugins/vuetify.js    ← theme colors + component defaults
  assets/styles/main.css← Tailwind directives + custom CSS
  composables/          ← scroll-reveal + contact-modal state
  components/           ← navbar, hero, trips, about, gallery, contact, footer, modal
```

## Tech notes

- Tailwind's preflight is disabled (`tailwind.config.js`) so it doesn't fight
  Vuetify's base styles. Vuetify owns interactive components; Tailwind handles
  layout/spacing/custom styling.
- The NM palette is defined once in `src/plugins/vuetify.js` and mirrored in
  `tailwind.config.js`.
