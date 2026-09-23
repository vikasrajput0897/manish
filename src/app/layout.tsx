import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Prof SN Singh Home Page',
  description: 'Academic Portfolio managed by TinaCMS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          <div className="layout-main">
            <Sidebar />
            <main className="content">
              {children}
            </main>
          </div>
          <div style={{ textAlign: 'center', padding: '15px', borderTop: '1px solid #ccc', fontSize: '12px' }}>
            &copy; 2026 | Last Updated September 2026
          </div>
        </div>
      </body>
    </html>
  );
}
