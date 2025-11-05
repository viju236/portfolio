# 📱💻 Responsive Background Images Setup

## Images Required

Add these two images to `public/wedding/`:

### 1. **Vertical.JPG** (Mobile/Portrait)
- Used on: Mobile devices and tablets in portrait mode
- Recommended size: **1080 x 1920** (9:16 ratio)
- Orientation: Portrait/Vertical

### 2. **Horizontal.JPG** (Desktop/Landscape)
- Used on: Tablets in landscape and desktop devices
- Recommended size: **1920 x 1080** (16:9 ratio)
- Orientation: Landscape/Horizontal

---

## File Structure

```
public/
└── wedding/
    ├── Vertical.JPG    ← Mobile background
    └── Horizontal.JPG  ← Desktop background
```

⚠️ **Important:** File names are case-sensitive! Use exactly `Vertical.JPG` and `Horizontal.JPG`

---

## New Countdown Design Features

✨ **Elegant Card Style**
- Beautiful glassmorphism cards with gradient backgrounds
- Emoji icons for each time unit (📅 ⏰ ⏱️ ⏳)
- Gradient text effect on numbers (pink to rose)
- Hover animations and glow effects
- Responsive sizing for all devices

🎨 **Visual Enhancements**
- Decorative background blur circles
- Animated pulse dots on cards
- Gradient overlays on backgrounds
- Decorative heart divider
- Smooth transitions and spring animations

📱 **Responsive Design**
- Automatically switches background based on device
- Scales beautifully from mobile to 4K displays
- Touch-friendly spacing on mobile
- Optimized text sizes for readability

---

## How It Works

### Mobile (< 768px)
- Shows `Vertical.JPG` background
- 2-column grid for countdown cards
- Compact spacing

### Desktop (≥ 768px)
- Shows `Horizontal.JPG` background
- 4-column grid for countdown cards
- Spacious layout

---

## Testing

1. Add your images to `public/wedding/`
2. Run: `npm run dev`
3. Test mobile: Resize browser or use DevTools device emulation
4. Test desktop: Full browser window

---

## Customization

### Adjust Gradient Overlay
In `WeddingCountdown.tsx`, modify the overlay darkness:
```tsx
// Lighter overlay
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>

// Darker overlay
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
```

### Change Gradient Colors
Modify the card gradient colors:
```tsx
// Current: pink to rose
from-pink-600 to-rose-600

// Alternative: purple to pink
from-purple-600 to-pink-600

// Alternative: blue to purple
from-blue-600 to-purple-600
```

---

## 🎉 Enjoy Your Beautiful Wedding Countdown!
