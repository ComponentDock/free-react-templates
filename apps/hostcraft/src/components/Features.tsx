import { Shield, Headphones, Server, Database, Globe } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const features = [
  {
    icon: Server,
    title: 'Super Fast Server',
    desc: 'Lightning-fast SSD servers with optimized performance for your websites.',
  },
  {
    icon: Database,
    title: 'Daily Backups',
    desc: 'Automatic daily backups to keep your data safe and recoverable.',
  },
  {
    icon: Wrench,
    title: 'Technical Services',
    desc: 'Full technical support and management for your hosting environment.',
  },
  {
    icon: Shield,
    title: 'Secure and Reliable',
    desc: 'Enterprise-grade security with 99.9% uptime guarantee.',
  },
  {
    icon: Globe,
    title: 'DNS Control',
    desc: 'Complete DNS management with easy-to-use control panel.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Round-the-clock expert support whenever you need assistance.',
  },
]

function Wrench(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

export function Features() {
  return (
    <section id="about" className="bg-bg-main py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-text-primary">Why Choose Us</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon
            const iconRight = i % 2 === 0
            return (
              <div
                key={f.title}
                className={cn(
                  'flex items-start gap-4 rounded bg-bg-light p-6',
                  iconRight && 'flex-row-reverse text-right',
                )}
              >
                <Icon className="mt-1 shrink-0 text-brand" size={28} />
                <div>
                  <h3 className="mb-2 text-base font-semibold text-text-primary">{f.title}</h3>
                  <p className="text-sm text-text-muted">{f.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
