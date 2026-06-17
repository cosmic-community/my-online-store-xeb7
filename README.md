# Motera Sports Hub

![App Preview](https://imgix.cosmicjs.com/d3e96670-6a2c-11f1-8dfe-457508ece1b8-autopilot-photo-1500648767791-00dcc994a43e-1781687619086.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

An ultra-modern, premium 3D-inspired sports equipment website for **Motera Sports Hub** — your ultimate destination for premium sports equipment and fitness gear. Built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com).

🏆 **"Play Better. Train Harder. Win Bigger."** 🚀

## Features

- 🎨 **Premium dark theme** with black, navy, electric blue, and red neon accents
- 🪟 **Glassmorphism UI** elements throughout
- ✨ **Mouse-following spotlight** effect and animated gradient borders
- 🛍️ **Futuristic 3D product cards** that rotate on hover
- 🌟 **Why Choose Us** section with neon icon cards
- 📊 **Animated statistics counters**
- 💬 **Floating testimonial cards** with depth and shadows
- 📸 **Gallery showcase** of products
- 📍 **Contact section** with WhatsApp button & contact form
- 📱 **Fully responsive** for desktop, tablet, and mobile

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a3264edcb5ebdc34732fa2e&clone_repository=6a326613cb5ebdc34732fa61)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for an online store with products (including images, pricing, description, and inventory status), product categories, and customer reviews.
>
> User instructions: MOTERA SPORTS HUB – Premium 3D Sports Website Prompt
>
> Create an ultra-modern, premium 3D sports equipment website for Motera Sports Hub. The design should feel like a mix of Nike, Adidas, and futuristic gaming websites... [full premium 3D sports website spec including dark theme, glassmorphism, 3D animations, hero section, products section, why choose us, statistics, about, gallery, testimonials, and contact sections]"

### Code Generation Prompt

> Build a Next.js application for an online business called "My Online Store". The content is managed in Cosmic CMS with the following object types: categories, products, reviews. Create a beautiful, modern, responsive design with a homepage and pages for each content type. (Tailored as Motera Sports Hub — Premium 3D Sports Website.)

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic SDK](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account and bucket

### Installation

```bash
bun install
bun run dev
```

Set environment variables (provided automatically in the Cosmic dashboard):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all products with category data
const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single product
const { object: product } = await cosmic.objects
  .findOne({ type: 'products', slug: 'cricket-bat' })
  .depth(1)
```

## Cosmic CMS Integration

This app reads three object types from your bucket: **categories**, **products**, and **reviews**. Connected objects (like a product's category) are resolved using the Cosmic `depth` parameter. Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel**: Connect your repo and set the environment variables in project settings.
- **Netlify**: Use the Next.js runtime and set environment variables in the dashboard.

<!-- README_END -->