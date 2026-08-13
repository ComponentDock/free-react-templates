import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  HERO_INTERVAL_MS,
  PROJECT_BLURB,
  PROJECT_CAPTION,
  PROJECT_IMAGES,
  PROJECT_LINK,
  PROJECT_TITLE,
  PROJECTS_HEADING,
  PROJECTS_LINK,
} from '../data'
import { MoreLink } from './MoreLink'

/* div.site-section — "Latest Projects": heading + right-aligned "View All
   Projects" link, then .media-29191 — an Owl carousel of project photos
   with dots + prev/next, and a white caption panel overlapping the bottom
   (margin-top -100px, z-index 9): caption, uppercase title, blurb and
   "View This Project" link. */
export function Projects() {
  const [index, setIndex] = useState(0)
  const slideCount = PROJECT_IMAGES.length

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((current) => (current + 1) % slideCount),
      HERO_INTERVAL_MS,
    )
    return () => clearInterval(timer)
  }, [slideCount])

  const goTo = (next: number) => setIndex((next + slideCount) % slideCount)

  const project = PROJECT_IMAGES[index]!

  return (
    <section id="projects" aria-label="Projects" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[20px] leading-snug font-bold text-ink uppercase">
            {PROJECTS_HEADING}
          </h2>
          <MoreLink href="#contact">{PROJECTS_LINK}</MoreLink>
        </div>

        <div className="mt-10">
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.alt}
              className="h-[420px] w-full object-cover md:h-[520px]"
            />
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => goTo(index - 1)}
              className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 p-2 text-ink transition-colors hover:bg-white"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => goTo(index + 1)}
              className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 p-2 text-ink transition-colors hover:bg-white"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
            <div className="absolute right-0 bottom-4 left-0 flex justify-center gap-2">
              {PROJECT_IMAGES.map((item, i) => (
                <button
                  key={item.alt}
                  type="button"
                  aria-label={`Go to project ${i + 1}`}
                  aria-current={i === index ? 'true' : undefined}
                  onClick={() => goTo(i)}
                  className={cn(
                    'h-2.5 w-2.5 cursor-pointer rounded-full transition-colors',
                    i === index ? 'bg-brand' : 'bg-white/70 hover:bg-white',
                  )}
                />
              ))}
            </div>
          </div>

          {/* Overlapping white caption panel. */}
          <div className="relative z-10 mx-auto -mt-20 max-w-2xl bg-white p-8 md:p-12">
            <p className="text-[13px] tracking-wide text-faint uppercase">{PROJECT_CAPTION}</p>
            <h3 className="mt-2 text-[20px] font-bold text-ink uppercase">{PROJECT_TITLE}</h3>
            <p className="mt-3 leading-relaxed text-ink/70">{PROJECT_BLURB}</p>
            <MoreLink href="#contact" className="mt-5">
              {PROJECT_LINK}
            </MoreLink>
          </div>
        </div>
      </div>
    </section>
  )
}
