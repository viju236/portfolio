# 🌟 Personal Portfolio Website

A modern, feature-rich portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases professional work, hobbies, and includes a special wedding countdown section!

## ✨ Features

### 🏠 Landing Page
- Eye-catching hero section with gradient background
- Smooth scroll animations
- Call-to-action buttons

### 💼 Professional Section
- Work experience timeline
- Skills showcase
- Project portfolio with tech stack details
- Responsive grid layouts

### 🎯 Hobbies Section
- Photo and video galleries
- Badminton highlights
- Music performances
- Interactive media cards with hover effects

### 💍 Wedding Journey Section
- **Live Countdown Timer** to November 25, 2025
- Real-time updates (days, hours, minutes, seconds)
- Wedding vlog gallery with BTS videos and photos
- Beautiful gradient design with heart animations

### 📋 Wedding Planning Dashboard
- Interactive checklist for wedding activities
- Progress tracking with visual progress bar
- Vendor management with contact details
- Event schedule with dates, times, and locations
- Click-to-complete tasks

### 🔗 Social Media Integration
- Instagram, LinkedIn, GitHub, and Email links
- Hover effects and smooth transitions
- Accessible design

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Date Handling:** date-fns

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

### 1. Personal Information

**Update Hero Section** (`src/components/Hero.tsx`):
```typescript
<h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
  Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
</h1>
```

**Update Footer** (`src/components/Footer.tsx`):
```typescript
const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/yourusername', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  // Update with your actual social media links
];
```

### 2. Professional Experience

Edit `src/components/Professional.tsx`:

- **Update experiences array:**
  ```typescript
  const experiences = [
    {
      title: 'Your Job Title',
      company: 'Your Company',
      period: '2022 - Present',
      description: 'Your job description...',
    },
  ];
  ```

- **Update skills:**
  ```typescript
  const skills = ['Your', 'Skills', 'Here'];
  ```

- **Update projects:**
  ```typescript
  const projects = [
    {
      title: 'Your Project',
      description: 'Project description...',
      tech: ['Tech', 'Stack'],
    },
  ];
  ```

### 3. Hobbies & Media

Create folders for your media:
```bash
public/
  hobbies/
    badminton1.jpg
    badminton2.jpg
    music1.jpg
    performance.mp4
  wedding/
    bts1.jpg
    venue.jpg
    engagement.jpg
```

Update media paths in `src/components/Hobbies.tsx` and `src/components/WeddingCountdown.tsx`.

### 4. Wedding Details

**Update Wedding Date** (`src/components/WeddingCountdown.tsx`):
```typescript
const weddingDate = new Date('2025-11-25T00:00:00');
```

**Update Events** (`src/components/WeddingPlanner.tsx`):
```typescript
const [events] = useState<Event[]>([
  { id: 1, name: 'Your Event', date: 'Date', time: 'Time', location: 'Location' },
]);
```

**Update Vendors:**
```typescript
const [vendors] = useState<Vendor[]>([
  { id: 1, name: 'Vendor Name', category: 'Category', contact: 'Phone', status: 'Status' },
]);
```

## 🎨 Color Scheme

The website uses a modern color palette:
- **Primary:** Blue (#2563eb)
- **Accent:** Pink/Red for wedding sections (#ec4899, #dc2626)
- **Dark Mode:** Fully supported with gray tones

Customize colors in `tailwind.config.ts`.

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`
- Hamburger menu for mobile navigation
- Optimized layouts for all screen sizes

## 🌙 Dark Mode

Built-in dark mode support using Tailwind CSS dark variant:
- Automatically detects system preference
- Smooth transitions between modes
- All components are dark-mode ready

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click!

### Other Platforms
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with navigation
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   └── components/
│       ├── Navigation.tsx       # Top navigation bar
│       ├── Footer.tsx           # Footer with social links
│       ├── Hero.tsx             # Landing section
│       ├── Professional.tsx     # Work experience section
│       ├── Hobbies.tsx          # Hobbies gallery
│       ├── WeddingCountdown.tsx # Wedding countdown & vlog
│       └── WeddingPlanner.tsx   # Wedding planning dashboard
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🎯 Key Features Explained

### Live Countdown Timer
Uses React hooks (`useState`, `useEffect`) to update every second:
- Calculates time difference from current date to wedding date
- Updates state with days, hours, minutes, seconds
- Smooth animations on number changes

### Interactive Wedding Planner
- Clickable checklist items toggle completion
- Real-time progress bar calculation
- Color-coded vendor status badges
- Responsive grid layouts

### Smooth Animations
Powered by Framer Motion:
- Fade-in effects on scroll
- Hover animations
- Page transitions
- Pulsing heart icon

## 🔧 Customization Tips

1. **Change Navigation Items:** Edit `navItems` array in `Navigation.tsx`
2. **Modify Colors:** Update Tailwind classes or extend theme in `tailwind.config.ts`
3. **Add Sections:** Create new components and import in `page.tsx`
4. **Update Fonts:** Change font imports in `layout.tsx`

## 📝 Content Management

Currently, all content is managed through component code. For future enhancements, consider:
- Adding a CMS (Contentful, Sanity)
- Using MDX for blog posts
- Implementing a database for dynamic content

## 🐛 Troubleshooting

**Dependencies not installing?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
- Check TypeScript errors: `npm run lint`
- Ensure all imports are correct
- Verify image paths in public folder

## 🎉 Congratulations!

Your portfolio website is ready! Customize it with your personal information, add your photos and videos, and deploy it to share with the world.

## 📬 Contact

Feel free to reach out via:
- Instagram: @yourusername
- LinkedIn: linkedin.com/in/yourusername
- Email: your.email@example.com

---

Made with ❤️ using Next.js | © 2025
