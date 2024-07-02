import React from 'react';
import Sidebar from '@/app/components/sidebar';
import MagicButton from '@/app/components/magic-button';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Sidebar />
      <MagicButton/>
    </>
  );
}
