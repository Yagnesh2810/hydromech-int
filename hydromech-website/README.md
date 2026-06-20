# ETHICS Metal Forming Machineries India - Web Application

A premium, high-fidelity responsive corporate web application built for **ETHICS Metal Forming Machineries India** (Engineers Hydro Mech) representing world-class sheet metal, clinching, profile section bending, and busbar processing machinery.

## 🛠️ Technology Stack
* **Framework**: Next.js 14 (App Router)
* **Core**: React 18 (TypeScript)
* **Styling**: Tailwind CSS v3 & Vanilla CSS
* **Design Systems**: Glassmorphism components, custom HSL color systems, and glowing border styles.
* **Icons**: Handcrafted custom inline SVG vectors replacing standard emojis for a professional corporate layout.

## 📁 Directory Structure
```
hydromech-website/
├── public/                 # Static public files (logos, machine images, PDF brochure)
├── src/
│   ├── app/                # Next.js App Router Pages & Layouts
│   │   ├── about-us/       # Corporate profile & history
│   │   ├── careers/        # Careers & job openings
│   │   ├── contact-us/     # Contact info & feedback form
│   │   ├── our-team/       # Executive team profiles
│   │   ├── products/       # Dynamic category routers
│   │   │   ├── bending-rolling/ # Profile section and plate rolling machinery
│   │   │   ├── busbar/          # Copper busbar processing lines
│   │   │   ├── clinching/       # Sheet metal fastening systems
│   │   │   └── other/           # Special-purpose machinery
│   │   ├── projects/       # Machinery delivery and customer showcase
│   │   ├── why-choose-us/  # Deflection-free designs, IS:2062 steel testings
│   │   ├── layout.tsx      # Global app layout (Header, Footer)
│   │   └── page.tsx        # Homepage landing page route
│   ├── components/         # Reusable UI & interactive layout components
│   │   ├── Header.tsx      # Responsive desktop & mobile header
│   │   ├── Footer.tsx      # Corporate footer with social hooks & legal links
│   │   ├── HeroSection.tsx # Majestic 3D-product frame carousel slideshow
│   │   └── ...             # Section components (Stats, Testimonials, etc.)
│   ├── page-components/    # Page-specific content components
│   ├── assets/             # Internal static assets
│   └── index.css           # Custom CSS animations & glassmorphism utilities
├── tailwind.config.js      # Custom theme color mappings & typography setup
└── package.json            # Scripts & project dependencies
```

## ⚙️ Running Locally

### 1. Install Dependencies
Navigate into the `hydromech-website` folder and install:
```bash
npm install
```

### 2. Start Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build Production Bundle
To build the application for production deployment:
```bash
npm run build
```

### 4. Start Production Server
To run the production-built bundle locally:
```bash
npm run start
```

## 💎 Features & Custom Styling
* **Cinematic Hero Carousel**: The homepage features a split-screen layout that pulls high-resolution images, specs, and details dynamically based on active timer slideshow loops.
* **Product Category Filters**: The product showcase features dynamic tabs to explore specialized categories ("All", "Busbar Processing", "Clinching & Insertion", "Bending & Rolling") with micro-interactions.
* **Deflection-Free Design Pages**: Detailed technical specifications, structural testing records (IS:2062 Grade Steel), and force repeatability stats.
* **Instant Quotes**: Integrated WhatsApp messaging templates mapped directly to product models to shorten client callbacks.
