import React from 'react';
import './globals.css';
import ActiveLable from './components/active-lable';
import NotActiveLable from './components/not-active-lable';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <ActiveLable>Active</ActiveLable>
      <NotActiveLable>Not active</NotActiveLable>
    </html>
  );
}
