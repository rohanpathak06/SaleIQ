import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'SaleIQ — receipts, not guesses', description: 'Grounded business intelligence for modern commerce.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en" suppressHydrationWarning><body>{children}</body></html>; }
