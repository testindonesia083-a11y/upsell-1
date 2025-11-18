# Overview

This is an e-commerce upsell landing page for children's biblical educational products. The application presents a single-page upsell flow targeting parents who have already initiated a purchase, offering them a "Super Kit de Atividades Bíblicas" (Super Kit of Biblical Activities) and related cross-sell products. The design follows child-friendly aesthetics with warm colors, urgency messaging, and trust-building elements like testimonials and guarantees.

The technical stack consists of a React frontend with TypeScript, Vite as the build tool, Express.js backend, and shadcn/ui component library built on Radix UI primitives. The application integrates with Cakto payment platform for order processing.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (single-page application approach)

**Component System**
- shadcn/ui component library (New York style variant) providing pre-built, accessible UI components
- Radix UI primitives as the foundation for complex interactive components
- Tailwind CSS for utility-first styling with custom CSS variables for theming
- Component composition follows atomic design principles with reusable UI elements

**State Management**
- TanStack Query (React Query) for server state management and data fetching
- React hooks for local component state
- Query client configured with optimistic defaults (no automatic refetching, infinite stale time)

**Styling Strategy**
- Custom design system defined via CSS variables (HSL color space for easy theme manipulation)
- Typography: Poppins (primary) and Nunito (secondary) Google Fonts
- Color palette optimized for child-friendly, warm aesthetics (yellows, blues, greens)
- Responsive design with mobile-first approach using Tailwind breakpoints

## Backend Architecture

**Server Framework**
- Express.js server handling API routes and serving the SPA
- TypeScript throughout the backend for type consistency
- Middleware for JSON parsing with raw body preservation (for webhook verification)
- Request logging with duration tracking for API endpoints

**Development vs Production**
- Vite middleware mode in development for hot module replacement
- Static file serving in production from compiled dist/public
- Replit-specific plugins for development tools (cartographer, dev banner, error overlay)

**Storage Layer**
- In-memory storage implementation (MemStorage class) for user data
- Abstracted IStorage interface allowing future database implementations
- Database schema defined with Drizzle ORM for PostgreSQL (migration-ready but not yet connected)
- Users table with UUID primary keys, username, and password fields

## External Dependencies

**Payment Integration**
- Cakto payment platform via custom web components (`cakto-upsell-accept`, `cakto-upsell-reject`)
- External script loaded from `caktoscripts.nyc3.cdn.digitaloceanspaces.com/upsell.js`
- Upsell flow configured with offer IDs and redirect URLs for accept/reject actions
- Integration supports both upsell acceptance (redirects to payment) and rejection (redirects to members area)

**Database (Configured but Not Active)**
- Drizzle ORM configured for PostgreSQL with Neon serverless driver
- Schema includes users table with UUID, username, and password
- Drizzle Kit configured for migrations in `./migrations` directory
- `DATABASE_URL` environment variable required when database is provisioned

**UI Component Libraries**
- Radix UI primitives for 30+ accessible components (dialogs, dropdowns, tooltips, etc.)
- Lucide React for icon components
- Class Variance Authority (CVA) for component variant management
- clsx and tailwind-merge for conditional className composition

**Form Handling**
- React Hook Form integration prepared via @hookform/resolvers
- Zod for schema validation (drizzle-zod for database schema validation)

**Asset Management**
- Static images stored in `attached_assets/generated_images/` directory
- Vite alias `@assets` for clean imports of images and other static resources
- Product images for UNO Bíblico, Devocionais, and Super Kit included

**Fonts & Typography**
- Google Fonts: Poppins (400, 600, 700) and Nunito (400, 600, 700)
- Loaded via CDN link in HTML head for performance

**Third-Party Scripts**
- Cakto upsell script loaded globally for payment button functionality
- Custom web components registered globally for upsell/downsell actions