# Sparks & Bolt Electrical Services — Website Project

Web Development POE (WEDE5020)
Student: Roby | Student Number: ST10480499

## About This Project

Website for **Sparks & Bolt Electrical Services**, a hypothetical small electrical
contracting business based in Johannesburg, South Africa.

- **Part 1:** HTML structure with inline CSS only (see `v1-part1-inline-css` if kept as a separate branch/tag).
- **Part 2 (current):** Styling extracted into a single external stylesheet (`css/style.css`), applied via classes.
- **Part 3 (upcoming):** JavaScript functionality, form validation, SEO, and external service integration.

## File and Folder Structure

```
sparks-and-bolt/
├── index.html                # Homepage
├── css/
│   └── style.css              # Single external stylesheet shared by all pages
├── pages/
│   ├── about.html
│   ├── services.html
│   ├── gallery.html
│   └── contact.html
├── assets/
│   └── images/                 # Reserved for locally-hosted image assets
├── docs/
│   ├── Proposal_1_Sparks_and_Bolt_Electrical.docx
│   └── Proposal_2_Braamfontein_Bake_House.docx
└── README.md
```

## What Changed From Part 1

All inline `style="..."` attributes were removed from the HTML and replaced with
semantic class names (e.g. `.hero`, `.service-card`, `.footer`). All rules now live
in `css/style.css`, linked once per page via `<link rel="stylesheet" href="css/style.css">`
(`../css/style.css` from inside `/pages`). This keeps styling centralised — a colour
or spacing change now only needs to happen in one place instead of on every element.

## How to View the Site

Open `index.html` in any modern browser, or serve the folder with VS Code's Live Server
extension for the best experience (Google Fonts and map embed require an internet connection).

## Changelog

### v2.0.0 — 9 August 2026
- Extracted all inline CSS from Part 1 into a single external stylesheet (`css/style.css`).
- Replaced inline `style` attributes across all five pages with semantic class names.
- Added a responsive tweak (`@media`) for smaller screens as a starting point for Part 2's responsive design work.

### v1.0.0 — 9 August 2026
- Initial project setup and folder structure created.
- Website Project Proposals drafted and submitted for lecturer approval (two organisations).
- Built homepage and all four inner pages using inline CSS only, per Part 1 requirements.

## References

- Unsplash (2026) *Free stock photos*. Available at: https://unsplash.com (Accessed: 9 August 2026).
- Google Fonts (2026) *Montserrat and Open Sans*. Available at: https://fonts.google.com (Accessed: 9 August 2026).
- Mozilla Developer Network (2026) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 9 August 2026).
- Mozilla Developer Network (2026) *Linking a stylesheet to HTML*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link (Accessed: 9 August 2026).
- Department of Employment and Labour (2026) *Electrical Installation Regulations and Certificate of Compliance requirements*. Available at: https://www.labour.gov.za (Accessed: 9 August 2026).
- Google Maps (2026) *Embed a map*. Available at: https://www.google.com/maps (Accessed: 9 August 2026).
