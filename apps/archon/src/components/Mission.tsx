import { Heart, Share2, ThumbsUp } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const counters = [
  { value: '30,210', label: 'Share', Icon: Share2 },
  { value: '9,102', label: 'Likes', Icon: ThumbsUp },
  { value: '40,244', label: 'Love', Icon: Heart },
] as const

export function Mission() {
  return (
    <section id="mission" className="bg-paper py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-mist dark:text-gray-400">
              Our Mission
            </span>
            <h2 className="mt-2 text-2xl font-bold text-ink dark:text-white">
              Structures that speak to the sky
            </h2>
            <p className="mt-4 leading-relaxed text-mist dark:text-gray-300">
              From first sketch to final stone, we shape spaces with purpose and light.
            </p>
            <p className="mt-3 leading-relaxed text-mist dark:text-gray-300">
              Every project begins with a conversation — about place, people, and the life a
              building will hold.
            </p>
            <div className="mt-6">
              <ButtonLink
                href="#services"
                className="rounded-full bg-brand px-8 py-3 font-semibold text-white hover:bg-brand-dark"
              >
                Our Mission
              </ButtonLink>
            </div>
          </div>
          <img
            src="https://picsum.photos/seed/archon-mission-1/600/500"
            alt="White curved architecture"
            className="h-72 w-full object-cover md:h-80"
          />
        </div>

        <div className="mt-16 grid items-center gap-8 md:grid-cols-2">
          <img
            src="https://picsum.photos/seed/archon-mission-2/600/500"
            alt="Modern building facade"
            className="h-72 w-full object-cover md:h-80"
          />
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-mist dark:text-gray-400">
              Our Mission
            </span>
            <h2 className="mt-2 text-2xl font-bold text-ink dark:text-white">
              A practice built on craft and curiosity
            </h2>
            <p className="mt-4 leading-relaxed text-mist dark:text-gray-300">
              From city towers to quiet studios, we bring clarity to complex briefs.
            </p>
            <p className="mt-3 leading-relaxed text-mist dark:text-gray-300">
              We believe great buildings are lived, not just looked at — and we design accordingly.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {counters.map(({ value, label, Icon }) => (
                <div key={label}>
                  <div className="flex items-center gap-2">
                    <Icon aria-hidden="true" className="h-5 w-5 text-brand" />
                    <span className="text-2xl font-bold text-ink dark:text-white">{value}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-mist dark:text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
