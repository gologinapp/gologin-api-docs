'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import apiSpec from './openapi.json';

// Dynamically import the ApiReference component to avoid SSR issues with Redoc
const ApiReference = dynamic(() => import('@/components/ApiReference'), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen items-center justify-center">
      <div className="text-lg">Loading API documentation...</div>
    </div>
  ),
});

export default function ApiReferencePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="api-reference-container">
      <ApiReference spec={apiSpec} />
    </div>
  );
} 