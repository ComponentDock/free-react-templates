import { ChefHat, Leaf, Users } from 'lucide-react'
import { ABOUT_CAPTIONS } from '../data'

const CAPTION_ICONS = { leaf: Leaf, chef: ChefHat, users: Users } as const

/**
 * About — "About Our Restaurant" block (source `.about-low-area`): kicker +
 * H2 + two paragraphs + icon/caption list + chef photo.
 */
export function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-[195px] lg:pb-[140px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <span className="text-base font-medium text-brand">About Our Restaurant</span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink lg:text-[49px]">
            We provide good food for your family
          </h2>
          <p className="mt-6 leading-relaxed text-navy">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <p className="mt-4 leading-relaxed text-navy">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
          <ul className="mt-8 space-y-4">
            {ABOUT_CAPTIONS.map(({ icon, caption }) => {
              const Icon = CAPTION_ICONS[icon]
              return (
                <li key={caption} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mist text-brand">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="text-navy">{caption}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <img
            src="https://picsum.photos/seed/bistro-chef/600/700"
            alt="Our head chef preparing a dish"
            loading="lazy"
            className="w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  )
}
