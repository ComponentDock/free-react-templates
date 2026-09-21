import { Headphones, Users, ClipboardList, Dumbbell, Calendar, HeartPulse } from 'lucide-react'

const reasons = [
  {
    title: 'Support 24/7',
    description: 'Our team is always available to help you.',
    Icon: Headphones,
  },
  {
    title: 'Expert Trainers',
    description: 'Certified professionals guiding your journey.',
    Icon: Users,
  },
  {
    title: 'Personalized Sessions',
    description: 'Programs tailored to your specific goals.',
    Icon: ClipboardList,
  },
  {
    title: 'Modern Equipment',
    description: 'State-of-the-art machines and free weights.',
    Icon: Dumbbell,
  },
  {
    title: 'Daily Classes',
    description: 'Wide variety of classes every single day.',
    Icon: Calendar,
  },
  { title: 'Health Focus', description: 'Holistic approach to your wellness.', Icon: HeartPulse },
]

export function WhyChooseUs() {
  return (
    <section className="bg-dark-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-500">
            Why Us
          </span>
          <h2 className="mt-2 font-heading text-4xl font-bold uppercase text-white">
            Why People Choose Us
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, description, Icon }) => (
            <div key={title} className="flex items-start gap-4 rounded-lg bg-dark-800 p-6">
              <Icon className="mt-1 h-8 w-8 shrink-0 text-brand-500" />
              <div>
                <h3 className="font-heading text-lg font-semibold uppercase text-white">{title}</h3>
                <p className="mt-1 text-sm text-dark-300">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
