import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const benefits = [
  'Personal training sessions',
  'Access to all group classes',
  'Full gym facility access',
  'Nutrition consultation',
  'Progress tracking tools',
  'Community support',
] as const

export function Cta() {
  return (
    <section className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Join Our Gym
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-[0.1em] text-heading dark:text-white sm:text-4xl">
            Start Your Fitness Journey Today
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-body dark:text-gray-400">
            At Prowess, we provide everything you need to achieve your fitness goals. Our
            comprehensive membership gives you full access to our facilities, expert trainers, and
            supportive community.
          </p>
          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 text-sm text-body dark:text-gray-400"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10">
                  <Check className="h-3 w-3 text-brand" aria-hidden="true" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ButtonLink
              href="#pricing"
              className="inline-flex rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-brand"
            >
              View Plans
            </ButtonLink>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://picsum.photos/seed/prowess-cta/700/700"
            alt="Group fitness class in action"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
