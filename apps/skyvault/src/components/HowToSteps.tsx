import { ButtonLink, cn } from '@free-react-templates/ui'
import { Globe, Rocket, Server, type LucideIcon } from 'lucide-react'
import { Reveal } from './Reveal'

interface Step {
  title: string
  text: string
  icon: LucideIcon
  /** 143 px badge fill — the middle badge carries the brand mint. */
  badge: string
  /** 188 px halo behind the badge. */
  halo: string
  /** Icon colour inside the badge. */
  iconClass: string
}

const STEPS: Step[] = [
  {
    title: 'Claim your domain',
    text: 'Search the name you want and we lock it in for the first year, privacy cover included.',
    icon: Globe,
    badge: 'bg-haze',
    halo: 'bg-[rgba(213,223,227,.25)]',
    iconClass: 'text-white',
  },
  {
    title: 'Pick a hosting plan',
    text: 'Choose the storage, mailboxes and sub-domains you need — resize whenever traffic grows.',
    icon: Server,
    badge: 'bg-mint',
    halo: 'bg-[rgba(27,239,197,.25)]',
    iconClass: 'text-plum-mid',
  },
  {
    title: 'Publish your site',
    text: 'Point your DNS at us, upload the build and go live with a free certificate in minutes.',
    icon: Rocket,
    badge: 'bg-haze',
    halo: 'bg-[rgba(213,223,227,.25)]',
    iconClass: 'text-white',
  },
]

/**
 * The white three-step row: a compressed section title, an ornamental dotted
 * arc behind the row and three 143 px circular badges (the middle one in brand
 * mint) over step titles and copy, closing with the violet price pill.
 */
export function HowToSteps() {
  return (
    <section id="start" className="scroll-mt-[124px] bg-surface pt-[96px] pb-[97px]">
      <div className="mx-auto w-full max-w-[1140px] px-5">
        <h2 className="text-center text-[36px] leading-[0.75] max-[575px]:text-[30px]">
          Up and running in three steps
        </h2>

        <Reveal className="relative mt-[98px]">
          <svg
            aria-hidden="true"
            viewBox="0 0 520 200"
            className="pointer-events-none absolute top-[-137px] left-1/2 hidden w-[520px] -translate-x-1/2 min-[992px]:block"
            fill="none"
          >
            <path
              d="M20 190C60 60 170 10 260 10s200 50 240 180"
              stroke="#d5dfe3"
              strokeWidth="2"
              strokeDasharray="2 12"
              strokeLinecap="round"
            />
          </svg>

          <div className="flex flex-wrap">
            {STEPS.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.title}
                  className="w-full px-4 text-center max-[991px]:mb-[80px] min-[992px]:w-1/3"
                >
                  <div
                    className={cn(
                      'relative mx-auto flex h-[143px] w-[143px] items-center justify-center rounded-full max-[575px]:h-[100px] max-[575px]:w-[100px]',
                      step.badge,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn('absolute -inset-[22px] rounded-full', step.halo)}
                    />
                    <Icon
                      className={cn(
                        'relative h-[56px] w-[56px] max-[575px]:h-[40px] max-[575px]:w-[40px]',
                        step.iconClass,
                      )}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-[66px] text-[24px] max-[575px]:text-[20px]">{step.title}</h3>
                  <p className="mt-[27px] text-[15px] text-body-copy">{step.text}</p>
                </div>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-[86px] flex justify-center">
          <ButtonLink
            href="#plans"
            className="h-[63px] w-[257px] rounded-[12px] bg-plum-mid text-[16px] font-bold text-white hover:bg-mint hover:text-ink max-[575px]:h-[53px] max-[575px]:w-[227px] max-[575px]:text-[14px]"
          >
            Plans from $9.90 a month
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
