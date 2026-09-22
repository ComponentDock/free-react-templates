import { Check } from 'lucide-react'

const CHECK_ITEMS = [
  'Experience a new way of travel',
  'Expert local guides for every tour',
  'Best price guarantee on all packages',
  '24/7 customer support worldwide',
]

export function AboutCompany() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image with badge */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/goquest-about/600/500"
              alt="Travel experience"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand/80 text-accent-yellow rounded-lg px-6 py-4 text-center shadow-lg">
              <span className="font-heading text-3xl font-bold block">Since</span>
              <span className="font-heading text-4xl font-bold">1992</span>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="font-heading text-accent-warm text-xl font-semibold uppercase tracking-wider mb-2">
              About Us
            </h2>
            <h3 className="font-heading text-heading text-3xl font-bold mb-4">
              We are GoQuest & we are here to give you an unforgettable tour
            </h3>
            <p className="text-body leading-relaxed mb-6">
              GoQuest is a world-leading online tour booking platform. We provide exceptional travel
              experiences with expert local guides, ensuring every journey is memorable and
              hassle-free. Our team is dedicated to crafting perfect itineraries that cater to every
              traveler&apos;s dream.
            </p>
            <ul className="space-y-3 mb-8">
              {CHECK_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-brand rounded-full flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </span>
                  <span className="text-heading font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#about-more"
              className="inline-block border-2 border-brand text-brand px-8 py-3 rounded font-heading font-semibold hover:bg-brand hover:text-white transition-colors"
            >
              About us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
