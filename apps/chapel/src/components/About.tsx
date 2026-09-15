import { ButtonLink } from '@free-react-templates/ui'
import { about } from '../data'

export function About() {
  return (
    <section id="about" className="bg-section py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-ink lg:text-4xl">{about.heading}</h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="mt-6 text-body">
              {p}
            </p>
          ))}
          <ButtonLink
            href="#"
            className="mt-8 inline-block rounded-[2px] bg-brand px-8 py-3.5 text-xs font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {about.ctaLabel}
          </ButtonLink>
        </div>
        <div>
          <img src={about.image} alt={about.imageAlt} className="w-full rounded object-cover" />
        </div>
      </div>
    </section>
  )
}
