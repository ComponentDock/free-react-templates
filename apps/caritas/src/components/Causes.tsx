import { Droplets, Heart, Utensils, type LucideIcon } from 'lucide-react'
import {
  CAUSES,
  CAUSES_CAPTION,
  CAUSES_TITLE,
  CAUSE_BUTTON_LABEL,
  type CauseIconName,
} from '../data'
import { SectionTitle } from './SectionTitle'
import { BTN_2 } from '../buttons'

/* .passion_part — "Our Causes" + 3 cards: photo, purple icon, 75% skill
   bar, H5 title, "read more" (.btn_2). Cards bg #fafafa, asymmetric
   radius 50px 0 50px 0. Padding 180px 0 117px. */
const ICONS: Record<CauseIconName, LucideIcon> = {
  heart: Heart,
  meal: Utensils,
  droplet: Droplets,
}

export function Causes() {
  return (
    <section id="causes" className="bg-white px-4 pt-[180px] pb-[117px] max-[991px]:pt-[90px]">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-md">
          <SectionTitle title={CAUSES_TITLE} caption={CAUSES_CAPTION} />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {CAUSES.map((cause) => {
            const Icon = ICONS[cause.icon]
            return (
              <article
                key={cause.seed}
                className="overflow-hidden rounded-[50px_0_50px_0] bg-mist transition-transform hover:-translate-y-1"
              >
                <img
                  src={`https://picsum.photos/seed/${cause.seed}/600/400`}
                  alt=""
                  className="w-full object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-4">
                    <Icon aria-hidden="true" className="h-8 w-8 text-brand" strokeWidth={1.5} />
                    {/* .skill-bar — 75% width fill + label. */}
                    <div
                      role="progressbar"
                      aria-label={`${cause.title} progress`}
                      aria-valuenow={cause.percent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="h-2 flex-1 overflow-hidden rounded-full bg-white"
                    >
                      <div
                        className="h-full bg-[linear-gradient(to_left,#7f00ff_0%,#e100ff_50%,#7f00ff_100%)]"
                        style={{ width: `${cause.percent}%` }}
                      />
                    </div>
                    <span className="text-[15px] font-bold text-brand">{cause.percent}%</span>
                  </div>
                  <h3 className="mt-6 text-[20px] font-semibold leading-[1.4] text-ink">
                    {cause.title}
                  </h3>
                  <a href="#contact" className={`${BTN_2} mt-8`}>
                    {CAUSE_BUTTON_LABEL}
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
