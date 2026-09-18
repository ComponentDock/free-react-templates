import { Heart, BookOpen, Users, Music, Globe } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Charity',
    description: 'Giving back to the community through charitable works',
  },
  {
    icon: BookOpen,
    title: 'Bible Study',
    description: 'Deep dive into scripture with guided study groups',
  },
  {
    icon: Users,
    title: 'Youth Ministry',
    description: 'Empowering the next generation of faith leaders',
  },
  { icon: Music, title: 'Worship', description: 'Praise and worship through music and song' },
  { icon: Globe, title: 'Mission Trips', description: 'Spreading love and faith across the globe' },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-fixed bg-center bg-cover py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/sacredgate-services-bg/1600/800)' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-white sm:text-4xl">
          Our Church main activities
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/30 bg-white/10">
                <service.icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
