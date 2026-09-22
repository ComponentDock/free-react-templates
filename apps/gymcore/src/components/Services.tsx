import { Target, Heart, Dumbbell, Flame } from 'lucide-react'

const services = [
  {
    icon: Target,
    title: 'Strategies',
    description:
      'Customized fitness strategies designed to help you reach your specific health and performance goals.',
  },
  {
    icon: Heart,
    title: 'Yoga',
    description:
      'Improve flexibility, balance, and mental clarity through our expert-led yoga sessions.',
  },
  {
    icon: Dumbbell,
    title: 'Workout',
    description:
      'Structured workout programs tailored to all fitness levels, from beginners to advanced athletes.',
  },
  {
    icon: Flame,
    title: 'Weight Loss',
    description:
      'Proven weight management programs combining nutrition guidance with effective exercise routines.',
  },
]

export function Services() {
  return (
    <section id="about" className="bg-slate py-0">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
        {/* Image side */}
        <div className="relative min-h-[400px]">
          <img
            src="https://picsum.photos/seed/gymcore-services/960/600"
            alt="Gym services"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          {services.map((service, i) => (
            <div key={service.title} className={`p-8 ${i % 2 === 0 ? 'bg-card-gray' : 'bg-slate'}`}>
              <service.icon className="mb-4 h-10 w-10 text-brand" />
              <h4 className="mb-3 text-xl font-semibold text-white">{service.title}</h4>
              <p className="text-sm leading-relaxed text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
