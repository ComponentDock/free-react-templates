import { Award, Gauge, Server, TrendingUp, type LucideIcon } from 'lucide-react'
import { Reveal } from './Reveal'

interface Highlight {
  title: string
  icon: LucideIcon
}

const HIGHLIGHTS: Highlight[] = [
  { title: 'Reach', icon: TrendingUp },
  { title: 'Insights', icon: Gauge },
  { title: 'Infrastructure', icon: Server },
  { title: 'Reliability', icon: Award },
]

/**
 * The why-choose split: a cool-grey band halved 6/6, with the app's own
 * placeholder portrait pinned to the bottom-left of the left half and a
 * left-aligned heading, copy and a four-item icon row on the right. The photo
 * is dropped below the desktop breakpoint.
 */
export function WhyChooseSplit() {
  return (
    <section id="about" className="scroll-mt-[124px] bg-surface-cool">
      <div className="mx-auto w-full max-w-[1140px] px-5">
        <div className="flex flex-wrap items-stretch">
          <div className="relative hidden w-full min-[992px]:block min-[992px]:w-1/2">
            <img
              src="https://picsum.photos/seed/skyvault-choice/800/1100"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute bottom-0 left-[25px] h-[556px] w-[397px] rounded-t-[12px] object-cover"
            />
          </div>

          <div className="w-full pt-[94px] pb-[91px] min-[992px]:w-1/2">
            <Reveal>
              <h2 className="text-[36px] leading-[0.75] max-[575px]:text-[30px]">
                Why teams choose Skyvault
              </h2>
              <p className="mt-[51px] font-medium text-body-copy">
                Every plan runs on the same NVMe fleet and the same global network, so a small store
                and a busy platform get the identical infrastructure — plus a human on the line at
                any hour, migrations handled for you and backups you never have to think about.
              </p>

              <ul className="mt-[52px] flex flex-wrap justify-between gap-y-[28px] min-[992px]:flex-nowrap">
                {HIGHLIGHTS.map(({ title, icon: Icon }) => (
                  <li
                    key={title}
                    className="flex w-1/2 flex-col items-center text-center min-[992px]:w-auto"
                  >
                    <Icon
                      className="h-[64px] w-[64px] text-plum-mid max-[575px]:h-[48px] max-[575px]:w-[48px]"
                      aria-hidden="true"
                    />
                    <span className="mt-[20px] text-[18px] font-medium text-ink max-[575px]:text-[15px]">
                      {title}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
