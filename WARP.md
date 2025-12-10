# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

### Development
```powershell
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding shadcn/ui Components
```powershell
npx shadcn@latest add [component-name]
```
The project uses shadcn/ui with the "new-york" style variant. Components are installed to `src/components/ui/`.

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **React**: Version 19 with React Server Components
- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS 4 with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: Redux Toolkit for global state, TanStack Query for server state
- **Forms**: React Hook Form with Zod validation
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React
- **Notifications**: Sonner for toast notifications

### Project Structure

The codebase follows a **feature-based architecture**:

```
src/
├── app/                    # Next.js App Router pages and layouts
│   ├── layout.tsx         # Root layout with providers and Navigation
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles and design tokens
│   ├── discovery/         # Discovery/search page
│   ├── futsal/[id]/       # Futsal detail pages
│   ├── booking/[id]/      # Booking flow pages
│   └── dashboard/         # User dashboards (player/owner)
├── components/
│   └── ui/                # shadcn/ui components (Button, Card, etc.)
├── features/              # Feature modules (self-contained)
│   ├── auth/
│   │   ├── api/          # API calls for auth
│   │   ├── components/   # Auth-specific components
│   │   ├── hooks/        # Auth-specific hooks
│   │   └── utils/        # Auth utilities
│   └── public/
│       └── home/
│           ├── components/  # Home page components (Navigation, Footer, etc.)
│           ├── api/
│           ├── hooks/
│           └── utils/
└── lib/
    ├── store.ts           # Redux store configuration
    ├── hooks.ts           # Typed Redux hooks (useAppDispatch, useAppSelector)
    ├── providers.tsx      # App providers (Redux, Query, Theme)
    ├── utils.ts           # Shared utilities (cn helper)
    └── features/          # Redux slices
        └── exampleSlice.ts
