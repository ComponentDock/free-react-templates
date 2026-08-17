import { SPEAKERS } from '../data'
import { SectionTitle } from './SectionTitle'
import { TwitterIcon, FacebookIcon, InstagramIcon } from './BrandIcons'

const SOCIALS = [TwitterIcon, FacebookIcon, InstagramIcon]

/* Speakers — responsive grid of speaker cards with photos, yellow names
   (pink on hover), roles and small social icons. */
export function Speakers() {
  return (
    <section id="speakers" aria-label="Speakers" className="scroll-mt-20 bg-white py-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle heading="Speakers" />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {SPEAKERS.map((speaker) => (
            <article key={speaker.name} className="group text-center">
              <div className="mb-6 overflow-hidden">
                <img
                  src={speaker.avatar}
                  alt={`Portrait of ${speaker.name}`}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-semibold text-brand transition-colors group-hover:text-blush">
                {speaker.name}
              </h3>
              <p className="mt-1 text-sm uppercase tracking-wide">{speaker.role}</p>
              <p className="mx-auto mt-2 max-w-[240px] text-sm text-mist">{speaker.bio}</p>
              <div className="mt-4 flex justify-center gap-5">
                {SOCIALS.map((Icon, index) => (
                  <a
                    key={index}
                    href="#speakers"
                    aria-label={`${speaker.name} social link ${index + 1}`}
                    className="text-mist transition-colors hover:text-brand"
                  >
                    <Icon />
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
