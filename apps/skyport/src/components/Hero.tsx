import { ButtonLink } from '@free-react-templates/ui'

const HEADLINE = ['We Make', 'Cloud Hosting', 'Far Simpler']

/**
 * The hero's own decorative artwork: a brand-ringed stack of rack units with
 * status dots and a shield, plus the white cloud scallop that closes the band.
 * Purely decorative, so both are hidden from the accessibility tree.
 */
function HeroArtwork() {
  return (
    <>
      <svg
        viewBox="0 0 420 380"
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-40px] hidden w-[420px] -translate-y-1/2 lg:block"
        fill="none"
      >
        <circle cx="210" cy="180" r="165" stroke="#FFFFFF" strokeWidth="3" opacity="0.7" />
        <circle cx="210" cy="180" r="165" fill="#FFFFFF" opacity="0.08" />
        {[60, 118, 176, 234].map((y) => (
          <g key={y}>
            <rect
              x="70"
              y={y}
              width="280"
              height="34"
              rx="6"
              fill="#FFFFFF"
              stroke="#2B86E6"
              strokeWidth="2"
            />
            <circle cx="96" cy={y + 17} r="6" fill="#F44A40" />
            <circle cx="118" cy={y + 17} r="6" fill="#F4E700" />
          </g>
        ))}
        <path
          d="M300 250l58 26v34c0 34-24 58-58 68-34-10-58-34-58-68v-34Z"
          fill="#F4E700"
          stroke="#2B86E6"
          strokeWidth="3"
        />
      </svg>

      <svg
        viewBox="0 0 1440 120"
        aria-hidden="true"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-[-1px] left-0 h-[70px] w-full"
      >
        <path
          d="M0 120V64c34-22 66-34 96 0s62 34 92 0 62-34 92 0 62 34 92 0 62-34 92 0 62 34 92 0 62-34 92 0 62 34 92 0 62-34 92 0 62 34 92 0 62-34 92 0 62 34 92 0 62-34 92 0 62 34 92 0 62-34 92 0v56Z"
          fill="#FFFFFF"
        />
      </svg>
    </>
  )
}

/**
 * The viewport-tall azure photo band. The caption sits at the left with an
 * uppercase headline (its line breaks only show from 992 px up), a short
 * paragraph and the white pill call to action. The source's own hero carries an
 * unused dark-overlay rule, so — matching the live render — this hero stays
 * bright and adds no dark wash. The row is a full viewport tall, dropping to a
 * 700 px band below 768 px.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-[108px] overflow-hidden bg-brand bg-[radial-gradient(120%_120%_at_80%_20%,#54a8fa_0%,#3898f8_55%,#2b86e6_100%)]"
    >
      <div className="relative mx-auto max-w-[1140px] px-5">
        <div className="flex min-h-screen items-center max-md:min-h-[700px]">
          <div className="relative z-10 w-full py-24 lg:w-8/12">
            <h1 className="font-heading text-[40px] leading-[1em] font-bold text-white uppercase min-[414px]:text-[36px] min-[992px]:text-[45px] min-[1200px]:text-[48px]">
              {HEADLINE.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < HEADLINE.length - 1 ? (
                    <br className="hidden min-[992px]:inline" />
                  ) : null}
                </span>
              ))}
            </h1>
            <p className="mt-6 max-w-[520px] text-white">
              Spin up cloud servers, managed storage and a global network from one dashboard —
              backed by engineers who answer at any hour.
            </p>
            <ButtonLink
              href="#service"
              className="mt-8 inline-flex h-[42px] items-center rounded-[25px] border border-transparent bg-surface px-[30px] text-[12px] font-medium text-ink uppercase transition-colors hover:border-white hover:bg-transparent hover:text-white"
            >
              Explore Our Features
            </ButtonLink>
          </div>
        </div>
      </div>

      <HeroArtwork />
    </section>
  )
}
