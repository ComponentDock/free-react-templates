import { Clock, Utensils, Car, Sparkles } from 'lucide-react'

const FEATURES = [
  {
    icon: Clock,
    title: '24/7 Front Desk',
    description: 'Our front desk staff is available around the clock to assist with any requests.',
  },
  {
    icon: Utensils,
    title: 'Restaurant & Bar',
    description: 'Enjoy fine dining and handcrafted cocktails at our on-site restaurant.',
  },
  {
    icon: Car,
    title: 'Transfer Services',
    description: 'Complimentary airport transfers and local transportation available.',
  },
  {
    icon: Sparkles,
    title: 'Spa & Suites',
    description: 'Unwind with luxurious spa treatments in our premium suites.',
  },
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/opulux-about/600/500"
              alt="Hotel lobby"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold">
              Welcome to Opulux Hotel
            </p>
            <h2 className="mb-6 font-heading text-4xl font-bold">Welcome To Our Hotel</h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              Nestled in a prime location, Opulux Hotel offers an unparalleled blend of elegance and
              comfort. From the moment you step through our doors, you&apos;ll be greeted by
              exceptional service and timeless luxury.
            </p>
            <p className="mb-8 leading-relaxed text-gray-600">
              Every detail has been thoughtfully curated to ensure your stay is nothing short of
              extraordinary. Whether you&apos;re here for business or leisure, our dedicated team is
              committed to making your experience truly memorable.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
