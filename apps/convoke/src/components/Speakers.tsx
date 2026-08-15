import { BrandIcon } from './BrandIcon'
import { speakers } from '../data'

const socials = ['facebook', 'twitter', 'instagram', 'youtube'] as const

export function Speakers() {
  return (
    <section id="speakers" aria-label="Speakers" className="bg-tint px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-medium text-heading md:text-[46px]">Speakers</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker) => (
            <article
              key={speaker.name}
              className="group relative overflow-hidden rounded-lg bg-white"
            >
              <img
                src={speaker.image}
                alt={`${speaker.name} — ${speaker.role}`}
                className="aspect-[6/7] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                data-social-overlay
                className="absolute bottom-0 left-0 flex translate-y-full gap-2 p-4 transition-transform duration-300 group-hover:translate-y-0"
                style={{
                  background:
                    'linear-gradient(to right, #ff9600 0%, #fe531e 26%, #c022a5 57%, #1bb8f9 100%)',
                }}
              >
                {socials.map((social) => (
                  <a
                    key={social}
                    href="#home"
                    aria-label={`${speaker.name} on ${social}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white hover:text-black"
                  >
                    <BrandIcon name={social} className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <div className="bg-white p-5 text-center">
                <h3 className="text-xl font-medium text-heading">{speaker.name}</h3>
                <p className="mt-1 text-sm font-medium text-rainbow-3">{speaker.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
