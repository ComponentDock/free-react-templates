import {
  Shield,
  Sparkles,
  Heart,
  Smile,
  Stethoscope,
  Scissors,
  Search,
  Activity,
} from 'lucide-react'

const services = [
  { icon: Shield, title: 'Tooth Protection' },
  { icon: Sparkles, title: 'Dental Implants' },
  { icon: Heart, title: 'Dental Care' },
  { icon: Smile, title: 'Teeth Whitening' },
  { icon: Stethoscope, title: 'Dental Calculus' },
  { icon: Scissors, title: 'Tooth Removal' },
  { icon: Search, title: 'Removal of Tartar' },
  { icon: Activity, title: 'Tooth Inspection' },
]

const DESCRIPTION =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'

export function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Toothcare Services</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <s.icon className="w-7 h-7 text-teal-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{DESCRIPTION}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
