# Next.js E-commerce Product Finder

A modern e-commerce product search and filter application built with Next.js 14, React, and TypeScript.

## Description

This application demonstrates professional full-stack web development including:

- Server-side rendering with Next.js 14
- Component-based React architecture
- TypeScript for type safety
- Responsive design with Tailwind CSS
- Advanced filtering and search functionality
- Performance optimization

## Features

- ✅ Real-time product search
- ✅ Multi-criteria filtering (category, price, stock status)
- ✅ Dynamic sorting options
- ✅ Responsive grid layout
- ✅ Product cards with ratings and discounts
- ✅ Clean, modern UI/UX
- ✅ Type-safe development
- ✅ Mock API with realistic data

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **Build Tool:** Next.js built-in

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── ProductCard.tsx   # Product display component
│   ├── SearchBar.tsx     # Search input component
│   └── FilterPanel.tsx   # Filter controls component
└── lib/
    ├── types.ts          # TypeScript type definitions
    └── api.ts            # API utilities and mock data
```

## Features Breakdown

### Search Functionality
- Real-time search across product names, descriptions, and categories
- Debounced input for performance
- Clear button for quick reset

### Filter System
- **Category Filter:** Dropdown selection of product categories
- **Price Range:** Min/max price inputs
- **Stock Status:** Toggle for in-stock items only
- **Sort Options:** Name, price (ascending/descending), rating

### Product Display
- Responsive card grid (1-3 columns based on screen size)
- Product images with hover effects
- Rating stars visualization
- Discount badges
- Out of stock indicators
- Price comparison (original vs. sale)

### User Experience
- Loading states with spinners
- Empty state messages
- Active filter summary
- Result count display
- One-click filter reset

## Technical Highlights

### Modern React Patterns
- Functional components with hooks
- Custom state management
- Effect synchronization
- Conditional rendering
- Event handling

### TypeScript Integration
- Strict type checking
- Interface definitions
- Type-safe props
- Generic utilities

### Performance Optimizations
- Component memoization opportunities
- Efficient filtering algorithms
- Minimal re-renders
- Lazy loading ready

### Responsive Design
- Mobile-first approach
- Tailwind utility classes
- Flexible grid system
- Accessible UI elements

## Demo Purpose

This is a portfolio demonstration project showing:
- Modern React/Next.js development
- TypeScript proficiency
- E-commerce UI/UX design
- Component architecture
- State management patterns

**Note:** Uses mock data. For production, integrate with a real API or CMS.

## Potential Enhancements

- Add shopping cart functionality
- Implement user authentication
- Connect to real product API
- Add pagination for large datasets
- Implement wishlist feature
- Add product detail pages
- Include checkout process
- Integrate payment processing

## Developer

**Marcus Dunne**
- GitHub: [@MarcusDunne](https://github.com/MarcusDunne)
- Specializing in full-stack web development and e-commerce solutions

## License

MIT

## Deployment

Easy deployment options:
- **Vercel:** One-click deployment (recommended for Next.js)
- **Netlify:** Automatic builds from GitHub
- **Custom hosting:** Build and serve the `.next` folder

```bash
# Build for production
npm run build

# Preview production build
npm start
```

## Support

This is a demonstration project. For professional web development services, please contact through GitHub.
