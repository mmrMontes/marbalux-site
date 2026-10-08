# Marbalux website

Static website in English, retaining the original multi-app structure: general introduction, app cards, Marbalux information and support.

## Files
- `index.html`: general homepage and app cards.
- `apps.html`: app catalog with a visible video inside the Real-Time Desktops card; product details and screenshots appear after selecting Details.
- `about.html`: Marbalux introduction, mission, vision and values.
- `styles.css`: original base styles.
- `product.css`: additions for product media, responsive layout and accessibility.
- `site.js`: screenshot gallery and footer year.
- `support.html`: support directory with an app-specific support button.
- `real-time-desktops-support.html`: Real-Time Desktops setup, monitor selection, troubleshooting and a Store button for support contact information.
- `real-time-desktops-privacy.html`: app-specific data handling policy.
- `privacy.html`: compatibility redirect to the Real-Time Desktops privacy policy.
- `assets/`: Marbalux logo, app icon, four original PNG screenshots, WebP delivery copies, the supplied homepage artwork and the 1080p demo video.

## Product links
- Windows Store: ms-windows-store://pdp/?productid=9P2DCX4HZGBW
- Support contact: consult the Real-Time Desktops listing in Microsoft Store.

## Preview
Open `index.html`, or run `python -m http.server 8765` from this folder and visit http://localhost:8765.

## Ready-to-upload package
This folder contains the complete static website, including every screenshot, logo, the homepage artwork and the demonstration video. Upload the contents of this folder to the repository publishing root. Keep `index.html`, the other pages, both CSS files, `site.js`, `.nojekyll` and `assets/` together. Preserve file names and capitalization.

The companion `MARBALUX-GITHUB-PAGES.zip` contains these files directly at its root. Extract it before uploading. No local source project, build tools or running server is required by the published website. Microsoft Store buttons open the app listing externally.

## Publish
Upload all files and the assets folder to the root of your static hosting repository. No build step is required. The video uses `preload="none"`; gallery screenshots are lazy-loaded. Original screenshots open in a dialog or as direct image links when JavaScript is unavailable. Store pricing and availability are shown in the Store listing.

Content is based on the Real-Time Desktops project listing, support, privacy documentation and distribution source version 1.3.0. No fixed commercial price or app version is advertised on the homepage.

The brand introduction is platform-neutral. App-specific system requirements remain in product information. Microsoft Store opens only from buttons using the Windows Store deep link.

The general navigation contains Home, Apps, About Us and Support. Privacy and detailed help belong to each application. Real-Time Desktops descriptions explain monitor selection and continuous, real-time viewing.

The website does not display the support email address. App support and privacy pages direct users to the Microsoft Store listing for contact information.
