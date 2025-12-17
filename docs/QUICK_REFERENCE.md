# UI/UX Redesign - Quick Reference

## 🎨 New Color System

### Using Colors in Components

```tsx
// Primary Actions
<Button className="bg-primary text-primary-foreground">Book Now</Button>

// Secondary Actions
<Button variant="secondary">Learn More</Button>

// Destructive Actions
<Button variant="destructive">Delete</Button>

// Ghost/Subtle
<Button variant="ghost">Cancel</Button>

// Borders & Dividers
<div className="border border-border">
<hr className="border-t border-border" />

// Backgrounds
<div className="bg-background">        // Main background
<div className="bg-card">              // Card background
<div className="bg-muted">             // Muted background

// Text
<p className="text-foreground">        // Primary text
<p className="text-muted-foreground">  // Secondary/muted text
```

---

## 📝 Typography Scale

```tsx
<h1>Hero Heading</h1>          // 48-60px
<h2>Page Title</h2>            // 30-36px
<h3>Section Title</h3>         // 24-30px
<h4>Subsection</h4>            // 20-24px
<p className="text-lg">        // 18px
<p className="text-base">      // 16px (default)
<p className="text-sm">        // 14px
<p className="text-xs">        // 12px
```

---

## 🌓 Dark Mode

### Toggle Theme (Already Implemented)

Users can toggle theme in navigation menu (sun/moon icon).

### Making Components Theme-Aware

```tsx
// ✅ Automatic (Recommended)
<div className="bg-background text-foreground">

// ❌ Manual (Not recommended)
<div className="bg-white dark:bg-black text-black dark:text-white">
```

### In Your Code

```tsx
import { useTheme } from 'next-themes';

function MyComponent() {
  const { theme, setTheme } = useTheme();

  return <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle</button>;
}
```

---

## 🔔 Toast Notifications

```tsx
import { toast } from 'sonner';

// Success
toast.success('Booking confirmed!');

// Error
toast.error('Failed to save changes');

// Info
toast.info('Processing your request...');

// With action
toast('Booking cancelled', {
  action: {
    label: 'Undo',
    onClick: () => restoreBooking(),
  },
});

// With description
toast.success('Payment received', {
  description: 'Receipt sent to your email',
});
```

---

## 🎯 Spacing Scale

```tsx
// Padding
<div className="p-4">   // 16px
<div className="p-6">   // 24px
<div className="p-8">   // 32px

// Margin
<div className="mt-4">  // 16px top
<div className="mb-6">  // 24px bottom
<div className="mx-8">  // 32px horizontal

// Gap (Flexbox/Grid)
<div className="flex gap-4">   // 16px between items
<div className="grid gap-6">   // 24px between items
<div className="space-y-8">    // 32px vertical spacing
```

---

## 🎭 Component Variants

### Button

```tsx
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Delete</Button>

<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>
```

### Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content goes here</CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Badge

```tsx
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

---

## 📱 Responsive Breakpoints

```tsx
// Mobile First Approach
<div className="text-sm md:text-base lg:text-lg">

// Breakpoints:
// sm: 640px   (small tablets)
// md: 768px   (tablets)
// lg: 1024px  (laptops)
// xl: 1280px  (desktops)
// 2xl: 1536px (large desktops)

// Hide/Show
<div className="hidden md:block">Desktop only</div>
<div className="block md:hidden">Mobile only</div>
```

---

## ♿ Accessibility Quick Tips

### Focus States

```tsx
// ✅ Automatic on interactive elements
<button>Accessible</button>

// Custom focus
<div className="focus-visible:ring-2 focus-visible:ring-ring">
```

### ARIA Labels

```tsx
// Icons without text
<Button aria-label="Close menu">
  <X className="h-4 w-4" />
</Button>

// Screen reader only text
<span className="sr-only">Loading...</span>
```

### Semantic HTML

```tsx
// ✅ Good
<button onClick={...}>Click me</button>
<nav>...</nav>
<main>...</main>

