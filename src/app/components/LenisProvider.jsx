'use client';

import { ReactLenis } from 'lenis/react';

export default function LenisProvider({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        smoothWheel: true,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}