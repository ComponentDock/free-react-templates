import { Car, Compass, Sparkles, UtensilsCrossed, Wine } from 'lucide-react'

const services = [
  { icon: Car, label: 'Transport' },
  { icon: Compass, label: 'Travel Service' },
  { icon: Sparkles, label: 'Spa & Relaxation' },
  { icon: UtensilsCrossed, label: 'Restaurant' },
  { icon: Wine, label: 'Bar & Drinks' },
]

export function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {services.map((svc) => (
            <div key={svc.label} className="flex flex-col items-center gap-3 text-center">
              <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center">
                <svc.icon className="w-8 h-8 text-brand" />
              </div>
              <h5 className="text-body font-medium">{svc.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
