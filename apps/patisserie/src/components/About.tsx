import { about } from '../data'
import { SectionTitle } from './SectionTitle'

/**
 * Dark About section: centered heading with gold underline bar, a caption
 * column (gold h2 + two paragraphs) and a round cake photo on the right.
 */
export function About() {
  return (
    <section id="about" className="bg-ink pt-[100px] pb-[120px]">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="mb-[70px] flex justify-center">
          <SectionTitle heading={about.heading} />
        </div>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <div className="lg:flex-1 lg:pl-[48px]">
            <h2 className="font-display text-[24px] text-brand">{about.captionTitle}</h2>
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mt-[20px] text-[16px] leading-[1.6] text-heading"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="lg:flex-1">
            <img
              src={about.image}
              alt={about.imageAlt}
              loading="lazy"
              className="aspect-square w-full max-w-[520px] rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
