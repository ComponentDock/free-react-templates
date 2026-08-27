import { Dumbbell, Users, HeartPulse, Salad, CupSoda, Bike } from 'lucide-react'

const features = [
  {
    icon: Dumbbell,
    title: 'Be Fit',
    desc: 'Professional fitness training to help you achieve your goals.',
  },
  { icon: Users, title: 'Join Club', desc: 'Become part of our vibrant fitness community today.' },
  {
    icon: HeartPulse,
    title: 'Gym Fitness',
    desc: 'State-of-the-art equipment for every workout style.',
  },
  { icon: Salad, title: 'Eat Healthy', desc: 'Nutrition guidance to fuel your fitness journey.' },
  { icon: CupSoda, title: 'Fruit Juices', desc: 'Fresh smoothies and juices at our in-house bar.' },
  { icon: Bike, title: 'Body Warmup', desc: 'Dynamic warm-up routines to prevent injuries.' },
]

export function ServicesGrid() {
  return (
    <section className="py-20 bg-white" id="services-grid">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-text-sub text-sm uppercase tracking-wider mb-2">Fitness Services</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Services</h2>
          <p className="text-text-gray leading-relaxed">
            Comprehensive fitness services designed to support every aspect of your wellness
            journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="bg-white p-8 text-center rounded shadow-sm hover:shadow-xl transition-shadow"
              >
                <Icon className="w-12 h-12 text-brand mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
