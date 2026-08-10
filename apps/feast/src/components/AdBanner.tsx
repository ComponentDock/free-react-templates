import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'
import { adHeading, adPoints, adSeeds, imgUrl } from '../data'

export function AdBanner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % adSeeds.length)
    }, 4000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="features" className="relative overflow-hidden bg-gray-900">
      <img
        src={imgUrl(adSeeds[index]!, 1200, 600)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[420px] max-w-6xl items-center justify-end px-4 py-12 sm:px-6">
        {/* Pink panel with rotated yellow/lime shapes, recreating the original add-text */}
        <div className="relative w-full max-w-md overflow-hidden bg-primary p-8 md:p-10">
          <span
            aria-hidden="true"
            className="absolute -left-16 -top-12 h-44 w-44 -rotate-[25deg] bg-secondary"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-14 -left-24 h-44 w-44 -rotate-[25deg] bg-accent"
          />
          <div className="relative">
            <h2 className="text-2xl font-bold text-white md:text-3xl">{adHeading}</h2>
            <ul className="mt-6 space-y-4">
              {adPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm font-medium text-white md:text-base"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
