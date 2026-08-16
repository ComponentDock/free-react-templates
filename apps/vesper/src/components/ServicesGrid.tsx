import { BookOpen, Droplets, Heart, Mic, Sun, Users } from 'lucide-react'

const services = [
  {
    title: 'Daily Prayers',
    description:
      'Start each day in prayer together — morning and evening gatherings for the whole family.',
    Icon: Sun,
  },
  {
    title: 'Continous Teaching',
    description:
      'Deep, faithful teaching from the Bible in small groups, classes, and Sunday services.',
    Icon: BookOpen,
  },
  {
    title: 'Set of Sermons',
    description: 'Weekly sermons that apply God\u2019s Word to everyday life, led by our pastors.',
    Icon: Mic,
  },
  {
    title: 'Wedding',
    description:
      'Celebrate the covenant of marriage in a sacred space, with pastoral guidance and prayer.',
    Icon: Heart,
  },
  {
    title: 'Community Helpers',
    description:
      'Practical care and support for neighbors in need — meals, visits, and helping hands.',
    Icon: Users,
  },
  {
    title: 'Baptism',
    description:
      'Public declaration of faith in Jesus through baptism, surrounded by the congregation.',
    Icon: Droplets,
  },
] as const

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Vesper Church Services
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, Icon }) => (
            <div key={title} className="text-center">
              <span className="mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gold text-white">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
