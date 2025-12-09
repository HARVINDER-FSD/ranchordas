# Setup Instructions

## Quick Start

Follow these steps to get the Ranchordas Pagi tribute website running:

### 1. Install Dependencies

```bash
npm install
```

This will install:
- React 18.2.0
- React DOM 18.2.0
- React Router DOM 6.20.0
- Framer Motion 10.16.4
- React Icons 4.11.0
- React Scripts 5.0.1

### 2. Start Development Server

```bash
npm start
```

The website will open at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Project Structure

```
ranchordas-pagi-tribute/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # Reusable components (used in old single-page version)
│   │   ├── Navbar.js/css   # Navigation bar (used across all pages)
│   │   ├── Footer.js/css   # Footer (used across all pages)
│   │   └── ...             # Other components
│   ├── pages/              # Individual page components
│   │   ├── HomePage.js/css
│   │   ├── AchievementsPage.js/css
│   │   ├── StoryPage.js/css
│   │   ├── DocumentaryPage.js/css
│   │   ├── BookPage.js/css
│   │   ├── GalleryPage.js/css
│   │   ├── LegacyPage.js/css
│   │   └── ContactPage.js/css
│   ├── App.js              # Main app with routing
│   ├── App.css             # Global app styles
│   ├── index.js            # Entry point
│   └── index.css           # Global CSS variables
├── package.json
├── README.md
└── .gitignore
```

## Pages Overview

### 1. Home Page (`/`)
- Hero section with animated elements
- Quick navigation cards
- Featured testimonial

### 2. Achievements Page (`/achievements`)
- 7 detailed achievement cards
- Recognition timeline
- Comprehensive honors list

### 3. Story Page (`/story`)
- 6-chapter timeline
- Detailed biography
- Historical context

### 4. Documentary Page (`/documentary`)
- Video trailer section
- Documentary details
- Screening request form
- Behind-the-scenes gallery

### 5. Book Page (`/book`)
- 3D book cover
- Detailed specifications
- Purchase options
- Sample chapter
- Reader reviews
- Author biography

### 6. Gallery Page (`/gallery`)
- 16 images across 5 categories
- Search functionality
- Category filters
- Lightbox view

### 7. Legacy Page (`/legacy`)
- BSF post information
- Cultural impact tabs
- Educational programs
- Testimonials
- Visit information

### 8. Contact Page (`/contact`)
- Contact form
- Contact information
- Social media links
- Specific inquiries
- FAQ section

## Color Palette

```css
--desert-brown: #8B5A2B
--army-green: #3E4E39
--saffron-gold: #DB9E36
--cream: #F5E6D3
--dark-brown: #5C3D2E
--light-sand: #E8D5B7
```

## Typography

- **Headings**: Oswald (Bold, military-style)
- **Body**: Merriweather (Serif, traditional)

## Key Features

✅ Multi-page architecture with React Router
✅ Smooth page transitions
✅ Responsive design (mobile, tablet, desktop)
✅ Animated elements with Framer Motion
✅ Interactive forms and filters
✅ Lightbox image gallery
✅ SEO-friendly structure
✅ Accessibility compliant

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Tips

1. **Hot Reload**: Changes are automatically reflected in the browser
2. **Component Structure**: Each page is self-contained with its own CSS
3. **Routing**: Handled by React Router DOM in `App.js`
4. **Icons**: Using React Icons library (Gi, Fa prefixes)
5. **Animations**: Framer Motion for smooth transitions

## Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure redirects for React Router (add `_redirects` file)

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/ranchordas-pagi",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## Troubleshooting

### Issue: Module not found
**Solution**: Run `npm install` to ensure all dependencies are installed

### Issue: Port 3000 already in use
**Solution**: Kill the process or use a different port:
```bash
PORT=3001 npm start
```

### Issue: Build fails
**Solution**: Clear cache and rebuild:
```bash
npm cache clean --force
rm -rf node_modules
npm install
npm run build
```

## Support

For questions or issues:
- Email: info@ranchordaspagi.in
- Check README.md for detailed documentation

---

**Jai Hind | Jai Bharat** 🇮🇳
