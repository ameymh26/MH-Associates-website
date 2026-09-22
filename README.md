# MH Associates — Website

A 4-page static website (Home, Services, About Us, Contact Us) for MH Associates.
Plain HTML/CSS/JS — no build step, no framework, no dependencies to install.

## File structure

```
index.html            Home page
services.html          Services page
about.html              About Us page
contact.html            Contact Us page
css/style.css            All styling
js/main.js                Nav toggle, footer year, form handling, page rendering
js/services-data.js       The 7 services — content lives here
images/logo.png            The MH Associates logo (transparent PNG)
```

## Editing content

- **Services (names, descriptions, bullet points):** edit `js/services-data.js` only.
  Both the Home page cards and the Services page detail panels read from this
  one file, so you only ever need to update it in one place.
- **Home / About / Contact page text:** edit the HTML directly in `index.html`,
  `about.html`, `contact.html` — the text is plain and easy to find.
- **Logo:** replace `images/logo.png` with a new file of the same name (keep it
  roughly the same aspect ratio, transparent background works best against the
  navy header/footer).
- **Founder photo:** `about.html` currently uses a placeholder icon. Add a real
  photo to `images/` (e.g. `images/founder.jpg`) and swap the placeholder
  `<div class="founder-photo">...</div>` block for
  `<div class="founder-photo"><img src="images/founder.jpg" alt="Milind Herlekar"></div>`
  — see the HTML comment above that block in `about.html`.
- **Contact details / address:** each occurrence of the phone, email and address
  is plain text in the HTML (header/footer are duplicated per page, since this
  is plain static HTML with no templating) — use find-and-replace across all
  4 files if any of these change.
- **LinkedIn link:** currently points to `https://www.linkedin.com` as a
  placeholder in each footer — replace with the firm's real LinkedIn URL.
- **Colors:** all colors are CSS variables at the top of `css/style.css`
  (`--navy`, `--red`, `--gold`, `--cream`, etc.) — change them there and the
  whole site updates.

## Deploying on Vercel

1. Push this folder to a new GitHub repository (as-is, no build needed).
2. In Vercel: **New Project** → import the repo.
3. Framework preset: **Other** (static site) — leave build command and output
   directory empty.
4. Deploy.

Vercel will serve `index.html` at the root automatically.

## Notes

- The contact form has no backend — it opens the visitor's email client with
  the message pre-filled, addressed to mhassociates2026@gmail.com. To collect
  submissions directly (e.g. into a spreadsheet or inbox without relying on
  the visitor's email app), you'd need a form backend (Vercel supports
  serverless functions, or a service like Formspree can be wired into
  `js/main.js` with a couple of lines).
- The footer's "map" is a stylised location marker, not a live Google Map
  embed, to keep the site fully self-contained. Swapping in a real embed
  (Google Maps iframe) is a small change to the `.foot-map` block in each
  page's footer if you'd like the real map instead.
