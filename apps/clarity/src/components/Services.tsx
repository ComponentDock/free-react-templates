import { GraduationCap, Target, Users, BookOpen, Handshake, Send } from 'lucide-react'

const services = [
  {
    icon: GraduationCap,
    title: 'Online Coaching',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est maxime adipisci incidunt voluptatum pariatur. Officia eaque ipsum ducimus.',
  },
  {
    icon: Target,
    title: 'Release Your Potential',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est maxime adipisci incidunt voluptatum pariatur. Officia eaque ipsum ducimus.',
  },
  {
    icon: Users,
    title: 'Transforming Lives',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est maxime adipisci incidunt voluptatum pariatur. Officia eaque ipsum ducimus.',
  },
  {
    icon: BookOpen,
    title: 'Life Coach Training',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est maxime adipisci incidunt voluptatum pariatur. Officia eaque ipsum ducimus.',
  },
  {
    icon: Handshake,
    title: 'Release Your Potential',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est maxime adipisci incidunt voluptatum pariatur. Officia eaque ipsum ducimus.',
  },
  {
    icon: Send,
    title: 'Transforming Lives',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est maxime adipisci incidunt voluptatum pariatur. Officia eaque ipsum ducimus.',
  },
]

export function Services() {
  return (
    <section id="services-section" className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Our Services</h2>
          <p className="text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet assumenda
            molestias quae in, distinctio rem veritatis praesentium?
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div key={`${service.title}-${i}`} className="rounded bg-white p-8">
              <service.icon className="mb-4 h-12 w-12 text-primary" aria-hidden="true" />
              <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
