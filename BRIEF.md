# Dar Zitoun — Design Brief

Portfolio concept: a one-page website for a FICTIONAL Moroccan restaurant in Rabat.
All site content is in French and lives in CONTENU.md. Use that text exactly; do not invent copy.

## The one-line idea
A limewashed house with an olive tree in the courtyard and a clay bread oven. Calm, warm, unhurried. Editorial, not "restaurant template".

## Things that are BANNED (they make it look AI-generated)
- Inter, Roboto, Poppins, Montserrat, system fonts
- Purple/blue gradients, glassmorphism, neon, drop shadows on everything
- Rows of identical cards with icons
- Emojis, star-rating widgets, "Welcome to our restaurant"
- Centered-everything layouts
- Animating every element on scroll
- Stock-photo look (generic smiling people, plates on white)

## Typography
- Display / headlines: **Cormorant Garamond** (weights 400–500, use *italic* for one or two accent words per headline). Very large: hero headline clamp(3.5rem, 9vw, 8.5rem), tight line-height (0.95), slight negative letter-spacing.
- Body: **Hanken Grotesk** 400/500, 17–18px, line-height 1.6, max width ~62ch.
- Small labels / section numbers: Hanken Grotesk 500, uppercase, letter-spacing 0.18em, 12–13px.
- Arabic accent: **Amiri** for the name "دار زيتون" only, used as a decorative element (vertical in the hero, small in the footer).
- Load all from Google Fonts with display=swap.

## Color palette (strict — do not add colors)
Revised: terracotta on cream is the most common AI-generated look, so the accent is Rabat blue, from the white-and-blue walls of the Kasbah des Oudayas.
| Token        | Hex      | Use |
|--------------|----------|-----|
| --chaux      | #F1EFEA  | Main background (limewash, cooler than cream) |
| --oudaya     | #7A9FBC  | The painted lower wall band in the hero (chalky blue sampled from the photos) |
| --indigo     | #1D3A5C  | Buttons, focus, links |
| --encre      | #1B222B  | Text |
| --olive      | #4A5233  | Reservation section, footer (#3B4229) |
| --laiton     | #8C6B30  | Hairlines, prices, small details |

## Signature motif: the arch
Moroccan horseshoe/pointed arches. Crop key images inside an arch shape (CSS clip-path or SVG mask), and use a thin --laiton arch outline as a recurring detail. This is the one thing people should remember. Use it 3–4 times, not everywhere.

## Layout, section by section
No section numbers or uppercase labels: the sections are not a sequence.

1. **Hero** — asymmetric. Left ~45%: small label, huge serif headline, one sentence, "Réserver une table" button (terracotta, sharp or slightly rounded corners, no pill). Right ~55%: tall image inside an arch mask, bleeding off the top edge. "دار زيتون" set vertically in Amiri along the right edge in --laiton. The headline should slightly overlap the arch image edge.
2. **La maison (story)** — two columns: short text left, large italic pull-quote right. Lots of whitespace.
3. **La carte (menu)** — editorial list, NOT cards. Each dish: name large in Cormorant, one-line description below in body font, price in --laiton aligned right with a dotted leader line. On desktop hover, a small arched photo of the dish follows the cursor. On mobile, no hover effect; show a small thumbnail instead.
4. **Le four (bread oven)** — full-width image band with one short line of text overlaid. A breathing moment.
5. **Galerie** — asymmetric grid: one large tall image, two smaller offset images, varied sizes. No uniform grid.
6. **Avis** — clearly labelled as example reviews for this concept. Set as large quotes in serif, two max, no stars.
7. **Réserver** — --olive background. Left: hours, address, phone, small map embed (or a styled static map). Right: reservation form (nom, téléphone, date, heure, nombre de personnes, message). Clean underlined inputs, not boxed.
8. **Footer** — minimal. Name, Arabic name in Amiri, Instagram link, line "Concept de portfolio — restaurant fictif."

## Motion (only these)
- Arch images reveal on scroll: the clip-path grows from a small arch to full over ~900ms, ease-out. Once only.
- Menu hover image following the cursor (desktop only), smooth with slight lag.
- Buttons/links: subtle color + underline transitions, 200ms.
- Respect `prefers-reduced-motion`: disable all of the above.

## Spacing and feel
- Generous: section padding at least 120px desktop / 72px mobile.
- 12-column grid on desktop, deliberately break it once or twice.
- Thin --laiton hairlines (1px) to separate things instead of boxes.
- Fewer elements, more space. If in doubt, remove it.

## Images
All images are AI-generated in ONE consistent style so they look like a single photoshoot. Prompts are below. Until real images exist, use warm-toned placeholder blocks in --sable with the image name written small (already built in), and put final images in /public/images/ with these names:
hero.jpg, maison.jpg, four.jpg, plat-pastilla.jpg, plat-tajine.jpg, plat-couscous.jpg, plat-rfissa.jpg, plat-zaalouk.jpg, plat-seffa.jpg, galerie-1.jpg, galerie-2.jpg, galerie-3.jpg

### Shared style (append to every image prompt)
> editorial food and interior photography, natural late-afternoon window light, soft shadows, warm limewash and terracotta tones, muted olive greens, handmade ceramic plates, linen, film grain, Kodak Portra 400 look, shallow depth of field, no people's faces, no text, no logos

### Image prompts
- **hero**: courtyard of a traditional Rabat riad, small olive tree, limewashed walls, a set table with ceramic plates and mint tea glasses, vertical composition, [shared style]
- **maison**: hands kneading round Moroccan khobz bread on a wooden board dusted with semolina, close-up, [shared style]
- **four**: interior of a traditional clay bread oven with round loaves, warm glow, wide shot, [shared style]
- **plat-pastilla**: pigeon pastilla dusted with powdered sugar and cinnamon lattice on a hand-painted plate, top-down, [shared style]
- **plat-tajine**: lamb tajine with prunes and toasted sesame in an open clay tajine, 45 degree angle, [shared style]
- **plat-couscous**: Friday couscous with seven vegetables in a large ceramic dish, top-down, [shared style]
- **plat-rfissa**: chicken rfissa on shredded msemen with lentils and fenugreek, [shared style]
- **plat-zaalouk**: zaalouk and taktouka salads in small bowls with torn bread, [shared style]
- **plat-seffa**: sweet seffa vermicelli shaped in a dome with cinnamon and almonds, [shared style]
- **galerie-1**: arched doorway with zellige tiles and morning light, vertical, [shared style]
- **galerie-2**: silver teapot pouring mint tea from height into a glass, motion, [shared style]
- **galerie-3**: bowls of spices and olives on a market table, [shared style]

## Tech
- Astro + Tailwind, single page, mobile-first.
- Lighthouse 95+ performance and accessibility. Real alt text in French.
- SEO meta in French, Open Graph image, favicon (simple arch outline in terracotta).
- Reservation form wired to Web3Forms or Formspree (endpoint in an env variable, placeholder for now).
- Semantic HTML, keyboard accessible, visible focus states, color contrast AA.

## How to work
1. Build the hero only. Stop and show me.
2. After each section, use the webapp-testing skill to screenshot at 390px and 1440px, compare with this brief, and list anything that looks generic or off-brief before I review.
3. One section at a time after that.
