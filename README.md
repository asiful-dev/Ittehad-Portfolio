# Ittehad Bin Rahim's Portfolio

A modern, responsive personal portfolio website built with Next.js, showcasing professional experience, projects, and skills. Features smooth animations, interactive components, and a clean, professional design.

## Overview

This portfolio website serves as a comprehensive showcase of professional work, technical skills, and achievements. The site is built with performance and user experience in mind, utilizing modern web technologies and best practices.

## Features

- Responsive design that works seamlessly across all devices
- Smooth animations and transitions powered by GSAP and Framer Motion
- Interactive project showcase with detailed information
- Professional about section highlighting experience and skills
- Contact section for networking and collaboration
- Modern UI components built with Radix UI
- Smooth scrolling experience with Lenis
- Type-safe implementation with TypeScript

## Technology Stack

### Core Technologies
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe development

### Styling & Animation
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lenis** - Smooth scroll library

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Icons** - Additional icon support

### Development Tools
- **ESLint** - Code linting
- **Turbopack** - Fast bundler for development

## Project Structure

```
ittehad-portfolio/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── nav/           # Navigation components
│   │   ├── projects/      # Project-related components
│   │   ├── sections/      # Main page sections
│   │   └── ui/            # Reusable UI components
│   ├── context/           # React context providers
│   ├── lib/              # Utility functions
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
└── package.json        # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ittehad-portfolio.git
cd ittehad-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Sections

### Hero
Introduction section with name, title, and call-to-action elements.

### About
Detailed information about professional background, skills, and experience.

### Projects
Showcase of featured projects with descriptions, technologies used, and links to live demos and repositories.

### Contact
Contact information and networking links for collaboration opportunities.

## Customization

To customize this portfolio for your own use:

1. Update personal information in the relevant section components
2. Replace project data in the projects section
3. Modify the color scheme in `globals.css` and Tailwind configuration
4. Update resume and asset files in the `public` directory
5. Adjust animations and transitions in component files as needed

## Performance Optimization

- Server-side rendering with Next.js for optimal performance
- Image optimization using Next.js Image component
- Code splitting and lazy loading for efficient bundle sizes
- Optimized animations for smooth 60fps performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and personal use only.

## Contact

For inquiries, collaboration opportunities, or questions about this portfolio, please reach out through the contact section on the website.

