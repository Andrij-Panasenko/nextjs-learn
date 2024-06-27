import React from 'react';
import './globals.css';
import StstusLabel from './components/status-lable';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
