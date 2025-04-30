'use client';

import { useEffect, useState } from 'react';
import { RedocStandalone } from 'redoc';

interface ApiReferenceProps {
  specUrl?: string;
  spec?: object;
  options?: {
    hideDownloadButton?: boolean;
    disableSearch?: boolean;
    expandResponses?: string;
    hideSingleRequestSampleTab?: boolean;
    noAutoAuth?: boolean;
    pathInMiddlePanel?: boolean;
    requiredPropsFirst?: boolean;
    scrollYOffset?: number;
    showExtensions?: string[];
    sortPropsAlphabetically?: boolean;
    theme?: object;
  };
}

export default function ApiReference({
  specUrl,
  spec,
  options = {
    hideDownloadButton: false,
    scrollYOffset: 64,
    theme: {
      typography: {
        fontSize: '16px',
        headings: {
          fontFamily: 'var(--font-display)',
        },
      },
      colors: {
        primary: {
          main: '#3b82f6'
        }
      },
      sidebar: {
        width: '300px'
      },
    },
  },
}: ApiReferenceProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-screen flex items-center justify-center">Loading API Reference...</div>;
  }

  return (
    <div className="redoc-container">
      <RedocStandalone
        specUrl={specUrl}
        spec={spec}
        options={options}
      />

      {/* Handle Redoc styling with Next.js */}
      <style jsx global>{`
        .redoc-container {
          width: 100%;
          height: 100%;
        }
        .redoc-container > div {
          min-height: calc(100vh - 64px);
        }
      `}</style>
    </div>
  );
} 