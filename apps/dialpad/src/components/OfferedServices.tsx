import { BarChart3, Globe, Headphones, Mail, MessageSquare, Users } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const services = [
  { icon: BarChart3, title: 'Analytics Dashboard' },
  { icon: Globe, title: 'Global Coverage' },
  { icon: Headphones, title: 'Inbound Calls' },
  { icon: Mail, title: 'Email Support' },
  { icon: MessageSquare, title: 'Live Chat' },
  { icon: Users, title: 'Outbound Campaigns' },
] as const

export function OfferedServices() {
  return (
    <section
      id="we-offer"
      className="relative bg-cover bg-center py-24"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/dialpad-offer/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-charcoal/85" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white">Our Offered Services</h2>
          <p className="mt-3 text-sm text-white/80">
            Comprehensive call center solutions tailored to your business needs.
          </p>
        </div>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="grid grid-cols-3 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex flex-col items-center rounded-lg bg-white/10 p-5 text-center backdrop-blur-sm transition-colors hover:border hover:border-brand/50"
              >
                <s.icon className="h-8 w-8 text-brand" aria-hidden="true" />
                <span className="mt-2 text-xs font-medium text-white">{s.title}</span>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Content Synchronization</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Our unified platform ensures your customer data, call logs, and support tickets stay
              perfectly synchronized across all channels — giving your team a single source of truth
              for every interaction.
            </p>
            <Button className="mt-6 rounded-full bg-white px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-ink hover:bg-gray-100">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
