# Wedding Landing Page Setup Guide

## 🎉 Your portfolio now lands directly on the Wedding Countdown page!

### ✅ What's Been Changed:

1. **Homepage (`src/app/page.tsx`)**
   - ✅ Only shows WeddingCountdown component
   - ✅ All other sections (Hero, Professional, Hobbies, WeddingPlanner) are commented out

2. **Layout (`src/app/layout.tsx`)**
   - ✅ Navigation component commented out for clean full-page experience
   - ✅ Footer component commented out
   - ✅ Updated page title and meta description for wedding theme

3. **WeddingCountdown Component**
   - ✅ Transformed into full-page hero section
   - ✅ Added background image support
   - ✅ Added dark overlay for better text readability
   - ✅ Improved countdown timer with glassmorphism effect
   - ✅ Made all text white with drop shadows
   - ✅ Vlog section commented out

---

## 📸 Adding Your Couple Photo as Background

### Step 1: Prepare Your Photo
- Choose a high-quality photo of you and your partner
- Recommended resolution: **1920x1080 or higher**
- Format: **JPG** (for best compatibility and file size)

### Step 2: Add the Photo to Your Project
1. Navigate to the `public/wedding/` folder in your project
2. Add your photo and name it **`couple-photo.jpg`**

```
public/
  └── wedding/
      └── couple-photo.jpg  ← Add your photo here
```

### Step 3: View Your Site
The background image will automatically display once the file is in place!

---

## 🎨 Customization Options

### To Change the Background Image Path
Edit `src/components/WeddingCountdown.tsx` line 48:
```tsx
backgroundImage: `url('/wedding/couple-photo.jpg')`,
```

### To Adjust the Overlay Darkness
Edit `src/components/WeddingCountdown.tsx` line 51:
```tsx
<div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
```
- Change `bg-black/50` to `bg-black/30` (lighter) or `bg-black/70` (darker)
- Adjust `backdrop-blur-sm` to `backdrop-blur-md` or `backdrop-blur-none`

### To Show Other Sections Again
Uncomment the relevant sections in:
- `src/app/page.tsx` (for Hero, Professional, Hobbies, WeddingPlanner)
- `src/app/layout.tsx` (for Navigation and Footer)

---

## 🚀 Testing Locally

Run your development server:
```bash
npm run dev
```

Then open: http://localhost:3000

---

## 💡 Tips

- Use a photo with you both in the center for best results
- Landscape/horizontal photos work best for desktop displays
- If text is hard to read, adjust the overlay darkness
- The countdown will automatically update every second!

---

## 🔄 To Restore Portfolio Mode

Simply uncomment all the sections in:
1. `src/app/page.tsx`
2. `src/app/layout.tsx`

This will restore the full portfolio with navigation and all sections.
