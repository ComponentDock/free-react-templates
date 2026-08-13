import { useEffect, useState } from 'react'
import { Play } from 'lucide-react'
import { about } from '../data'

/** Split welcome section: video image with a green circular play button on
 *  the left; eyebrow, headline, paragraphs, and an animated experience
 *  counter on the right. */
export function About() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const target = about.counterValue
    let current = 0
    const id = window.setInterval(() => {
      current += 1
      setCount(Math.min(current, target))
      if (current >= target) {
        window.clearInterval(id)
      }
    }, 40)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section id="about" aria-label="About" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src={about.image}
            alt="Our law office"
            className="w-full border-t-4 border-brand object-cover"
          />
          <button
            type="button"
            aria-label={about.videoLabel}
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-colors hover:bg-brand/90"
          >
            <Play className="ml-1 h-8 w-8" fill="currentColor" />
          </button>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">{about.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">{about.headline}</h2>
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mt-5 text-base leading-relaxed text-slate-body"
            >
              {paragraph}
            </p>
          ))}
          <div className="mt-8 flex items-baseline gap-4">
            <span className="text-5xl font-bold text-brand">{count}</span>
            <span className="text-lg font-medium text-gray-900">{about.counterLabel}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
