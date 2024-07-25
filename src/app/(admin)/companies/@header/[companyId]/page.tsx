import React from 'react';
import Header from '@/app/components/header';
import { Company, getCompany } from '@/app/lib/api';
import getQueryClient from '@/app/lib/utils/getQueryClient';

export interface PageProps {
  params: { companyId: string };
}

export default async function Page({ params }: PageProps) {

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', params.companyId],
    queryFn: () => getCompany(params.companyId, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', params.companyId]) as Company;


  return <Header>{`Company (${params.companyId})`}</Header>;
}
