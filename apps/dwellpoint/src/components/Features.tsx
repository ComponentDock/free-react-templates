import { User, Award, Phone, Rocket, Gem, MessageCircle } from 'lucide-react'

interface Feature {
  icon: typeof User
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: User,
    title: 'Expert Agents',
    description: 'Our seasoned agents know every neighborhood, ensuring you get the best deal.',
  },
  {
    icon: Award,
    title: 'Professional Service',
    description: 'Award-winning service backed by years of real estate industry experience.',
  },
  {
    icon: Phone,
    title: 'Great Support',
    description: 'Reach our team 7 days a week — we are always ready to answer your questions.',
  },
  {
    icon: Rocket,
    title: 'Fast Transactions',
    description: 'Streamlined paperwork and digital processes for quick, hassle-free closings.',
  },
  {
    icon: Gem,
    title: 'Premium Listings',
    description: 'Handpicked properties that meet our strict quality and value criteria.',
  },
  {
    icon: MessageCircle,
    title: 'Trusted Reviews',
    description: 'Transparent feedback from real clients helps you make confident decisions.',
  },
]

export function Features() {
  return (
    <section id="team" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-800">Why We Are the Best</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Discover the advantages of working with Dwellpoint — expertise, reliability, and a
            commitment to your satisfaction.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl border border-gray-100 p-6 shadow-sm">
              <Icon className="mb-4 h-10 w-10 text-crimson-400" />
              <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
