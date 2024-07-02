'use client';

import React, { useEffect } from 'react';

export interface PageProps {
  params: { companyId: string };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <p>{`Info about company (${params.companyId})`} </p>
    </>
  );
}
