import Header from '@/app/components/header';
import React from 'react';

export interface PageProps {
  params: { companyId: string[] };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <Header>Companies ({String(params.companyId)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
