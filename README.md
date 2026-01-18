# S&S Marine Consulting Website

Professional maritime consulting website for port authorities and infrastructure leaders. Built with React 19, Tailwind CSS 4, Express, tRPC, and Drizzle ORM.

## Overview

S&S Marine Consulting provides expert advisory services for offshore marine projects and port operations safety excellence. This website serves as the primary digital presence for attracting government officials, port authorities, and infrastructure leaders planning large-scale maritime projects.

## Tech Stack

- **Frontend:** React 19, Tailwind CSS 4, Wouter (routing)
- **Backend:** Express 4, tRPC 11
- **Database:** MySQL/TiDB with Drizzle ORM
- **Authentication:** Manus OAuth
- **Storage:** AWS S3
- **Deployment:** Manus hosting platform

## Features

- ✅ Responsive maritime-themed design (deep navy, gold, teal)
- ✅ Consultation request form with database storage
- ✅ Case studies with blog-style narratives
- ✅ SEO-optimized content targeting government decision-makers
- ✅ LinkedIn Pixel tracking for ad campaigns
- ✅ Multilingual support (English, Danish, Portuguese, Spanish)
- ✅ Owner notifications for new consultation requests

## Getting Started

### Prerequisites

- Node.js 22.x or higher
- pnpm 10.x or higher
- MySQL database (or TiDB)
- AWS S3 bucket for file storage

### Installation

1. Clone the repository:
```bash
git clone https://github.com/OuroVox-Joel/ss-marine-website.git
cd ss-marine-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables (see [Environment Variables](#environment-variables) section below)

4. Push database schema:
```bash
pnpm db:push
```

5. Start development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## Environment Variables

Create a `.env` file in the project root with the following variables:

### Required System Variables

```env
# Database
DATABASE_URL=mysql://user:password@host:port/database

# Authentication
JWT_SECRET=your-jwt-secret-key
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://login.manus.im
VITE_APP_ID=your-manus-app-id

# Owner Information
OWNER_OPEN_ID=owner-open-id
OWNER_NAME=Owner Name

# Manus Built-in APIs
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=your-backend-api-key
VITE_FRONTEND_FORGE_API_KEY=your-frontend-api-key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im

# Analytics (optional)
VITE_ANALYTICS_ENDPOINT=your-analytics-endpoint
VITE_ANALYTICS_WEBSITE_ID=your-website-id

# Branding
VITE_APP_TITLE=S&S Marine Consulting
VITE_APP_LOGO=/logo.svg
```

### AWS S3 Configuration

S3 credentials are managed through the Manus platform. If deploying outside Manus, configure:

```env
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_REGION=your-region
S3_BUCKET=your-bucket-name
```

## Project Structure

```
ss-marine-website/
├── client/                 # Frontend React application
│   ├── public/            # Static assets (images, fonts)
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions and tRPC client
│   │   ├── App.tsx        # Routes and layout
│   │   └── index.css      # Global styles and Tailwind config
├── server/                # Backend Express + tRPC
│   ├── db.ts             # Database query helpers
│   ├── routers.ts        # tRPC procedures
│   ├── _core/            # Framework plumbing (OAuth, context, etc.)
│   └── *.test.ts         # Vitest test files
├── drizzle/              # Database schema and migrations
│   └── schema.ts         # Table definitions
├── shared/               # Shared constants and types
└── storage/              # S3 helpers

```

## Available Scripts

```bash
# Development
pnpm dev              # Start dev server with hot reload

# Database
pnpm db:push          # Generate and apply migrations

# Testing
pnpm test             # Run vitest tests

# Production Build
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm check            # TypeScript type checking
pnpm format           # Format code with Prettier
```

## Database Schema

### `users` Table
- Core user authentication table
- Fields: `id`, `openId`, `name`, `email`, `loginMethod`, `role`, `createdAt`, `updatedAt`, `lastSignedIn`

### `consultation_requests` Table
- Stores consultation form submissions
- Fields: `id`, `name`, `email`, `country`, `service`, `message`, `source`, `status`, `createdAt`, `updatedAt`

## Deployment

### Deploying to Manus Platform (Recommended)

1. Save a checkpoint in the Manus UI
2. Click "Publish" button in the Management UI header
3. Configure custom domain in Settings → Domains

### Deploying to External Hosting

1. Build the application:
```bash
pnpm build
```

2. Set up environment variables on your hosting provider

3. Start the production server:
```bash
pnpm start
```

4. Configure reverse proxy (nginx/Apache) to route traffic to the Express server

### Environment-Specific Notes

- **Database:** Ensure MySQL 8.0+ or TiDB with SSL enabled
- **Storage:** Configure S3 bucket with public read access for uploaded assets
- **Authentication:** Manus OAuth requires callback URL configuration

## SEO Optimization

The website is optimized for search queries from government officials and port authorities:

### Target Keywords
- Maritime consulting, port consulting, VTS systems
- Vessel traffic services, port operations
- Marine safety, offshore consulting
- Port development, maritime infrastructure
- JCPDI, Saudi Arabia ports
- Port transition planning, marine services changeover
- Reducing port insurance claims

### SEO Features
- Meta tags optimized for each page
- Structured data (Schema.org) markup
- Open Graph tags for social sharing
- XML sitemap
- Semantic HTML structure
- Image alt text for accessibility

## LinkedIn Pixel Integration

The landing page (`/landing`) includes LinkedIn Pixel tracking for ad campaigns.

**To activate:**
1. Open `client/src/pages/LandingPage.tsx`
2. Replace `YOUR_PARTNER_ID` with your actual Partner ID from LinkedIn Campaign Manager
3. Deploy changes

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run tests: `pnpm test`
4. Submit a pull request

## License

Proprietary - All rights reserved by S&S Marine Consulting

## Support

For technical issues or questions:
- Email: contact@ssmarine.com
- GitHub Issues: https://github.com/OuroVox-Joel/ss-marine-website/issues

## Acknowledgments

Built with the Manus web development platform.
