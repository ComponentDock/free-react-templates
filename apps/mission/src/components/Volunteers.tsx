import { socialLabels, socials, volunteers } from '../data'
import { BrandIcon } from './BrandIcon'

/** Centered volunteers section: 4 cards with photo, social overlay that
 *  slides up on hover/focus, and a centered name/role caption. */
export function Volunteers() {
  return (
    <section aria-label="Volunteers" className="py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-[60px] text-center">
          <p className="mb-2 text-sm tracking-[2px] text-brand">We Work For</p>
          <h2 className="font-serif text-3xl font-normal text-maroon lg:text-[46px] lg:leading-[56px]">
            We Serve For Peoples
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {volunteers.map((volunteer) => (
            <article key={volunteer.name}>
              <div className="group relative mb-[19px] overflow-hidden">
                <img src={volunteer.image} alt="" className="h-[380px] w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-5 bg-brand/90 py-4 transition-transform duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0">
                  {socials.map((name) => (
                    <a
                      key={name}
                      href="#"
                      aria-label={socialLabels[name]}
                      onClick={(event) => event.preventDefault()}
                      className="text-white transition-opacity hover:opacity-70"
                    >
                      <BrandIcon name={name} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-normal text-maroon">{volunteer.name}</h3>
                <span className="text-sm text-ink">{volunteer.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
