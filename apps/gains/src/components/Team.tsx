import { TRAINERS } from '../data'
import { FacebookIcon, InstagramIcon, SkypeIcon, TwitterIcon } from './social-icons'
import { SectionHeading } from './SectionHeading'

const SOCIAL_ICONS = [FacebookIcon, TwitterIcon, InstagramIcon, SkypeIcon]

/**
 * Team — "Meet with trainers" section: three trainer cards, each with a
 * photo, a hover social-icon overlay, a name, and a role.
 */
export function Team() {
  return (
    <section id="trainers" className="py-24 lg:py-35">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading kicker="our team" title="Meet with trainers" />
        <div className="grid gap-8 md:grid-cols-3">
          {TRAINERS.map((trainer) => (
            <article key={trainer.name} className="group">
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={trainer.image}
                  alt={`${trainer.name}, ${trainer.role}`}
                  className="h-96 w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-gradient-to-t from-night/90 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {SOCIAL_ICONS.map((Icon, index) => (
                    <a
                      key={index}
                      href="#trainers"
                      aria-label={`${trainer.name} on social media`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-2"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-5 text-center">
                <h3 className="text-2xl font-semibold uppercase text-ink">{trainer.name}</h3>
                <p className="text-sm uppercase tracking-wide text-brand">{trainer.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
