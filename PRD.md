# Product Requirements Document (PRD)
## App Name: Tiny Taps
**Studio:** GIZIPP Studios
**Tagline:** Digital toys. Analog soul.
**Platform:** Progressive Web App (PWA)
**Target Audience:** Toddlers (Ages 1-4)

### 1. Product Vision
Tiny Taps is a PWA "Digital Toy" platform designed specifically for toddlers. The platform prioritizes extreme simplicity: **Zero Text, Zero Ads, and 100% Offline.**

### 2. Core Design Principles (The Pillars)
1. **Instant Responsiveness:** Every touch must trigger a visual or audio reaction in <100ms.
2. **Zero Failure:** There is no "Game Over," no scoring system, and no time limits.
3. **Technically Standalone:** Relies entirely on the Web Audio API and CSS/Emojis. It must not depend on external servers, databases, or heavy image assets.

### 3. The Hub (Home Page)
- **Textless UI:** Absolutely no text like "Play," "Menu," or even the app title on the main screen. Purely visual.
- **Adaptive Icon Grid:** Uses a Flexbox/Grid system displaying large, rounded buttons (cards).
- **Initial Game Roster (Wave 1):** 1. 🎈 (Balloon Pop)
  2. 🎹 (Magic Xylophone)
  3. 🍎 (Apple Harvest)

### 4. Universal Game Mechanics
Every game placed inside the `/games` directory must adhere to this structure:
- **"Home" Navigation:** A transparent Home icon (🏠) (20% opacity) in the top corner. It MUST require a **Double Tap** or **Long Press** (2 seconds) to return to the main menu. This prevents toddlers from accidentally exiting the game while mashing the screen.
- **Browser Gesture Protection:** Must include CSS `touch-action: none;`, `user-select: none;`, and strict anti-zoom meta tags to lock the viewport.
- **Synthesized Audio:** Must use synthetic `AudioContext` (Web Audio API) to generate sounds dynamically, completely avoiding external `.mp3` downloads.