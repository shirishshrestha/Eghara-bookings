# Eghara Bookings

Eghara Bookings is a modern sports booking and management platform designed for clubs, teams, and venues. Built with Next.js 16, TypeScript, and a feature-based folder structure, it provides a scalable foundation for rapid development and easy maintenance.

## Project Overview

Eghara Bookings enables users to:

- Book sports facilities and venues online
- Manage schedules, teams, and events
- View analytics and charts for bookings and usage
- Enjoy a responsive, themeable UI with dark/light mode

The project is architected for scalability, maintainability, and developer productivity, using the latest React ecosystem tools and best practices.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Redux Toolkit (RTK)**
- **React Query (TanStack Query)**
- **React Hook Form & Zod**
- **shadcn/ui**
- **next-themes**
- **Framer Motion**
- **Recharts**

## Folder Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles with custom theme
├── components/         # Reusable shared components
│   └── ui/            # shadcn/ui components
├── features/           # Feature-based modules (e.g. bookings, users, teams)
│   └── bookings/      # Example feature module
│       ├── components/ # Feature-specific components
│       ├── hooks      # Feature-specific hooks
│       ├── slice      # Redux slice for bookings
│       └── ...        # Other logic (api, utils, etc.)
├── lib/               # Shared utilities and configurations
│   ├── providers.tsx  # App providers (Redux, Query, Theme)
│   ├── store.ts       # Redux store configuration
│   ├── hooks.ts       # Shared Redux typed hooks
│   └── utils.ts       # Helper functions
└── ...
```

## Key Features

- Feature-based folder structure for modularity and scalability
- Global and server state management (Redux Toolkit, React Query)
- Form validation and management (React Hook Form, Zod)
- Custom sports-themed design with dark/light mode
- Animated UI and interactive charts
- Easily extendable with shadcn/ui components

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.
