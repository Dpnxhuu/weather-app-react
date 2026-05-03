# Skycast — Weather App

A responsive weather dashboard built with **React** and **Tailwind CSS**. Search any city to see current conditions, a short description, key metrics (feels like, humidity, wind), and a **4-day forecast** summary driven by the OpenWeatherMap API.

## Live Demo

[aajkamosam.vercel.app](https://aajkamosam.vercel.app/)

## Features

- **City search** — Press Enter in the search bar to fetch weather for the typed location.
- **Current weather** — Temperature (°C), condition text, dynamic icons, and human-readable tips based on the condition.
- **Metrics** — Feels-like temperature, humidity, and wind speed (km/h).
- **Forecast strip** — Next days with approximate high/low per day from the 5-day / 3-hour forecast API.
- **States** — Loading spinner, empty state (“search a city”), and error UI for invalid or unknown locations.
- **UI** — Gradient background, glass-style card layout, dark mode via `prefers-color-scheme`, **Plus Jakarta Sans** typography.

## Tech stack

| Layer        | Choice                          |
| ------------ | ------------------------------- |
| UI           | React 19                        |
| Build        | Vite 8                          |
| Styling      | Tailwind CSS v4 (`@tailwindcss/vite`) |
| HTTP         | Axios                           |
| Icons        | `react-icons` (e.g. search icon) |
| API          | [OpenWeatherMap](https://openweathermap.org/api) (Current Weather + 5 Day Forecast) |

## Prerequisites

- **Node.js** 18+ (or current LTS)
- An **OpenWeatherMap API key** (free tier works for development)

## Getting started

1. **Clone** this repository and open the project folder.

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment variables**

   Create a `.env` file in the project root (same folder as `package.json`):

   ```env
   VITE_API_KEY=your_openweathermap_api_key_here
   ```

   > Vite only exposes variables prefixed with `VITE_` to the client.  
   > `.env` is listed in `.gitignore` — do not commit real keys. For learning, a client-side key is fine; for production, prefer a small backend proxy to hide the key.

4. **Static assets**

   Weather and error images are expected under **`public/images/`** (e.g. icons referenced from `/images/...` in components).  
   Favicon: `public/images/favicon.png` (linked from `index.html`).

5. **Run the dev server**

   ```bash
   npm run dev
   ```

   Open the URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start Vite dev server    |
| `npm run build`| Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint               |

## Project structure

```text
src/
├── App.jsx                 # Layout shell + header, search, card
├── main.jsx                # Entry; wraps app with ApiDataProvider
├── index.css               # Tailwind import + font theme
├── components/
│   ├── AppHeader.jsx       # Branding + live date pill
│   ├── SearchBar.jsx       # Search input + context handler
│   ├── WeatherCard.jsx     # Main weather UI, loading/error/success
│   ├── ForecastRow.jsx     # Aggregates forecast list → day pills
│   ├── DayPill.jsx         # Single forecast day cell
│   ├── Metric.jsx          # Small stat tile
│   └── WeatherPageShell.jsx # Page background + container
├── context/
│   └── ApiData.jsx         # React context + provider (city + API state)
└── hooks/
    └── useWeather.js       # Fetches current + forecast when `city` changes
```

## How data flows

1. User types a city and presses **Enter** → `handleSearch` in context updates `city`.
2. `useWeather(city)` runs both OpenWeather endpoints and sets `weather`, `forecast`, `loading`, and `error`.
3. `WeatherCard` reads context and renders success, loading, or error.  
4. `ForecastRow` reads `forecast` and builds daily min/max; it safely bails out if `forecast.list` is missing.

## License

This project is for learning and portfolio use. OpenWeatherMap data is subject to [their terms](https://openweathermap.org/terms).
