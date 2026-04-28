# Coding Plan & Repository Architecture

## Directory Structure
/
├── index.html          (Main Hub - Icon Grid)
├── css/
│   └── style.css       (Global & Menu Styles)
├── js/
│   └── main.js         (Menu Logic & PWA Registration)
├── manifest.json
├── sw.js               (Service Worker for Cache First strategy)
├── icon.svg            (AI-generated App Icon)
└── games/
    ├── balloon/
    │   ├── index.html, style.css, script.js
    ├── xylophone/
    │   ├── index.html, style.css, script.js
    └── apple/
        ├── index.html, style.css, script.js

## Execution Phases (For Gemini CLI)

### Phase 1: PWA Setup, Home Page, & Icon Generation
1. **Generate App Icon:** Create an `icon.svg` file featuring a minimalist design consistent with GIZIPP Studios (e.g., a simple modern toy button or a tiny finger tapping). Use a calm, child-friendly pastel palette.
2. Create `manifest.json` referencing the `icon.svg`. Set `display: "fullscreen"`.
3. Create `sw.js` (Service Worker) using a *Cache First* strategy to store all assets for offline use.
4. Create the main `index.html` with a Textless UI (Grid/Flexbox), displaying 3 large button cards (🎈, 🎹, 🍎).
5. Create `css/style.css` and `js/main.js` for the root hub.

### Phase 2: Game 1 - Balloon Pop (games/balloon/)
- Build the HTML, CSS, and Vanilla JS structure.
- Logic: Balloons (pure CSS `div`s) float upwards. When tapped, they disappear with a slight scale-up and fade-out transition.
- Add the Home button (🏠) with *Double Tap* protection that routes back to `../../index.html`.

### Phase 3: Game 2 - Magic Xylophone (games/xylophone/)
- Create a layout with 5 vertical, rainbow-colored bars using Flexbox.
- Implement the Web Audio API (`OscillatorNode`) to synthesize musical notes (C, D, E, F, G) when the bars are touched.
- Add the Home button (🏠) with *Double Tap* protection.

### Phase 4: Game 3 - Apple Harvest (games/apple/)
- Design a tree using pure CSS (brown trunk, large green circular canopy).
- Scatter 🍎 emojis dynamically over the tree. When tapped, the apple drops (CSS translateY), fades out, and plays a synthesized "plop" sound via Web Audio API. 
- Apples should respawn dynamically after 2-3 seconds.
- Add the Home button (🏠) with *Double Tap* protection.