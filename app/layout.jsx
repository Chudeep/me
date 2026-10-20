import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from 'next/font/google';
import SiteChrome from './components/site-chrome';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Chudeep Shankar — Field Notes',
    template: '%s — Chudeep Shankar',
  },
  description:
    'Lead software engineer at Yubi in Chennai, working on YubiOS, distributed systems, and AI experiments. A personal notebook on work, side quests, and interesting things.',
};

export const viewport = {
  themeColor: '#f4efe4',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable}`}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
