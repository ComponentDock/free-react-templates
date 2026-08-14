import { ArrowRight } from 'lucide-react'
import { features } from '../data'

/* Two-column feature blocks ("Consulting Agency It's Best"): Web & Mobile
 * Specialties and Intuitive Thinkers, each with a Learn More link. */
export function Features() {
  return (
    <section id="features" data-testid="features" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-4">
        <h2 className="text-4xl font-black leading-tight text-brand md:text-[40px]">
          {features.title}
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {features.blocks.map((block) => (
            <div key={block.title}>
              <h3 className="text-2xl font-bold text-ink">{block.title}</h3>
              <p className="mt-4 leading-relaxed text-smoke">{block.text}</p>
              <a
                href={features.learnMoreHref}
                className="mt-4 inline-flex items-center gap-2 font-medium text-brand transition-colors hover:underline"
              >
                {features.learnMoreLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
