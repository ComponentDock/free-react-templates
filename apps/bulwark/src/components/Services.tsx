import { Shield, Lock, Monitor } from 'lucide-react'

const SERVICES = [
  {
    icon: Shield,
    title: 'Network Security',
    description:
      'Advanced firewall and intrusion detection systems to protect your network perimeter from unauthorized access and cyber attacks.',
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description:
      'End-to-end encryption, backup solutions, and data loss prevention strategies to keep your sensitive information secure.',
  },
  {
    icon: Monitor,
    title: 'Cloud Security',
    description:
      'Secure your cloud infrastructure with comprehensive monitoring, compliance management, and threat detection across all platforms.',
  },
]

export function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-3 text-3xl font-bold text-heading">Our Offered Services</h2>
        <p className="mb-12 text-body">
          We provide comprehensive security solutions tailored to your needs
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="group cursor-pointer overflow-hidden rounded-sm border border-gray-100 bg-white transition-all duration-300 hover:bg-brand hover:text-heading"
            >
              <div className="flex h-56 items-center justify-center overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/bulwark-svc-${svc.title.toLowerCase().replace(/\s/g, '')}/400/300`}
                  alt={svc.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="px-6 py-8 text-left">
                <h4 className="mb-3 text-lg font-semibold text-heading">{svc.title}</h4>
                <p className="text-sm leading-relaxed text-body">{svc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
