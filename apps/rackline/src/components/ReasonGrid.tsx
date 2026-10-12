import {
  Activity,
  Building2,
  Cpu,
  Headset,
  Star,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from './Reveal'
import { ReasonIcon } from './ReasonIcon'

interface Reason {
  icon: LucideIcon
  title: string
  copy: string
}

const REASONS: Reason[] = [
  {
    icon: Cpu,
    title: 'Current-generation hardware',
    copy: 'Every rack runs current-generation silicon with redundant power and disks.',
  },
  {
    icon: Building2,
    title: 'Four data centres',
    copy: 'Pick the region closest to your visitors and we move you at no charge.',
  },
  {
    icon: Zap,
    title: 'Cached to the edge',
    copy: 'Static assets leave our edge nodes in single-digit milliseconds.',
  },
  {
    icon: Activity,
    title: 'Uptime we publish',
    copy: 'A public dashboard tracks every minute, month by month, forever.',
  },
  {
    icon: Headset,
    title: 'Engineers on support',
    copy: 'No scripted tiers: your ticket lands with the team that runs the racks.',
  },
  {
    icon: Star,
    title: 'Reviews we did not buy',
    copy: 'Independent write-ups from agencies and solo builders, both good and bad.',
  },
]

/**
 * The white reason band: a centred headline over six bordered tiles. Each tile
 * is a single focusable link whose whole surface floods lime on hover or focus,
 * fading in from a 1.07 scale while the tile's own border goes transparent and
 * its title, copy, glyph and bracket artwork switch to white.
 */
export function ReasonGrid() {
  return (
    <section id="why" className="bg-surface py-[48px] scroll-mt-[148px] min-[768px]:py-[112px] max-[992px]:scroll-mt-[75px]">
      <div className="mx-auto w-full max-w-[1140px] px-5">
        <Reveal className="mb-12">
          <h2 className="text-center text-[32px] leading-[1.2] font-medium text-copy">
            Why teams keep their racks here
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, copy }) => (
            <a
              key={title}
              href="#contact"
              className="group relative block h-full border-2 border-line-strong bg-surface p-[30px] transition-all duration-300 hover:border-transparent focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-lime focus-visible:outline-none"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 block origin-center scale-[1.07] bg-lime opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
              />
              <span className="relative z-[2] block">
                <span className="mb-3 flex items-center gap-6">
                  <span className="relative grid h-[68px] w-[59px] flex-none place-items-center text-lime transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
                    <ReasonIcon className="absolute inset-0 h-full w-full" />
                    <Icon aria-hidden="true" className="relative h-8 w-8" strokeWidth={1.5} />
                  </span>
                  <span className="block text-[20px] font-medium text-copy transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
                    {title}
                  </span>
                </span>
                <span className="block text-muted transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
                  {copy}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
