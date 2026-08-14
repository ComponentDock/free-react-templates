import { ButtonLink } from '@free-react-templates/ui'
import { Check } from 'lucide-react'
import { aboutChecks, aboutHeading, aboutImage, aboutText } from '../data'
import { SectionTitle } from './SectionTitle'

/** About split (`.site-section.cta-big-image`): decorative 300px circle
 *  behind a photo on the left, heading + paragraph + green-check list + CTA
 *  on the right. */
export function AboutSection() {
  return (
    <section id="about-section" className="py-[2.5em] md:py-[5em]">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle>About Unison</SectionTitle>
        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <figure className="relative mx-auto max-w-md">
            <div
              className="absolute -bottom-[90px] left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-gray-100"
              aria-hidden="true"
            />
            <img
              src={aboutImage}
              alt="Unison studio team at work"
              className="relative z-10 w-full rounded-lg object-cover shadow-md"
            />
          </figure>
          <div>
            <h3 className="text-2xl font-black text-heading md:text-3xl">{aboutHeading}</h3>
            <p className="mt-5 leading-relaxed text-gray-500">{aboutText}</p>
            <ul className="mt-6 space-y-3">
              {aboutChecks.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-check" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <ButtonLink
              href="#contact-section"
              className="mt-8 rounded-full px-[30px] py-[10px] text-base"
            >
              Get In Touch
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
