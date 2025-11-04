import { Inter, Public_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const publicSans = Public_Sans({ 
  subsets: ['latin'],
  variable: '--font-public-sans',
});

export const metadata = {
  title: 'Mr. White - AI Assistant for Dog Care & Beyond',
  description: 'Your trusted companion for all dog-related advice, training tips, and pet care resources.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${publicSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}