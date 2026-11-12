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
js/services-data.js       The 8 services — content lives here
images/logo.png            The MH Associates logo (transparent PNG)
```

## Editing content

- **Services (names, descriptions, bullet points):** edit `js/services-data.js` only.
  Both the Home page cards and the Services page detail panels read from this
  one file, so you only ever need to update it in one place.
- **Home / About / Contact page text:** edit the HTML directly in `index.html`,
  `about.html`, `contact.html` — the text is plain and easy to find.
- **Home page hero image:** the right-hand column of the hero in `index.html` holds an
  "Image coming soon" placeholder. Save the picture as `images/hero.jpg` and swap the
  placeholder `<div>` for `<div class="hero-image"><img src="images/hero.jpg" alt="..."></div>`
  — the exact snippet is in an HTML comment above the placeholder.
- **Logo:** replace `images/logo.png` with a new file of the same name (keep it
  roughly the same aspect ratio, transparent background works best against the
  navy header/footer).
- **Founder photo:** `about.html` currently uses a placeholder icon. Add a real
  photo to `images/` (e.g. `images/founder.jpg`) and swap the placeholder
  `<div class="founder-photo">...</div>` block for
  `<div class="founder-photo"><img src="images/founder.jpg" alt="CMA Milind Herlekar"></div>`
  — see the HTML comment above that block in `about.html`.
- **Contact details / address:** each occurrence of the phone, email and address
  is plain text in the HTML (header/footer are duplicated per page, since this
  is plain static HTML with no templating) — use find-and-replace across all
  4 files if any of these change.
- **LinkedIn link:** currently points to `https://www.linkedin.com` as a
  placeholder in each footer — replace with the firm's real LinkedIn URL.
- **Colors:** all colors are CSS variables at the top of `css/style.css`
  (`--navy`, `--red`, `--gold`, `--cream`, etc.). The firm name in the header/footer uses `--red`. — change them there and the
  whole site updates.

## Deploying on Vercel

1. Push this folder to a new GitHub repository (as-is, no build needed).
2. In Vercel: **New Project** → import the repo.
3. Framework preset: **Other** (static site) — leave build command and output
   directory empty.
4. Deploy.

Vercel will serve `index.html` at the root automatically.

## Notes

- **Contact form:** enquiries are now sent straight from the website (no email app
  opens). It uses [Web3Forms](https://web3forms.com), which is free and needs no
  server. One-time setup:
  1. Go to web3forms.com, enter `mhassociates2026@gmail.com` and click "Create Access Key".
  2. The access key arrives by email. Open `js/main.js` and replace
     `YOUR_ACCESS_KEY_HERE` with that key.
  3. Redeploy. Every enquiry lands in that inbox, with the visitor's email as the reply-to.
  Until the key is added, the form shows a friendly "not connected yet" message.
  (The access key is designed to be public — it can only deliver to the address it was created for.)
- The footer's "map" is a stylised location marker, not a live Google Map
  embed, to keep the site fully self-contained. Swapping in a real embed
  (Google Maps iframe) is a small change to the `.foot-map` block in each
  page's footer if you'd like the real map instead.
