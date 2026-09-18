import { cn } from '@free-react-templates/ui'

interface ServicesProps {
  className?: string
}

const services = [
  {
    title: 'Preventive Care',
    description:
      'Regular check-ups, cleanings, and preventive treatments to keep your smile healthy and bright.',
    image: 'https://picsum.photos/seed/dentalink-svc1/400/300',
  },
  {
    title: 'Cosmetic Dentistry',
    description:
      'Teeth whitening, veneers, and cosmetic procedures to enhance the appearance of your smile.',
    image: 'https://picsum.photos/seed/dentalink-svc2/400/300',
  },
  {
    title: 'Orthodontics',
    description:
      'Braces, aligners, and orthodontic treatments to correct misaligned teeth and jaw issues.',
    image: 'https://picsum.photos/seed/dentalink-svc3/400/300',
  },
  {
    title: 'Dental Implants',
    description: 'Permanent tooth replacement solutions that look and function like natural teeth.',
    image: 'https://picsum.photos/seed/dentalink-svc4/400/300',
  },
]

export function Services({ className }: ServicesProps) {
  return (
    <section id="services" className={cn('py-16 px-4 bg-paper', className)} data-testid="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-ink text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img src={svc.image} alt={svc.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-ink mb-2">{svc.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{svc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
