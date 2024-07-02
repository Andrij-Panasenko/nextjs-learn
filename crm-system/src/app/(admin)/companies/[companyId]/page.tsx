'use client';

import Header from '@/app/components/header';
import { notFound } from 'next/navigation';
import React, { useEffect } from 'react';

export interface PageProps {
  params: { companyId: string };
}

export default function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.companyId);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.companyId]);

  return (
    <>
      <Header>Companies ({String(params.companyId)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
