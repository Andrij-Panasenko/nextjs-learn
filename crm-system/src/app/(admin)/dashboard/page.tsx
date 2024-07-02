import React from 'react';
import Sidebar from '@/app/components/sidebar';
import Header from '@/app/components/header';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard</Header>
      <Sidebar />
    </>
  );
}
