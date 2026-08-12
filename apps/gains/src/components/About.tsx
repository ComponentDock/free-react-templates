import { Award, Dumbbell, HeartHandshake, Smile } from 'lucide-react'
import { ABOUT_IMAGE, LEFT_FEATURES, RIGHT_FEATURES } from '../data'
import { SectionHeading } from './SectionHeading'

const LEFT_ICONS = [Award, Dumbbell]
const RIGHT_ICONS = [HeartHandshake, Smile]

/**
 * About — "Why you Join with us" section: section title on top, then a
 * three-column row (feature list / center photo with play overlay / feature
 * list) on the brand gradient flank.
 */
export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-35">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          kicker="Awesome feature"
          title="Why you Join with us"
          copy="Everything you need to train hard and recover harder — one membership, zero guesswork."
        />
        <div className="grid items-center gap-10 lg:grid-cols-3">
          <div className="space-y-10">
            {LEFT_FEATURES.map((feature, index) => {
              const Icon = LEFT_ICONS[index]!
              return (
                <div key={feature.title} className="flex items-start gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="text-xl font-semibold uppercase text-ink">{feature.title}</h4>
                    <p className="mt-1 text-sm">{feature.copy}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="relative">
            <img
              src={ABOUT_IMAGE}
              alt="A Gains member training with a coach"
              className="h-full w-full rounded-md object-cover"
            />
            <a
              href="#courses"
              aria-label="Play the Gains intro video"
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-white shadow-lg transition-transform hover:scale-105"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-1 h-8 w-8"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
          </div>

          <div className="space-y-10">
            {RIGHT_FEATURES.map((feature, index) => {
              const Icon = RIGHT_ICONS[index]!
              return (
                <div key={feature.title} className="flex items-start gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="text-xl font-semibold uppercase text-ink">{feature.title}</h4>
                    <p className="mt-1 text-sm">{feature.copy}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
