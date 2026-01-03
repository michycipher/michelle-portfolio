# Michelle Utomi - Frontend Developer Portfolio

> **Bringing Ideas to Life, Pixel by Pixel**  
> A modern, performant portfolio showcasing frontend development expertise through clean code and captivating user experiences.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://michycipher.github.io/michelle-portfolio/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF)](https://vitejs.dev/)

## Overview

This portfolio website is a single-page application (SPA) built to demonstrate modern frontend development practices, smooth animations, and responsive design. Every interaction is crafted to provide a delightful user experience while maintaining optimal performance.

**Live Site:** [michycipher.github.io/michelle-portfolio](https://michycipher.github.io/michelle-portfolio/)

---

## Tech Stack

### Core Technologies
- **React 18.2.0** - Component-based UI architecture
- **Vite 4.4.5** - Lightning-fast build tool and dev server
- **React Router DOM 7.5.0** - Client-side routing with hash-based navigation
- **Sass** - Advanced CSS preprocessing for maintainable styles

### Libraries & Integrations
- **Framer Motion 10.16.4** - Production-ready animation library for fluid UI transitions
- **React Icons 5.5.0** - Comprehensive icon library
- **EmailJS 4.4.1** - Client-side email functionality for contact form
- **ESLint** - Code quality and consistency enforcement

### Deployment
- **GitHub Pages** - Static site hosting with automated deployment

---

## Features

### Animated User Interface
- Smooth page transitions powered by Framer Motion
- Hover effects and micro-interactions on interactive elements
- Scroll-triggered animations for enhanced engagement
- Custom animation variants for consistent motion design

### Auto “Last Updated” Indicator
- Displays the most recent GitHub commit date in the footer
- Automatically updates whenever a new commit is pushed
- Uses GitHub’s public API to fetch commit metadata
- Cached with `localStorage` to avoid unnecessary API calls
- Configurable via environment variables for maintainability

### Responsive Design
- Mobile-first approach ensuring optimal experience across all devices
- Fluid typography and spacing using modern CSS techniques
- Breakpoint-driven layouts adapting to screen sizes

### Core Sections

#### **Home**
- Hero section with animated headline and call-to-action
- Dynamic text effects introducing personal brand
- Smooth scroll navigation to portfolio sections

#### **Projects**
- Responsive grid layout showcasing development work
- Interactive project cards with hover states
- Live demo links and repository access
- Technology badges highlighting stack used

#### **About**
- Professional introduction and background
- Skills visualization with tech stack icons
- Experience timeline and expertise areas

#### **Contact**
- Functional contact form integrated with EmailJS
- Real-time form validation
- Social media links with icon integration
- Success/error state handling

---

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar/         # Navigation component
│   │   ├── Hero/           # Landing section
│   │   ├── Projects/       # Portfolio showcase
│   │   ├── About/          # About section
│   │   └── Contact/        # Contact form
│   ├── styles/             # Sass stylesheets
│   │   ├── _variables.scss # Design tokens (colors, spacing)
│   │   ├── _mixins.scss    # Reusable style patterns
│   │   └── main.scss       # Global styles
│   ├── assets/             # Images and static files
│   ├── utils/              # Helper functions
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Application entry point
├── public/                 # Static assets
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
└── README.md               # Documentation
```

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/michycipher/michelle-portfolio.git
cd michelle-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GITHUB_REPO=michycipher/michelle-portfolio
```

4. **Start development server**
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

5. **Build for production**
```bash
npm run build
```

6. **Preview production build**
```bash
npm run preview
```

---

## 🚢 Deployment

### GitHub Pages (Current)

The site is configured for automated deployment to GitHub Pages:

```bash
npm run deploy
```

This command:
1. Builds the production bundle (`npm run build`)
2. Deploys the `dist` folder to the `gh-pages` branch
3. Makes the site live at the configured homepage URL

### Configuration Details
- **Base Path:** Configured in `vite.config.js` for GitHub Pages subdirectory
- **Hash Router:** Uses hash-based routing (`/#/`) for client-side navigation compatibility
- **Homepage:** Specified in `package.json` for correct asset paths

---

## 💡 Key Implementation Details

### Framer Motion Animations
All animations use Framer Motion's declarative API for consistency:

### GitHub Commit-Based Activity Tracking
The footer includes a dynamic **“Last Updated”** indicator that reflects the latest commit to the repository.

**How it works:**
- Fetches the most recent commit from GitHub’s public API
- Formats the commit date as `Month Year`
- Caches the value in `localStorage` for performance
- Repository reference is managed via environment variables

```jsx
// Example animation variant pattern
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}
```

### EmailJS Integration
Contact form submissions handled client-side without backend infrastructure:
- Form data validated before submission
- Loading states during email sending
- Success/error feedback to users
- Environment variables for secure credential management

### Sass Architecture
Modular stylesheet organization:
- **Variables:** Centralized design tokens (colors, typography, spacing)
- **Mixins:** Reusable style patterns (responsive breakpoints, flex utilities)
- **Component Styles:** Scoped styles for each component
- **Global Styles:** Base styles and CSS reset

### Performance Optimizations
- **Vite's Fast Refresh:** Instant HMR during development
- **Code Splitting:** Automatic chunk splitting for optimal loading
- **Asset Optimization:** Image optimization and lazy loading
- **Tree Shaking:** Removes unused code in production builds

---

## 🎨 Design System

### Color Palette
- **Primary:** Vibrant pink/purple gradient
- **Secondary:** Complementary accent colors
- **Neutral:** Clean backgrounds and text colors
- **Semantic:** Success, error, and warning states

### Typography
- **Font Family:** Clean, modern sans-serif (Inter or similar)
- **Scale:** Fluid typography adapting to viewport size
- **Hierarchy:** Clear visual distinction between heading levels

### Spacing System
Consistent spacing scale based on 8px base unit for visual rhythm and alignment

---

## 📝 Scripts Reference

```json
{
  "dev": "vite",                    // Start development server
  "build": "vite build",            // Create production build
  "lint": "eslint . --ext js,jsx",  // Run code linting
  "preview": "vite preview",        // Preview production build locally
  "predeploy": "npm run build",     // Pre-deployment build step
  "deploy": "gh-pages -d dist"      // Deploy to GitHub Pages
}
```

---

## 🔧 Configuration Files

### `vite.config.js`
- Base path configuration for GitHub Pages
- Plugin configuration (React plugin)
- Build optimization settings

### ESLint
- React-specific rules
- Hook dependency checking
- Code style enforcement

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📈 Future Enhancements

- [x] Add dark mode toggle
- [ ] Implement blog section with MDX support
- [ ] Integrate analytics for visitor insights
- [ ] Add project filtering by technology
- [ ] Implement progressive web app (PWA) features
- [ ] Add internationalization (i18n) support

---

## 👤 Author

**Michelle Utomi**  
Frontend Developer passionate about creating beautiful, accessible web experiences

- Portfolio: [michycipher.github.io/michelle-portfolio](https://michycipher.github.io/michelle-portfolio/)
- GitHub: [@michycipher](https://github.com/michycipher)

---

## 📄 License

This project is open source and available for reference. Please do not directly copy for your own portfolio.

---
