// app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata = {
  title: "Zac's Portfolio - Creative Developer",
  description: 'Passionate developer creating modern, innovative web solutions with cutting-edge technology.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
