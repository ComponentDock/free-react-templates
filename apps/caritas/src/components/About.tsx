import { ABOUT_BADGE, ABOUT_BUTTON_LABEL, ABOUT_PARAGRAPH, ABOUT_TITLE, COUNTERS } from '../data'
import { BTN_3 } from '../buttons'

/* .about_us — split: left photo block (about_bg.png + top photo, seeded
   picsum) with a "2000 Since" badge; right H2 + paragraph + 3 counters
   (50k / 25k / 100k — final values rendered statically); centered
   gradient "learn more" button (.btn_3) below. */
const ABOUT_IMAGE = 'https://picsum.photos/seed/caritas-about/700/600'

export function About() {
  return (
    <section id="about" className="bg-white px-4 py-[140px] max-[991px]:py-[70px]">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        {/* Photo block with since badge. */}
        <div className="relative">
          <img
            src={ABOUT_IMAGE}
            alt="Volunteers working together on a community project"
            className="w-full rounded-[10px] object-cover"
          />
          <div className="absolute bottom-6 left-6 flex flex-col items-center justify-center bg-[linear-gradient(to_left,#7f00ff_0%,#e100ff_50%,#7f00ff_100%)] px-8 py-5 text-center">
            <span className="text-[36px] font-bold text-white">{ABOUT_BADGE.value}</span>
            <span className="text-[14px] font-medium text-white/90">{ABOUT_BADGE.label}</span>
          </div>
        </div>

        {/* Text + counters. */}
        <div>
          <h2 className="text-[44px] font-semibold leading-[1.2] text-ink">{ABOUT_TITLE}</h2>
          <p className="mt-6 text-[16px] leading-[1.9] text-gray-600">{ABOUT_PARAGRAPH}</p>

          <ul className="mt-10 flex gap-12">
            {COUNTERS.map((counter) => (
              <li key={counter.label}>
                <span className="text-[48px] font-bold text-brand">
                  {counter.value}
                  {counter.suffix}
                </span>
                <p className="mt-1 text-[15px] font-medium text-gray-600">{counter.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <a href="#causes" className={BTN_3}>
          {ABOUT_BUTTON_LABEL}
        </a>
      </div>
    </section>
  )
}
