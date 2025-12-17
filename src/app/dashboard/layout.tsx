import { redirect } from 'next/navigation';

// This would be your auth check in a real app
async function checkAuth() {
  // Simulate auth check
  // In production, check for valid session/token
  const isAuthenticated = true; // Replace with actual auth logic
  return isAuthenticated;
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = await checkAuth();

  if (!isAuthenticated) {
    redirect('/login');
  }

  return <div className="min-h-screen bg-background">{children}</div>;
}
