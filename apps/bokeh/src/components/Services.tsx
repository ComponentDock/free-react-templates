import { Camera, MapPin, Calendar, Heart } from 'lucide-react'

const SERVICES = [
  {
    icon: Camera,
    title: 'Nature Photography',
    description:
      'Capturing the raw beauty of natural landscapes and wildlife in their untouched habitats.',
  },
  {
    icon: MapPin,
    title: 'Property Tours',
    description:
      'Professional architectural and interior photography for real estate listings and publications.',
  },
  {
    icon: Calendar,
    title: 'Event Coverage',
    description:
      'Comprehensive event documentation from corporate gatherings to intimate celebrations.',
  },
  {
    icon: Heart,
    title: 'Wedding Photography',
    description:
      'Timeless wedding photography that tells the story of your special day with elegance.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h3 className="font-heading text-3xl font-bold text-heading">
            What <span className="text-brand">We</span> Offer
          </h3>
          <p className="mt-2 font-body text-body-text">
            Professional photography services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <service.icon className="h-7 w-7 text-brand" />
              </div>
              <h5 className="mb-2 font-heading text-lg font-bold text-heading">{service.title}</h5>
              <p className="font-body text-sm leading-relaxed text-body-text">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
