# Shahan Khalid LLC - E-commerce Website

A modern, responsive e-commerce website built with Next.js 15, TypeScript, and Tailwind CSS. This website showcases Shahan Khalid LLC's wholesale distribution services across multiple product categories.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations and hover effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Product Categories**: Showcase of 6 main product categories with high-quality images
- **Company Information**: Comprehensive about page with company values and approach
- **Contact Form**: Interactive contact form for potential business inquiries
- **Legal Pages**: Privacy policy and terms of service pages
- **SEO Optimized**: Built with Next.js for optimal performance and SEO

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Turbopack
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── BrandsPartnerships.tsx
│   ├── Certifications.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── ProductCategories.tsx
│   ├── Services.tsx
│   └── WhyPartner.tsx
public/                    # Static assets
├── electronics.jpg
├── food.jpg
├── Health_Beauty.jpg
├── household.jpg
├── logo.png
├── sports.jpg
└── toys.jpg
```

## 🎯 Product Categories

The website showcases expertise in the following product categories:

1. **Health & Beauty** - Personal care, cosmetics, and wellness products
2. **Household Supplies** - Cleaning products, home essentials, and maintenance items
3. **Toys & Games** - Educational toys, entertainment, and recreational products
4. **Grocery & Food** - Food products, beverages, and consumable goods
5. **Electronics & Tech** - Consumer electronics, accessories, and tech gadgets
6. **Sports & Outdoors** - Fitness equipment, outdoor gear, and sporting goods

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd llc-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Adding New Product Categories

1. Add your image to the `public/` folder
2. Update the `categories` array in `src/components/ProductCategories.tsx`:

```typescript
{
  name: "Your Category",
  description: "Your category description",
  image: "/your-image.jpg"
}
```

### Styling

The project uses Tailwind CSS for styling. Key design elements:

- **Color Scheme**: Blue (#2563eb) primary, gray tones for text
- **Typography**: Clean, modern fonts with proper hierarchy
- **Spacing**: Consistent padding and margins using Tailwind utilities
- **Animations**: Smooth hover effects and transitions

### Images

- Place all images in the `public/` folder
- Use descriptive filenames (e.g., `electronics.jpg`, `health_beauty.jpg`)
- Recommended size: 400x300px for category images
- Supported formats: JPG, PNG, SVG

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Configuration

### Next.js Configuration

The project includes optimized Next.js configuration in `next.config.ts`:

- Image optimization settings
- Remote image patterns for external sources
- Turbopack for faster development builds

### TypeScript

Full TypeScript support with strict type checking. Configuration in `tsconfig.json`.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 Pages

- **Homepage** (`/`) - Main landing page with hero section and product categories
- **About** (`/about`) - Company information, values, and approach
- **Contact** (`/contact`) - Contact form for business inquiries
- **Privacy** (`/privacy`) - Privacy policy and data handling
- **Terms** (`/terms`) - Terms of service and usage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software owned by Shahan Khalid LLC.

## 📞 Contact

**Shahan Khalid LLC**
- Website: [Your Website URL]
- Email: [Your Email]
- Phone: [Your Phone]

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS