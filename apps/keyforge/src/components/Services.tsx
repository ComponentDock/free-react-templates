import { Lock, Shield, Key, DoorOpen, Bell, Video } from 'lucide-react'

const services = [
  {
    icon: Lock,
    title: 'Locksmith Services',
    description:
      'Professional locksmith solutions for residential and commercial properties. Fast response times and expert craftsmanship.',
  },
  {
    icon: Shield,
    title: 'Safes & Locks',
    description:
      'High-quality safes and advanced lock systems to protect your valuables. Installation, repair, and maintenance.',
  },
  {
    icon: Key,
    title: 'Access Control',
    description:
      'Modern access control systems for offices and buildings. Keycard, biometric, and keypad solutions available.',
  },
  {
    icon: DoorOpen,
    title: 'Security Doors',
    description:
      'Reinforced security doors with advanced locking mechanisms. Custom designs to match your property aesthetic.',
  },
  {
    icon: Bell,
    title: 'Alarm System',
    description:
      'Complete alarm system installation and monitoring. Intrusion detection, fire alarms, and emergency response.',
  },
  {
    icon: Video,
    title: 'Video Surveillance',
    description:
      'CCTV and video monitoring solutions for homes and businesses. HD cameras, remote access, and cloud storage.',
  },
]

export function Services() {
  return (
    <section className="bg-slate py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Our Services
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink">Services We Offer</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <div key={svc.title} className="flex gap-4">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center border-2 border-brand rotate-45">
                  <Icon size={24} className="-rotate-45 text-brand" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-bold uppercase tracking-wide text-ink">
                    {svc.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-body">{svc.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
