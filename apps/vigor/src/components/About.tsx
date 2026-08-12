import { ButtonLink } from '@free-react-templates/ui'
import { ABOUT_PARAGRAPHS } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * About — split section pulled up over the ad strip: "Why choose Vigor?"
 * heading with a green gradient kicker, two paragraphs, a gradient "Get a
 * membership" button and an outlined "Find out more" button on the left,
 * and a workout photo on the right.
 */
export function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-4 pt-25 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading kicker="Vigor" title="Why choose Vigor?" className="mb-8 text-left" />
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-sm">
              {paragraph}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink
              href="#pricing"
              className="min-w-[200px] rounded-[10px] bg-gradient-to-r from-brand-light to-brand px-8 py-3 text-sm font-bold uppercase tracking-wide text-ink hover:text-white"
            >
              Get a membership
            </ButtonLink>
            <ButtonLink
              href="#services"
              variant="outline"
              className="min-w-[200px] rounded-[10px] border-[3px] border-brand px-8 py-3 text-sm font-bold uppercase tracking-wide text-brand hover:bg-brand hover:text-white"
            >
              Find out more
            </ButtonLink>
          </div>
        </div>
        <div className="lg:col-span-5">
          <img
            src="https://picsum.photos/seed/vigor-about/600/700"
            alt="A Vigor coach helping a member with their form"
            className="w-full rounded-[10px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}
