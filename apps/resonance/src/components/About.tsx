import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { about } from '../data'

export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-[1250px] px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <img
              src={about.image}
              alt={about.imageAlt}
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>

          <div className="lg:col-span-5">
            <span className="inline-block rounded-full bg-accent/20 px-5 py-1.5 text-[10px] font-bold tracking-widest text-accent uppercase">
              {about.pill}
            </span>
            <h2 className="mt-4 mb-5 text-3xl font-bold text-brand md:text-4xl">{about.heading}</h2>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-4 leading-relaxed text-body">
                {paragraph}
              </p>
            ))}
            <ul className="mb-8 space-y-3">
              {about.points.map((point) => (
                <li key={point} className="flex items-center gap-3 font-medium text-ink">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent/25">
                    <Check className="h-4 w-4 text-brand" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <ButtonLink href="#contact" size="md" className="h-12 rounded-full px-8 text-base">
              {about.cta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
