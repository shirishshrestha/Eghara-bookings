# Eghara Bookings

A modern sports booking and management platform built with Next.js 16 and TypeScript.

## Tech Stack

### Core Framework

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework

### State Management

- **Redux Toolkit (RTK)** - Global state management
- **React Query (TanStack Query)** - Server state management and data fetching

### Form Management

- **React Hook Form** - Performant form handling
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### UI Components & Styling

- **shadcn/ui** - Reusable component library
- **next-themes** - Dark/light theme support
- **Framer Motion** - Animation library
- **Recharts** - Data visualization and charts

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles with custom theme
├── components/         # Reusable components
│   └── ui/            # shadcn/ui components
├── lib/               # Utility functions and configurations
│   ├── providers.tsx  # App providers (Redux, Query, Theme)
│   ├── store.ts       # Redux store configuration
│   ├── hooks.ts       # Redux typed hooks
│   └── utils.ts       # Helper functions
└── ...
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Theme Configuration

The project uses a comprehensive sports-themed color system with support for dark and light modes. Colors are defined in `src/app/globals.css` with custom CSS variables:

- Primary: Green theme color (#00985F)
- Success: Green for wins and positive actions
- Warning/Destructive: Red for losses and alerts
- Info: Light blue for informational content
- Charts: 5 colors for data visualization
- Player ratings: Blue, green, orange, red
- Event icons: Yellow, red, green, grey

### Using Theme

```tsx
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle Theme
    </button>
  );
}
```

## Redux Setup

Create slices in `src/lib/features/`:

```typescript
import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  name: "example",
  initialState: {},
  reducers: {},
});

export default exampleSlice.reducer;
```

Add to store in `src/lib/store.ts`.

## React Query Setup

Use React Query for server state:

```typescript
import { useQuery } from "@tanstack/react-query";

function MyComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ["myData"],
    queryFn: () => fetch("/api/data").then((res) => res.json()),
  });
}
```

## Form Handling

Example with React Hook Form + Zod:

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});

function MyForm() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });
}
```

## shadcn/ui Components

Add components as needed:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
```

Components will be added to `src/components/ui/`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## License

MIT
