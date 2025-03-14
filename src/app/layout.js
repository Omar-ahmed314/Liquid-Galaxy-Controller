import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Liquid Galaxy Controller',
  description: 'Liquid Galaxy Controller controls the lg-rig engine',
};

export function Toolbar() {
  return (
    <div className="toolbar container">
      <div className="logo">
        <img src="lg-logo.png" />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toolbar />
        {children}
      </body>
    </html>
  );
}
