import type { Metadata } from 'next';
import { cn } from '@/libs/utils';
import localFont from 'next/font/local';
import { Bebas_Neue, Margarine, Chilanka } from 'next/font/google';
import './globals.css';
import Header from './components/header';
import UserProvider from './context/user';

const gokil = localFont({
  src: './Gokil.woff2',
  display: 'swap',
  variable: '--font-gokil',
});

const margarine = Margarine({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-margarine',
});

const chilanka = Chilanka({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-chilanka',
});

export const metadata: Metadata = {
  title: 'Paw.me',
  description: 'only paws allowed',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={cn(gokil.variable, chilanka.className)}>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
