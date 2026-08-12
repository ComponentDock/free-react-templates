import { SPEAKERS } from '../data'
import { BrandIcon } from './BrandIcon'

const SOCIALS = [
  { network: 'facebook', label: 'Facebook' },
  { network: 'twitter', label: 'Twitter' },
  { network: 'instagram', label: 'Instagram' },
  { network: 'linkedin', label: 'LinkedIn' },
] as const

/* Speakers recreated from the source's our-speaker area: a photo band under
   the pink→indigo gradient overlay with six photo cards (name + pink role
   bottom-left, social icons top-right) and a "View All Speaker" pill. */

export function Speakers() {
  return (
    <section id="speakers" className="relative overflow-hidden py-[100px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/summit-stage/1920/1080)' }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-overlay" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-white">Our Speakings</p>
          <h4 className="mt-3 text-3xl font-bold uppercase tracking-wide text-white md:text-[38px]">
            Who&rsquo;s Speaking
          </h4>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SPEAKERS.map((speaker, i) => (
            <article
              key={speaker.name}
              className="group relative overflow-hidden rounded-[10px] bg-navy-deep"
            >
              <img
                src={`https://picsum.photos/seed/summit-speaker${i + 1}/400/400`}
                alt=""
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h5 className="text-xl font-medium tracking-wide text-white">{speaker.name}</h5>
                <p className="mt-1 text-sm font-medium tracking-wider text-brand">{speaker.role}</p>
              </div>
              <div className="absolute right-4 top-4 flex gap-2">
                {SOCIALS.map((social) => (
                  <a
                    key={social.network}
                    href="#speakers"
                    aria-label={`${speaker.name} on ${social.label}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white/80 transition-colors hover:bg-brand hover:text-white"
                  >
                    <BrandIcon name={social.network} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#speakers"
            className="inline-flex h-[46px] items-center rounded-full bg-white px-[25px] text-sm font-medium uppercase tracking-wider text-navy-deep transition-colors hover:bg-white/85"
          >
            View All Speaker
          </a>
        </div>
      </div>
    </section>
  )
}