```

### Feature-Based Architecture

Each feature module is self-contained with its own:
- **components/**: Feature-specific UI components
- **api/**: API client functions (for use with TanStack Query)
- **hooks/**: Custom React hooks
- **utils/**: Utility functions specific to the feature
- **index.ts**: Public API exports

When creating new features, follow this structure. Components in `features/` are for business logic; reusable UI primitives go in `components/ui/`.

### State Management Strategy

**Use Redux Toolkit for:**
- Global UI state (modals, sidebars, theme preferences beyond system theme)
- Cross-feature state that needs to be accessed from multiple parts of the app
- State that needs to persist across navigation

**Use TanStack Query for:**
- Server data fetching
- Caching and revalidation
- Mutations with optimistic updates
- API state management

Example Redux slice in `src/lib/features/`:
```typescript
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
```

Access with typed hooks from `src/lib/hooks.ts`:
```typescript
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
```

### Routing

- Next.js 16 App Router with React Server Components
- **IMPORTANT**: Route params are now async in Next.js 16. Always await params:
```typescript
// Dynamic routes (e.g., futsal/[id]/page.tsx)
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // ...
}
```

### Path Aliases
- `@/*` maps to `src/*`
- Always use absolute imports: `import { Button } from "@/components/ui/button"`

## Design System

### Color System

The project uses a comprehensive custom color system defined in `src/app/globals.css`. Always use Tailwind utility classes, not CSS variables directly.

**Primary Colors:**
- `bg-primary` / `text-primary` - Primary green (#00985F light, #61DF6E dark)
- `bg-secondary` / `text-secondary` - Secondary gray tones
- `bg-destructive` / `text-destructive` - Red for errors/destructive actions

**Semantic Colors:**
- `bg-background` / `text-foreground` - Main background and text
- `bg-card` / `text-card-foreground` - Card backgrounds
- `bg-muted` / `text-muted-foreground` - Muted backgrounds and secondary text
- `border` - Border color

**Never use:**
- Hardcoded colors like `bg-[#00985F]`
- CSS variables directly like `bg-[var(--primary)]`
- Random Tailwind colors like `bg-blue-500` unless justified

### Typography

**Fonts:**
- Primary: Manrope (body text)
- Display: Spline Sans (available via `font-spline-sans`)
- Alternative: Karla (available via `font-karla`)

**Type Scale (responsive):**
- `h1`: 48px → 60px (large screens)
- `h2`: 30px → 36px (large screens)  
- `h3`: 24px → 30px (large screens)
- `h4`: 20px → 24px (large screens)
- Body: `text-base` (16px), `text-lg` (18px), `text-sm` (14px), `text-xs` (12px)

### Spacing

Use Tailwind's default spacing scale (4px base):
- `gap-4`, `p-6`, `mt-8` for 16px, 24px, 32px respectively
- Common values: 4, 6, 8, 12, 16, 24, 32
- Avoid arbitrary values like `mt-[17px]`

### Border Radius

Configured via CSS variables:
- `rounded` uses `--radius` (0.5rem / 8px)
- `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl` are defined

## Component Patterns

### shadcn/ui Components

Use shadcn/ui components from `@/components/ui/`. Common components:
- **Forms**: `Button`, `Input`, `Select`, `Checkbox`, `Form`, `Label`
- **Layout**: `Card`, `Separator`, `ScrollArea`, `Sheet`, `Tabs`
- **Feedback**: `Alert`, `Badge`, `Progress`, `Skeleton`, `Toaster`
- **Overlays**: `Dialog`, `Popover`, `Tooltip`, `DropdownMenu`, `AlertDialog`

### Using Forms

Forms use React Hook Form + Zod:
```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

const form = useForm({
  resolver: zodResolver(schema),
});
```

### Theme Support

The app supports light/dark/system themes via next-themes:
```typescript
import { useTheme } from "next-themes";

const { theme, setTheme } = useTheme();
```

Always use semantic color tokens (`bg-background`, `text-foreground`) for automatic theme support.

### Toast Notifications

Use Sonner for user feedback:
```typescript
import { toast } from "sonner";

toast.success("Booking confirmed!");
toast.error("Failed to save changes");
toast("Processing...", {
  action: { label: "Undo", onClick: () => {} }
});
```

### Images

Use Next.js Image component for optimization:
```typescript
import Image from "next/image";

<Image 
  src="/image.jpg" 
  alt="Description" 
  width={500} 
  height={300}
/>
```

Configured remote patterns in `next.config.ts`:
- `images.unsplash.com`
- `api.dicebear.com` (with SVG support)

## Code Quality Guidelines

### TypeScript
- Strict mode enabled
- Always type component props
- Use `interface` for component props, `type` for unions/intersections

### Styling
- Use Tailwind utility classes exclusively
- Use the `cn()` helper from `@/lib/utils` to merge classes conditionally
- Follow responsive-first approach: `className="text-sm md:text-base lg:text-lg"`

### Accessibility
- Include ARIA labels on icon-only buttons: `<Button aria-label="Close">...</Button>`
- Use semantic HTML elements
- Ensure focus indicators are visible (configured globally with `:focus-visible`)
- Respect `prefers-reduced-motion` (configured globally)

### Component Structure
- Use "use client" directive only when necessary (client-side interactivity, hooks, context)
- Prefer Server Components for static content
- Keep components focused and single-responsibility
- Export components from feature `index.ts` files

## Important Notes

### Next.js 16 Breaking Changes
- **Async params**: All route params must be awaited
- **React 19**: Uses latest React with improved SSR and async components

### Known Patterns
- Navigation and Footer are in `features/public/home/components/`
- Redux store configured in `lib/store.ts` with example slice
- Global providers wrapped in root `app/layout.tsx`
- Theme provider is custom implementation at `features/public/home/components/theme-provider.tsx`

### Project-Specific Details
- Brand name: "Eghara" (not "FutsalBook")
- Target market: Nepal futsal booking platform
- Dual dashboard system: Player and Owner roles
- Uses mock data for development (see feature modules for data files)

## Documentation

Comprehensive design system documentation available in:
- `docs/QUICK_REFERENCE.md` - Quick reference for colors, typography, patterns
- `docs/REDESIGN_IMPLEMENTATION_GUIDE.md` - Implementation guide and completed work
- `docs/UI_UX_AUDIT_AND_REDESIGN.md` - Full UI/UX audit and design decisions

Refer to these docs for detailed examples and best practices.
