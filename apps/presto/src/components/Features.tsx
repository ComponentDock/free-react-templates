import {
  Gauge,
  Headphones,
  Network,
  ShieldCheck,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react'

interface Feature {
  id: string
  Icon: LucideIcon
  title: string
  body: string
}

const FEATURES: Feature[] = [
  {
    id: 'activation',
    Icon: Zap,
    title: 'Instant Activation',
    body: 'Accounts are provisioned the moment checkout clears, so a new site is online within a minute of signing up.',
  },
  {
    id: 'redundancy',
    Icon: Network,
    title: 'Fully Redundant',
    body: 'Every service runs across paired nodes in separate racks, and traffic moves automatically when one needs maintenance.',
  },
  {
    id: 'automation',
    Icon: Workflow,
    title: 'Powerful Automation',
    body: 'One-click staging, cron scheduling and deploy hooks keep routine releases scripted instead of manual.',
  },
  {
    id: 'performance',
    Icon: Gauge,
    title: 'High Performance',
    body: 'NVMe storage, an in-memory cache and a global edge network keep response times low under heavy load.',
  },
  {
    id: 'support',
    Icon: Headphones,
    title: 'Dedicated Support',
    body: 'Engineers answer around the clock by chat and phone, and every plan includes migration help at no extra cost.',
  },
  {
    id: 'protection',
    Icon: ShieldCheck,
    title: 'Managed Protection',
    body: 'Layered DDoS filtering, a web application firewall and daily malware scans ship with all hosting plans.',
  },
]

/**
 * The light features band: a centred title over six distinct icon-and-caption
 * items, three per row on wide screens and two from `md` down.
 */
export function Features() {
  return (
    <section
      id="features"
      aria-label="Platform features"
      className="bg-gradient-to-b from-surface to-surface-soft pt-24 pb-24 md:pt-[70px] lg:pt-[160px]"
    >
      <div className="mx-auto max-w-[1140px] px-5">
        <div className="mx-auto mb-[90px] max-w-[700px] text-center">
          <h2 className="font-heading text-[31px] font-semibold text-ink md:text-[35px]">
            Cloud load balancing
          </h2>
          <p className="mt-4 text-base text-title-muted">
            Traffic is spread across every region we run, so your visitors always reach the closest
            healthy server.
          </p>
        </div>

        <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ id, Icon, title, body }) => (
            <li key={id} className="flex">
              <Icon
                aria-hidden="true"
                className="mt-1 h-9 w-9 shrink-0 text-brand"
                strokeWidth={1.5}
              />
              <div className="pl-[19px]">
                <h3 className="font-heading text-[25px] font-normal text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-[1.8] text-copy">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
