import { MapPin, Search, Home, DollarSign, ArrowRight } from 'lucide-react'

const FEATURES = [
  { icon: MapPin, title: 'Find Your Dream Location' },
  { icon: Search, title: 'Expert Agents At Your Service' },
  { icon: Home, title: 'Buy & Rent Premium Homes' },
  { icon: DollarSign, title: 'Best Value Properties' },
]

export function About() {
  return (
    <section className="py-16 bg-bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-0 rounded-lg overflow-hidden">
          {/* Left: image + text */}
          <div className="md:w-1/2 relative">
            <div
              className="h-80 md:h-full bg-cover bg-center min-h-[400px]"
              style={{ backgroundImage: 'url(https://picsum.photos/seed/nestwell-about1/800/600)' }}
            />
          </div>

          {/* Right: about content */}
          <div className="md:w-1/2 bg-bg-light p-8 md:p-12 flex flex-col justify-center">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
              We help you discover the finest properties in your desired neighborhood
            </h2>
            <p className="text-text-secondary mb-8">
              Our dedicated team of real estate professionals is committed to helping you find the
              perfect home. Whether you are looking to buy, sell, or rent, we provide personalized
              guidance and market expertise every step of the way.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {FEATURES.map((feat) => (
                <div key={feat.title} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-3 bg-brand/20 rounded-full flex items-center justify-center">
                    <feat.icon className="w-7 h-7 text-dark" />
                  </div>
                  <h3 className="font-bold text-sm">{feat.title}</h3>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-dark font-bold hover:text-brand transition-colors"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
