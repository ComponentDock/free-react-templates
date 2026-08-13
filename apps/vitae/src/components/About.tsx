import { ButtonLink } from '@free-react-templates/ui'
import { about } from '../data'

/** White "About Me" section: left-aligned title with green underline, a
 *  light-boxed portrait on the right column (reorders to first on mobile)
 *  and two text columns plus a green pill "Contact Me" button. */
export function About() {
  return (
    <section id="about-section" data-testid="about" className="bg-white py-[2.5em] md:py-[7em]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="section-title relative pb-5 text-3xl">{about.heading}</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="order-1 bg-light p-5 lg:order-2">
            <img src={about.image} alt={about.alt} className="h-full w-full object-cover" />
          </div>
          <div className="order-2 lg:order-1">
            {about.paragraphsLeft.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-body">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="order-3">
            {about.paragraphsRight.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-body">
                {paragraph}
              </p>
            ))}
            <ButtonLink
              href={about.href}
              variant="primary"
              className="mt-4 rounded-full px-[30px] py-[10px] text-base"
            >
              {about.cta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
