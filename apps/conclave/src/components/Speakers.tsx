import { BrandIcon } from './BrandIcon'
import { SPEAKERS } from '../data'

const SOCIALS = [
  { network: 'facebook', label: 'Facebook' },
  { network: 'twitter', label: 'Twitter' },
  { network: 'instagram', label: 'Instagram' },
  { network: 'linkedin', label: 'LinkedIn' },
] as const

/* Speakers section: dark background image with 6 speaker cards in a
   3-col grid. Each card shows a photo, name, role, and purple overlay
   on hover with social icons. */

export function Speakers() {
  return (
    <section id="speakers" className="relative overflow-hidden py-[100px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/conclave-speakers-bg/1920/1080)',
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#111429]/85" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p
            className="text-sm font-medium uppercase tracking-wider text-[#ea0763]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Speakers
          </p>
          <h2
            className="mt-3 text-3xl font-bold uppercase tracking-wide text-white md:text-[38px]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Who&apos;s Speaking
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SPEAKERS.map((speaker, i) => (
            <article
              key={speaker.name}
              className="group relative overflow-hidden rounded-[10px] bg-[#111429]"
            >
              <img
                src={`https://picsum.photos/seed/conclave-speaker${i + 1}/300/300`}
                alt=""
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Purple overlay on hover */}
              <div className="pointer-events-none absolute inset-0 bg-[#3b1d82]/0 transition-colors duration-300 group-hover:bg-[#3b1d82]/80" />
              <div className="absolute bottom-6 left-6 z-10">
                <h3
                  className="text-xl font-medium tracking-wide text-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {speaker.name}
                </h3>
                <p className="mt-1 text-sm font-medium tracking-wider text-[#ea0763]">
                  {speaker.role}
                </p>
              </div>
              <div className="absolute right-4 top-4 z-10 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {SOCIALS.map((social) => (
                  <a
                    key={social.network}
                    href="#speakers"
                    aria-label={`${speaker.name} on ${social.label}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-[#ea0763]"
                  >
                    <BrandIcon name={social.network} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
