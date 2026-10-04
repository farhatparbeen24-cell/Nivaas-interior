# Nivaas Interiors — Premium Interior Design Studio Website

A white-label, production-grade landing page for modern interior design studios, built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. Built to the **Current** landing page design system (lime `#E5FF6E`, deep ink `#111111`, white, blue accent `#2330F5`, pill buttons, and geometric grotesk typography).

## ✨ Features

- **Current Design System**: Rhythm of lime, ink, and white sections with 60px hairline grid textures.
- **Feed-style Project Showcase**: Live project feed cards with room tags, location, and completion metrics.
- **Interactive Lightbox Modal**: Full project viewer with deliverables list, high-res gallery, and deep WhatsApp inquiry.
- **Draggable Before/After Slider**: Touch- and mouse-supported comparison slider across multiple room types.
- **Dynamic Package Calculator**: Toggle between Full Home Turnkey rates and Single Room upgrades.
- **Animated Trust Stats**: Count-up statistics for homes delivered, warranty years, and on-time rate.
- **5-Step Process Timeline**: Clear milestones from free consultation to 10-year warranty handover.
- **Testimonial Slider & FAQ Accordion**: 2-cell bordered testimonial cards with verified client badges and animated FAQ drawer.
- **Direct WhatsApp Integration**: Every CTA generates pre-filled `wa.me` links with context (selected package or project).
- **SEO & Schema.org**: Fully structured JSON-LD (`HomeAndConstructionBusiness`), OpenGraph, and Twitter tags.

---

## 🚀 10-Minute Resale & Client Rebranding Guide

All brand parameters, copy, phone numbers, prices, and projects are centralized in:
`lib/site.config.ts`

### 1. Change Brand Name & City
In `lib/site.config.ts`, update:
```ts
brand: {
  name: 'nivaas',
  fullName: 'Nivaas Interiors',
  city: 'Bhubaneswar',
  state: 'Odisha',
  tagline: 'Your home, your story.',
  description: 'A design-led interior studio that turns homes into stories...',
}
```

### 2. Update Phone & WhatsApp Number
```ts
contact: {
  phone: '+91 94370 12345',
  phoneRaw: '+919437012345',
  whatsapp: '919437012345', // Format: Country code without '+' or spaces
  email: 'hello@nivaasinteriors.com',
  address: 'Plot 412, Infocity Road, Patia, Bhubaneswar, Odisha 751024',
}
```

### 3. Update Pricing & Packages
Modify `packagesFullHome` and `packagesSingleRoom` in `lib/site.config.ts` with local city rates.

### 4. Replace Images & Projects
Edit `projects` and `beforeAfter` arrays with your client's real photos or high-res project photography.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🌐 Deploy to Vercel

1. Push your repository to GitHub / GitLab.
2. Import the project into [Vercel](https://vercel.com).
3. The default Next.js build settings will automatically detect App Router.
4. Deploy!
