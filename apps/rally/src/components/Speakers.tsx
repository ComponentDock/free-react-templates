import { speakers } from '../data'
import { FacebookIcon, LinkedInIcon, TwitterIcon } from './social-icons'

const speakerSocials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'LinkedIn', Icon: LinkedInIcon },
] as const

export function Speakers() {
  return (
    <section id="speakers" className="bg-team py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-heading md:text-4xl">
            Meet Head Speakers
          </h2>
          <p className="mt-4 text-muted">
            If you are looking at blank cassettes on the web, you may be very confused at the
            difference in price. You may see some for as low as $.17 each.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker) => (
            <article
              key={speaker.name}
              className="group relative overflow-hidden rounded-md bg-white text-center shadow-sm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={speaker.image}
                  alt={`${speaker.name}, ${speaker.role}`}
                  className="aspect-[400/460] w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-4 bg-white py-3 transition-transform duration-300 group-hover:translate-y-0">
                  {speakerSocials.map(({ label, Icon }) => (
                    <a
                      key={label}
                      href={`#${label.toLowerCase()}`}
                      aria-label={label}
                      className="text-muted transition-colors hover:text-accent"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="px-4 py-6">
                <h3 className="font-display text-lg font-bold text-heading transition-colors group-hover:text-accent">
                  {speaker.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{speaker.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
