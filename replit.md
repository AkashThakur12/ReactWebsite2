# Rudra Enterprises - Business Consultancy Website

## Overview

Rudra Enterprises is a professional business consultancy website built for a manpower consultancy firm based in Raipur. The application provides information about their services including manpower consultancy, audit services, telemarketing/BPO, data management, electrical consultation, and WhatsApp marketing. The site features a modern, corporate design with sections for company information, services, case studies, and a fully functional contact form for lead generation.

**Status**: ✅ MVP Complete and Tested
- All frontend sections implemented with exceptional visual quality
- Contact form fully functional with backend API
- End-to-end testing completed successfully
- Ready for production deployment

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing (single-page application with home and 404 pages)

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- Components follow the "new-york" style variant with customized Tailwind configuration
- Design system emphasizes professional corporate aesthetics inspired by LinkedIn and Stripe
- Component library includes comprehensive set: forms, dialogs, cards, navigation, toasts, and more

**Styling Approach**
- **Tailwind CSS** for utility-first styling
- Custom design tokens defined in CSS variables for theming (colors, spacing, shadows)
- Typography system uses Inter and Poppins fonts from Google Fonts
- Responsive design with mobile-first breakpoints (md, lg)
- Professional color palette using HSL color space for consistency

**State Management**
- **TanStack Query (React Query)** for server state management and API data fetching
- **React Hook Form** with Zod validation for form handling
- Local component state using React hooks

**Form Validation**
- **Zod** schemas for runtime type validation
- Integration with React Hook Form via `@hookform/resolvers`
- Shared validation schemas between client and server (`drizzle-zod`)

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for REST API endpoints
- Separate entry points for development (`index-dev.ts`) and production (`index-prod.ts`)
- Development mode integrates Vite middleware for HMR
- Production mode serves pre-built static assets

**API Structure**
- RESTful endpoints under `/api` prefix
- Contact form submission: `POST /api/contact` and `GET /api/contact`
- JSON request/response format with proper error handling
- Request logging middleware for API calls

**Data Storage**
- **In-memory storage** implementation (`MemStorage` class) for development/testing
- Interface-based storage abstraction (`IStorage`) allowing easy swapping of storage backends
- Designed to support database integration (schema prepared for PostgreSQL via Drizzle)

**Data Models**
- `User` model with username/password fields
- `ContactSubmission` model capturing name, email, subject, message, and timestamp
- UUID-based primary keys for all entities

### Database Design (Prepared but not yet integrated)

**ORM & Schema**
- **Drizzle ORM** configured for PostgreSQL dialect
- Schema definitions in TypeScript using `drizzle-orm/pg-core`
- Migration system configured via `drizzle-kit`
- Schema file: `shared/schema.ts` with table definitions and Zod validators

**Database Provider**
- Configured for **Neon Database** (serverless PostgreSQL)
- Connection via `@neondatabase/serverless` driver
- Environment variable: `DATABASE_URL` for connection string

**Tables**
- `users` table: id (UUID), username (unique), password
- `contact_submissions` table: id (UUID), name, email, subject, message, submitted_at timestamp

### External Dependencies

**Third-Party UI Libraries**
- **Radix UI**: Comprehensive set of unstyled, accessible component primitives (~25 packages)
- **Lucide React**: Icon library for consistent iconography
- **embla-carousel-react**: Carousel/slider functionality
- **cmdk**: Command palette component
- **class-variance-authority** & **clsx**: Utility for managing conditional CSS classes

**Database & ORM**
- **Neon Database**: Serverless PostgreSQL provider
- **Drizzle ORM**: Type-safe ORM with migrations support
- **connect-pg-simple**: PostgreSQL session store (prepared for session management)

**Validation & Forms**
- **Zod**: Schema validation library
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Integration layer between form library and validators
- **zod-validation-error**: Better error messages from Zod

**Development Tools**
- **Replit-specific plugins**: Runtime error overlay, cartographer, dev banner
- **TypeScript**: Strict type checking with ESNext modules
- **PostCSS & Autoprefixer**: CSS processing

**Build & Deployment**
- **esbuild**: Production server bundling
- **tsx**: TypeScript execution for development server
- Development on port with Vite dev server
- Production builds to `dist/` directory (client to `dist/public`, server to `dist/index.js`)

### Design System

**Typography Scale**
- Hero headlines: text-5xl to text-7xl (responsive)
- Section headers: text-3xl to text-4xl
- Body text: text-base to text-lg
- Generous line heights for readability

**Spacing System**
- Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 to py-32 (responsive)
- Max-width containers: 7xl for sections, 6xl for content areas

**Component Patterns**
- Navigation: Fixed/sticky header with backdrop blur, mobile hamburger menu
- Cards: Elevated with hover effects for case studies and services
- Forms: Full validation with real-time feedback
- Smooth scroll navigation between page sections

## Recent Changes

### November 21, 2025
- ✅ Implemented complete frontend with all sections (Navigation, Hero, About, Services, Case Studies, Contact, Footer)
- ✅ Created contact form with Zod validation and React Hook Form integration
- ✅ Built backend API endpoints: POST /api/contact and GET /api/contact
- ✅ Implemented in-memory storage for contact submissions
- ✅ Added professional design following design_guidelines.md
- ✅ Configured Inter and Poppins fonts for typography
- ✅ Integrated stock images for hero, about, and case studies sections
- ✅ End-to-end testing completed successfully
- ✅ All features verified working correctly

## Future Enhancements

### Recommended for Production
1. **Database Migration**: Migrate from in-memory storage to PostgreSQL (schema already defined)
2. **Email Notifications**: Add email service integration for contact form submissions (e.g., Resend, SendGrid)
3. **Analytics**: Integrate Google Analytics or similar for visitor tracking
4. **SEO Optimization**: Add sitemap.xml and robots.txt
5. **Performance**: Add image optimization and lazy loading
6. **Admin Dashboard**: Create admin interface to view and manage contact submissions

### Optional Features
- Blog or news section for company updates
- Client testimonials carousel
- Service detail pages with more information
- Multi-language support (English/Hindi)
- Live chat integration