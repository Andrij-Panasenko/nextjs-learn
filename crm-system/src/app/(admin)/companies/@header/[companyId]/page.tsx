import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {
  params: { companyId: string };
}

export default function Page({ params }: PageProps) {
  return <Header>{`Company (${params.companyId})`}</Header>;
}
