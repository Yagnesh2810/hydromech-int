# ETHICS Metal Forming Machineries India - Web Application

A premium, high-fidelity responsive corporate web application built for **ETHICS Metal Forming Machineries India** (Engineers Hydro Mech) representing world-class sheet metal, clinching, profile section bending, and busbar processing machinery.

## 🛠️ Technology Stack
* **Core**: React 18 (TypeScript)
* **Routing**: React Router DOM v6
* **Styling**: Tailwind CSS v3 & Vanilla CSS
* **Design Systems**: Glassmorphism components, custom HSL color systems, and glow border styles.
* **Icons**: Handcrafted custom inline SVG vectors replacing standard emojis for a professional corporate layout.

## 📁 Directory Structure
```
hydromech-website/
├── public/                 # Static public files
│   ├── images/             # Synced high-res product and logo assets
│   ├── brochure.pdf        # Synced PDF product brochure
│   └── index.html          # HTML entrypoint
├── src/
│   ├── components/         # Reusable layout and section components
│   │   ├── Header.tsx      # Desktop & Mobile Header with router links
│   │   ├── Footer.tsx      # Clean Footer with social links & inline SVGs
│   │   ├── HeroSection.tsx # Majestic 3D-product frame slideshow
│   │   └── ...
│   ├── pages/              # Router page modules
│   │   ├── Home.tsx        # Homepage assembler
│   │   ├── AboutUs.tsx     # Corporate identity &Commitments
│   │   ├── WhyChooseUs.tsx # Dedicated page detailing IS:2062 steel testings
│   │   ├── BusbarProcessing.tsx # Product details for HMB series
│   │   └── ...
│   ├── App.tsx             # Root router mapping
│   ├── index.tsx           # React DOM Entrypoint
│   └── index.css           # Custom CSS animations & glass utilities
├── tailwind.config.js      # Custom theme color mappings (e.g., primary-900)
└── package.json            # Scripts & project dependencies
```

## ⚙️ Running Locally

### 1. Synchronize Assets
Before launching, make sure the local assets and brochures are synchronized from the project root. Navigate to the parent directory and run the Python asset utility:
```bash
# In the project root directory
python copy_assets.py
```
This utility automatically checks the directories and copies all high-resolution machine JPEG/PNG files, corporate logos, and brochure PDFs into the website's `/public` directories.

### 2. Install Dependencies
Navigate into the `hydromech-website` folder and install:
```bash
npm install
```

### 3. Start Development Server
Run the local dev server:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build Production Bundle
To build the application for production deployment:
```bash
npm run build
```

## 💎 Features & Custom Styling
* **Cinematic Hero Carousel**: The homepage features a split screen layout that pulls high-resolution images, specs, and details dynamically based on active timer slideshow loops.
* **Product Category Filters**: The product showcase features dynamic tabs to explore specialized categories ("All", "Busbar Processing", "Clinching & Insertion", "Bending & Rolling") with micro-interactions.
* **Deflection-Free Design Pages**: Detailed technical specifications, structural testing records (IS:2062 Grade Steel), and force repeatability stats.
* **Instant Quotes**: Integrated WhatsApp messaging templates mapped directly to product models to shorten client callbacks.
