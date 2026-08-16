import { ButtonLink } from '@free-react-templates/ui'
import { about } from '../data'

export function About() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.1em] text-brand">
            {about.subheading}
          </span>
          <h2 className="text-3xl font-bold text-black sm:text-4xl">{about.heading}</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 leading-relaxed text-gray-600">
              {paragraph}
            </p>
          ))}
          <p className="mt-10">
            <ButtonLink
              href="#contact"
              className="rounded-[30px] border-2 border-transparent bg-brand px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white hover:border-transparent hover:bg-white hover:text-brand hover:shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]"
            >
              {about.ctaLabel}
            </ButtonLink>
          </p>
        </div>
        <img src={about.image} alt={about.imageAlt} className="w-full rounded-lg object-cover" />
      </div>
    </section>
  )
}
