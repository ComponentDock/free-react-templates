import { CTA_BUTTON_LABEL, CTA_TITLE } from '../data'
import { BTN_2 } from '../buttons'

/* .intro_video_bg — full-width photo band (intro_video_bg.png → seeded
   picsum, height 480px) + purple gradient overlay (#9300ff→#d500ff at
   0.7), centered white 36px H2 + "Become a Volunteer" (.btn_2). */
const CTA_IMAGE = 'https://picsum.photos/seed/caritas-cta/1920/480'

export function CtaBand() {
  return (
    <section
      aria-label="Volunteer call to action"
      className="relative flex h-[480px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${CTA_IMAGE}')` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(16deg,#9300ff_0%,#d500ff_100%)] opacity-70"
      />
      <div className="relative z-[2] px-4 text-center">
        <h2 className="text-[36px] leading-[1.3] font-bold text-white max-sm:text-[26px]">
          {CTA_TITLE}
        </h2>
        <a href="#contact" className={`${BTN_2} mt-10`}>
          {CTA_BUTTON_LABEL}
        </a>
      </div>
    </section>
  )
}
