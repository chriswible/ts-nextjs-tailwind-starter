import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Example Page',
  description: 'An example page so I do not forget again',
};

export default function ExampleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
