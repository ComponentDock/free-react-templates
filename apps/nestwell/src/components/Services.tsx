import { ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    title: 'Buying A Property',
    desc: 'Our expert team guides you through every step of the home buying process, from property search to closing the deal.',
    image: 'https://picsum.photos/seed/nestwell-buy/800/500',
  },
  {
    title: 'Renting A Property',
    desc: 'Find the perfect rental property that suits your lifestyle and budget with our extensive listings.',
    image: 'https://picsum.photos/seed/nestwell-rent/800/500',
  },
]

export function Services() {
  return (
    <section className="py-16 bg-bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-3">
            Welcome to Nestwell — Your Trusted Real Estate Partner
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            We deliver comprehensive real estate solutions to help you find your ideal property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((svc) => (
            <div key={svc.title} className="relative h-80 rounded-lg overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${svc.image})` }}
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="font-playfair text-2xl font-bold mb-2">{svc.title}</h3>
                <p className="text-white/80 text-sm mb-4 max-w-sm">{svc.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white font-bold hover:text-brand transition-colors"
                >
                  Read more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
