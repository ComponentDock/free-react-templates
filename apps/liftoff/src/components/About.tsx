import { ButtonLink } from '@free-react-templates/ui'
import { about } from '../data'

/** About section (reference `#about-section`): a #f6f6f6 band with the
 *  centered title, a rounded shadowed photo on the left, and a black
 *  heading, paragraph and teal pill Learn More button on the right. */
export function About() {
  return (
    <section id="about-section" aria-label="About" className="bg-light py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-heading text-[30px] font-black text-ink lg:text-[40px]">
          {about.heading}
        </h2>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <img
            src={about.image}
            alt=""
            aria-hidden="true"
            className="h-auto w-full rounded shadow"
            loading="lazy"
          />
          <div className="lg:pl-10">
            <h3 className="font-heading text-[30px] font-black text-ink lg:text-[40px]">
              {about.title}
            </h3>
            <p className="mt-5 mb-8 text-muted">{about.paragraph}</p>
            <ButtonLink
              href="#contact-section"
              className="rounded-full border-2 border-brand bg-brand px-[30px] py-3 text-base font-medium text-white shadow-[0_4px_20px_-5px_rgba(0,210,181,0.4)] transition-colors hover:bg-transparent hover:text-ink"
            >
              {about.cta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
