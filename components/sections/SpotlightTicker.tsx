'use client'

import React from 'react'

export function SpotlightTicker() {
  const news = [
    'IEEE CIS Summer School 2026 registrations are now open. Secure your seat today!',
    'Hosted by the Department of CSE (AI & ML), Pimpri Chinchwad College of Engineering (PCCoE), Pune.',
    '6 Days of intensive residential training with hands-on clinics on GPU-enabled labs.',
    'Supported by IEEE Computational Intelligence Society, IEEE Computer Society, and IEEE Pune Section.',
    'Earn a prestigious IEEE CIS Certificate of Participation and build industry-grade LLM projects.'
  ]

  return (
    <div className="w-full bg-[#e0f7ff] dark:bg-[#002b3d] border-y border-sky-100 dark:border-sky-950 flex items-stretch h-10 overflow-hidden select-none text-sm font-medium z-40 relative mt-16">
      {/* Spotlight Badge */}
      <div className="bg-[#00b0f0] text-white flex items-center px-4 font-bold relative z-10 shadow-[2px_0_5px_rgba(0,0,0,0.1)] flex-shrink-0">
        SPOTLIGHT
        <div className="absolute top-0 right-[-10px] w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[10px] border-l-[#00b0f0]"></div>
      </div>

      {/* Marquee Content */}
      <div className="flex-grow flex items-center overflow-hidden relative pl-6">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-[#006699] dark:text-[#80d8ff]">
          {/* Repeat news item array twice to ensure smooth seamless loop */}
          {[...news, ...news].map((item, index) => (
            <span key={index} className="flex items-center gap-3">
              <span className="inline-block w-1.5 h-1.5 bg-[#00b0f0] rounded-full"></span>
              {item}
            </span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
