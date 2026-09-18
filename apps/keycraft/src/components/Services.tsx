import { Key, Shield, Lock, DoorOpen, Bell, Camera } from 'lucide-react'

const services = [
  {
    icon: Key,
    title: 'Locksmith Services',
    description:
      'We provide comprehensive locksmith services including lockouts, rekeying, and emergency assistance around the clock.',
  },
  {
    icon: Shield,
    title: 'Safes & Locks',
    description:
      'High-quality safe installation, combination changes, and secure lock solutions for home and business.',
  },
  {
    icon: Lock,
    title: 'Access Control',
    description:
      'Modern access control systems to manage and monitor who enters your property with advanced technology.',
  },
  {
    icon: DoorOpen,
    title: 'Security Doors',
    description:
      'Durable and stylish security doors that provide an additional layer of protection for your premises.',
  },
  {
    icon: Bell,
    title: 'Alarm System',
    description:
      'Custom alarm system installation and monitoring to keep your property safe from unauthorized access.',
  },
  {
    icon: Camera,
    title: 'Video Surveillance',
    description:
      'Professional CCTV and video surveillance setup for 24/7 monitoring and recording of your surroundings.',
  },
] as const

export function Services() {
  return (
    <section id="services" aria-label="Our services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-400">
            Our services
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase text-teal sm:text-4xl">
            Services We Offer
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded border border-gray-100 p-8 text-center transition-shadow hover:shadow-lg"
            >
              <service.icon className="mx-auto h-12 w-12 text-primary-400" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-bold text-teal">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
