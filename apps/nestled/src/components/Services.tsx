import { Building, Bath, BedDouble, Home } from 'lucide-react'

const services = [
  { icon: Building, title: 'Buy Property' },
  { icon: Bath, title: 'Modern Amenities' },
  { icon: BedDouble, title: 'Comfortable Living' },
  { icon: Home, title: 'House Size' },
]

export function Services() {
  return (
    <section className="py-16" id="services">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary">We will help you find your home</h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-light flex items-center justify-center">
                <s.icon size={28} className="text-brand" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-heading">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
