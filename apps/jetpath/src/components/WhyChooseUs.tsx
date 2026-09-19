import { Shield, HeartHandshake, Map, Headphones } from 'lucide-react'

const FEATURES = [
  {
    icon: Shield,
    title: 'Safe Travels',
    description:
      'Your safety is our priority. All trips are insured and guided by certified professionals.',
  },
  {
    icon: HeartHandshake,
    title: 'Best Price Guarantee',
    description: 'We match any competitor price. Get the best value for your dream vacation.',
  },
  {
    icon: Map,
    title: '500+ Destinations',
    description: 'Choose from hundreds of hand-picked destinations across all continents.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our travel experts are available around the clock to assist you anytime.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-jet-teal font-semibold text-sm uppercase tracking-wider mb-2">
            Why Jetpath
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-jet-navy">
            Why Travel With Us
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((f) => (
            <div key={f.title} className="text-center">
              <div className="w-14 h-14 bg-jet-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-7 h-7 text-jet-teal" />
              </div>
              <h3 className="font-semibold text-jet-navy mb-2">{f.title}</h3>
              <p className="text-jet-muted text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
