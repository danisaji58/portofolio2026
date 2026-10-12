'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const ProceduralCanvas = dynamic(
  () => import('./ProceduralCanvas'),
  {
    ssr: false,
    loading: () => (
      <div className="relative w-full h-full min-h-[350px] sm:min-h-[420px] lg:min-h-[500px] flex items-center justify-center">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-cyan-500/20 flex items-center justify-center animate-pulse">
          <div className="w-24 h-24 rounded-full bg-cyan-500/10 blur-xl" />
          <span className="text-xs font-mono text-cyan-400/60 uppercase tracking-widest">
            Loading 3D Space...
          </span>
        </div>
      </div>
    ),
  }
)

export default function HeroScene({ className }: { className?: string }) {
  return <ProceduralCanvas className={className} />
}
