# 💼 JobPortal — React Job Listing Application

A modern, responsive job listing and discovery platform built with React and Vite. Browse jobs, save favorites, and learn about the platform — all with a clean, fast UI powered by Firebase for data persistence.

## Features

- 📋 Browse all available job listings with detailed cards
- ⭐ Save favorite jobs for later review
- 🔍 Search and filter job opportunities
- 📱 Fully responsive layout (mobile + desktop)
- ⚡ Fast Vite-powered dev experience with HMR
- 🔥 Firebase Firestore for real-time data
- 🎨 Bootstrap 5 components + custom styling

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + Vite |
| Routing | React Router DOM v7 |
| Styling | Bootstrap 5 + Custom CSS |
| Backend | Firebase Firestore |
| Linting | ESLint |

## Project Structure

```
jobportal/
  src/
    components/
      pages/
        AllJobs.jsx        # Main job listing page
        FavoriteJobs.jsx   # Saved jobs collection
        About.jsx          # Platform information
        Navbar.jsx         # Navigation header
      JobCard.jsx          # Reusable job card component
      FunctionalComponent.jsx
      ClassComponents.jsx
    config/
      firebase.js          # Firebase initialization
    App.jsx                # Router configuration
    main.jsx               # App entry point
    index.css              # Global styles
  package.json
  vite.config.js
```

## Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | AllJobs | Browse all job listings |
| `/favorites` | FavoriteJobs | View saved jobs |
| `/about` | About | About the platform |

## Development

```bash
# Lint the codebase
npm run lint
```

## License

MIT