// ❌ Bad
<div onClick={...}>Click me</div>
<div>Navigation</div>
<div>Main content</div>
```

---

## 🎬 Animations

### Hover Effects

```tsx
<div className="transition-colors hover:bg-muted">
<div className="transition-transform hover:scale-105">
<div className="transition-opacity hover:opacity-80">
```

### Custom Transitions

```tsx
<div className="transition-all duration-300 ease-in-out">
<div className="animate-in fade-in slide-in-from-bottom-4">
```

### Respect Motion Preferences

Already handled globally! Users who prefer reduced motion won't see animations.

---

## 🔗 Navigation

### Link Components

```tsx
import Link from "next/link";

<Link href="/discovery">Discover</Link>
<Link href="/futsal/123">View Details</Link>

// With styling
<Link
  href="/booking/123"
  className="text-primary hover:underline"
>
  Book Now
</Link>
```

### Active Links

```tsx
import { usePathname } from 'next/navigation';

function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={isActive ? 'text-foreground' : 'text-muted-foreground'}>
      {children}
    </Link>
  );
}
```

---

## 🎨 Layout Patterns

### Container

```tsx
<div className="container mx-auto px-4 sm:px-6 lg:px-8">// Content</div>
```

### Two Column

```tsx
<div className="grid gap-8 md:grid-cols-2">
  <div>Column 1</div>
  <div>Column 2</div>
</div>
```

### Three Column

```tsx
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

### Sidebar Layout

```tsx
<div className="flex gap-8">
  <aside className="hidden lg:block w-64">Sidebar</aside>
  <main className="flex-1">Main Content</main>
</div>
```

---

## 🛠️ Common Patterns

### Loading State

```tsx
import { Skeleton } from '@/components/ui/skeleton';

{
  loading ? <Skeleton className="h-8 w-full" /> : <p>{data}</p>;
}
```

### Empty State

```tsx
<div className="flex flex-col items-center justify-center py-12 text-center">
  <Icon className="h-12 w-12 text-muted-foreground" />
  <h3 className="mt-4">No bookings yet</h3>
  <p className="text-sm text-muted-foreground">Start by browsing futsals</p>
  <Button className="mt-4">Browse Futsals</Button>
</div>
```

### Error State

```tsx
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Failed to load bookings. Please try again.</AlertDescription>
</Alert>
```

---

## 🚀 Performance Tips

1. **Use Next.js Image**

   ```tsx
   import Image from 'next/image';
   <Image src="/image.jpg" alt="..." width={500} height={300} />;
   ```

2. **Lazy Load Components**

   ```tsx
   const HeavyComponent = dynamic(() => import('./Heavy'), {
     loading: () => <Skeleton />,
   });
   ```

3. **Optimize Icons**
   ```tsx
   // Only import what you need
   import { User, Settings } from 'lucide-react';
   ```

---

## ❌ Common Mistakes to Avoid

### ❌ DON'T

```tsx
// Hardcoded colors
<div className="bg-[#00985F]">

// CSS variables
<div className="bg-[var(--primary)]">

// Random spacing
<div className="mt-[17px] p-[23px]">

// Non-semantic HTML
<div onClick={handleClick}>Button</div>

// Missing accessibility
<div>
  <X onClick={close} />
</div>
```

### ✅ DO

```tsx
// Use design tokens
<div className="bg-primary">

// Use Tailwind classes
<div className="bg-primary">

// Use spacing scale
<div className="mt-4 p-6">

// Use semantic HTML
<button onClick={handleClick}>Button</button>

// Include accessibility
<button aria-label="Close" onClick={close}>
  <X className="h-4 w-4" />
</button>
```

---

## 📞 Need Help?

- Check `docs/REDESIGN_IMPLEMENTATION_GUIDE.md` for details
- Review `docs/UI_UX_AUDIT_AND_REDESIGN.md` for the full audit
- Look at existing components in `src/components/ui/`
- Ask the team!

---

**Last Updated:** December 6, 2025  
**Quick Reference v1.0**
