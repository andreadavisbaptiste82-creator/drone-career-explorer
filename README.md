# Drone Career Explorer

A static curriculum and career-pathway website for Drone Career Explorer, a Grades 6–12 and professional-readiness program from Maison Glamour et Grace. The site is plain HTML, CSS and JavaScript with no build step, so it can be published directly with GitHub Pages.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home and pathway overview |
| `middle-school.html` | Grades 6–8 pathway |
| `high-school.html` | Grades 9–12 pathway |
| `part-107.html` | FAA Part 107 knowledge preparation |
| `part-108.html` | Part 108 (proposed BVLOS rule) readiness |
| `careers-industry.html` | Careers, industry signals, training and programs |
| `resources.html` | Previews, videos and learning tools |
| `schools-partners.html` | Implementation and partnerships |
| `standards-credentials.html` | Standards alignment and credentials |
| `contact.html` | Contact and program inquiries |
| `404.html` | Page-not-found screen |

## Publishing on GitHub Pages

1. Create a repository and add every file in this folder at the repository root, keeping the folder structure. All files are under 25 MB, so they can be uploaded through the GitHub website or pushed with git.
2. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
3. When the site address appears (for example `https://USERNAME.github.io/REPOSITORY/`), replace `DRONE_CAREER_EXPLORER_BASE_URL` in `sitemap.xml` with that address (no trailing slash), and add a `Sitemap:` line to `robots.txt`.
4. Optional: for link previews on social media, change the `og:image` and `twitter:image` values in each page's `<head>` to full `https://` addresses.

Editable outside links (Maison Glamour et Grace, Future Ready AI, LinkedIn, email and phone) are stored in `site-config.js`. The same addresses are also written directly into the pages so links work even if JavaScript is off; update both if a link changes.

## Content review schedule

Regulatory and labor-market facts were checked in September 2026:

- **Part 108 (BVLOS):** Proposed only. The NPRM was published August 7, 2025, limited comment was reopened January 28–February 11, 2026, and the final rule has been under White House (OIRA) review since July 10, 2026. When the final rule is published, update `part-108.html`, the Part 108 notes on `careers-industry.html`, and the readiness-board caption. The numbers inside the Part 108 hero image reflect the proposed rule.
- **Part 135 drone-delivery operators:** Eight listed, including DoorDash Air (July 2026).
- **BLS figures:** Cartographers and photogrammetrists and surveyors, 2025–35 projections with May 2025 wages.
- **FAA BEYOND Phase 2:** Expansion announced August 27, 2026.
- **CSTA:** 2026 PK–12 Computer Science Standards.

## Version 50 changes

- Aligned the Home tab with the navigation built into the hero images.
- Added a working mobile menu and readable mobile hero text. Previously, phones had no navigation.
- Fixed unreadable dark-on-dark text on the Home, Careers and Part 108 pages.
- Removed duplicated headings and fixed several misaligned buttons, grids and containers.
- Made the buttons drawn inside infographics clickable.
- Unified the footer across all pages and loaded the Inter font.
- Updated regulatory, operator and standards content as listed above.
- Compressed the course videos from 52 MB and 37 MB to 13 MB and 10 MB.
- Converted large images to WebP, cutting image weight from 32 MB to 13 MB.
- Removed unused files and internal QA notes.
- Rebuilt the Grades 6–8 public preview PDF to match the Grades 9–12 layout. It now has boxed portfolio-evidence panels, page numbers and "Explore Pathway" on the cover, and says "Drone Career Challenge" in place of "capstone."
- Start Here PDF footer now reads "For authorized classroom and pilot-program use."
- Added the missing P108-04 Implementation Guide to the Part 108 resource list.
- Corrected image text: Module 14 now reads "Advanced Operations Readiness Capstone" (four-phases graphic), and "reliability" is spelled correctly (readiness-domains graphic).
- The stylized "Grâce" in the logo artwork is intentional brand styling; all plain text uses the business name "Maison Glamour et Grace."
- Shrank the two public preview PDFs from 14.6 MB and 7.0 MB to under 0.6 MB each by removing hidden, unused images. Visible pages are unchanged.
