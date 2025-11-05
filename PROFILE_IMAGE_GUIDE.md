# How to Add Your Profile Image

## Option 1: Simple Replacement (Recommended)

1. **Prepare your photo:**
   - Use a square photo (1:1 ratio)
   - Recommended size: 500x500px or larger
   - Format: JPG or PNG
   - Name it: `profile.jpg` or `profile.png`

2. **Add to your project:**
   - Place the file in: `public/profile.jpg`

3. **Update the Hero component:**
   - Open `src/components/Hero.tsx`
   - Find this section (around line 20-30):
   ```tsx
   {/* Replace this placeholder with your actual image */}
   <div className="w-full h-full flex items-center justify-center text-5xl sm:text-6xl md:text-7xl font-bold text-blue-600 dark:text-blue-400">
     VP
   </div>
   {/* Uncomment and use this when you add your image:
   <img 
     src="/profile.jpg" 
     alt="Vijay Patil" 
     className="w-full h-full object-cover"
   />
   */}
   ```

4. **Uncomment the image tag:**
   ```tsx
   <img 
     src="/profile.jpg" 
     alt="Vijay Patil" 
     className="w-full h-full object-cover"
   />
   ```

5. **Delete or comment out the placeholder div**

## Option 2: Use Next.js Image Component (Better Performance)

1. Add your image to `public/profile.jpg`

2. Update Hero.tsx:
   ```tsx
   import Image from 'next/image';
   
   // In the component, replace the placeholder with:
   <Image 
     src="/profile.jpg" 
     alt="Vijay Patil"
     width={192}
     height={192}
     className="w-full h-full object-cover"
     priority
   />
   ```

## Your Profile Image Location

```
portfolio/
└── public/
    └── profile.jpg  ← Place your photo here
```

## Image Tips for Best Results:

✅ **Good:**
- Professional headshot
- Clear face visibility
- Good lighting
- Solid or simple background
- Square aspect ratio

❌ **Avoid:**
- Blurry or pixelated images
- Group photos
- Too much background distraction
- Extreme close-ups

## Current Placeholder

The website currently shows your initials "VP" in a circular badge. Once you add your photo, it will automatically be displayed in a professional circular frame with a blue border.
