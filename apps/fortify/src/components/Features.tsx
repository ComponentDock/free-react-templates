import { Users, Shield, Phone, Rocket, Diamond, MessageCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const FEATURES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'Our certified professionals bring years of experience in cybersecurity and IT infrastructure management.',
  },
  {
    icon: Shield,
    title: 'Threat Monitoring',
    description:
      '24/7 real-time monitoring and alerting to detect and respond to security incidents before they cause damage.',
  },
  {
    icon: Phone,
    title: 'Rapid Response',
    description:
      'Immediate incident response with dedicated support teams available around the clock for critical situations.',
  },
  {
    icon: Rocket,
    title: 'Scalable Solutions',
    description:
      'Security solutions that grow with your business, from startups to enterprise-level organizations.',
  },
  {
    icon: Diamond,
    title: 'Compliance Ready',
    description:
      'Full compliance management for GDPR, HIPAA, PCI DSS, and other industry standards and regulations.',
  },
  {
    icon: MessageCircle,
    title: 'Security Training',
    description:
      'Comprehensive security awareness programs to empower your team against social engineering and phishing.',
  },
]

export function Features() {
  return (
    <section className="bg-light-bg py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-3 text-3xl font-bold text-heading">Some Features that Made us Unique</h2>
        <p className="mb-12 text-body">What sets us apart in the cybersecurity landscape</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feat) => (
            <div
              key={feat.title}
              className="group cursor-pointer rounded-sm bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(157,157,157,0.5)] hover:bg-brand"
            >
              <feat.icon className="mb-4 h-10 w-10 text-brand transition-colors duration-300 group-hover:text-heading" />
              <h4 className="mb-3 text-lg font-semibold text-heading">{feat.title}</h4>
              <p className="text-sm leading-relaxed text-body">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
