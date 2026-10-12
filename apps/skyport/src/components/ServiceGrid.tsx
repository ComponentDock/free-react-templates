import { Headphones, Heart, Monitor, ShieldCheck, Star, Users } from 'lucide-react'

const SERVICES = [
  {
    title: 'Expert Engineers',
    body: 'Every ticket lands with someone who has run production infrastructure at scale.',
    Icon: Users,
  },
  {
    title: 'Professional Service',
    body: 'Migration plans, load tests and launch checklists written for your stack.',
    Icon: Monitor,
  },
  {
    title: 'Strong Support',
    body: 'An on-call rotation that answers in minutes, whatever the hour on your clock.',
    Icon: Headphones,
  },
  {
    title: 'Technical Skill',
    body: 'Kernel tuning, network routing and database advice without a sales call.',
    Icon: ShieldCheck,
  },
  {
    title: 'Recommended Widely',
    body: 'Agencies hand us their client work because the handover is predictable.',
    Icon: Star,
  },
  {
    title: 'Positive Reviews',
    body: 'Hundreds of teams rate the dashboards, docs and uptime five stars.',
    Icon: Heart,
  },
]

/**
 * The six-card feature grid: soft-surface cards in a 3-up (2-up at md) layout
 * whose surface turns brand blue with an offset shadow on hover or focus.
 */
export function ServiceGrid() {
  return (
    <section id="service" className="scroll-mt-[108px] bg-surface py-[120px]">
      <div className="mx-auto max-w-[1140px] px-5">
        <div className="mx-auto max-w-[700px] pb-[40px] text-center">
          <h1 className="font-heading text-[36px] font-semibold text-ink">
            What Makes Skyport Different
          </h1>
          <p className="text-copy">Six things every customer notices in the first week.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, body, Icon }) => (
            <div
              key={title}
              className="group bg-surface-soft px-[30px] py-[30px] transition-all duration-300 hover:bg-brand hover:shadow-[-14.142px_14.142px_20px_0_rgba(157,157,157,0.5)] focus-within:bg-brand focus-within:shadow-[-14.142px_14.142px_20px_0_rgba(157,157,157,0.5)]"
            >
              <h4 className="font-heading text-[18px] font-semibold text-ink transition-colors group-hover:text-white group-focus-within:text-white">
                <Icon
                  className="mr-[15px] inline-block h-6 w-6 align-middle text-brand transition-colors group-hover:text-white group-focus-within:text-white"
                  aria-hidden="true"
                />
                {title}
              </h4>
              <p className="text-copy transition-colors group-hover:text-white group-focus-within:text-white">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
