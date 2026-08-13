import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { about } from '../data'

/** White "Welcome To Our Hospital" about split: kicker + 50px heading +
 *  paragraph + three stacked CTA buttons on the left; two overlapping
 *  photos (front framed with a 10px `#f2f2f2` border) on the right. */
export function About() {
  return (
    <section id="about-section" className="bg-white py-24 md:py-[120px]">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="flex items-center gap-5 text-[18px] font-bold uppercase text-[#396cf0]">
            <span className="h-[2px] w-[50px] bg-[#396cf0]" aria-hidden="true" />
            {about.kicker}
          </span>
          <h2 className="mt-5 text-[40px] font-extrabold leading-tight text-ink md:text-[50px]">
            {about.title}
          </h2>
          <p className="mb-10 mt-6 max-w-xl text-[16px] leading-relaxed text-muted">
            {about.paragraph}
          </p>
          <div className="flex flex-col items-start gap-5">
            {about.buttons.map((button, index) => (
              <ButtonLink
                key={button.label}
                href={button.href}
                className={
                  index === 0
                    ? 'rounded-md bg-[linear-gradient(to_left,#559af3,#1462f3,#559af3)] bg-[length:200%_auto] px-[60px] py-[19px] text-[16px] font-semibold text-white shadow-[0_7px_21px_rgba(0,0,0,0.12)] transition-all hover:bg-[position:right_center]'
                    : 'rounded-md bg-[linear-gradient(to_left,#9ea0af,#7a7c8a,#9ea0af)] bg-[length:200%_auto] px-[60px] py-[19px] text-[16px] font-semibold text-white shadow-[0_7px_21px_rgba(0,0,0,0.12)] transition-all hover:bg-[position:right_center]'
                }
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                {button.label}
              </ButtonLink>
            ))}
          </div>
        </div>

        <div className="relative mt-6 h-[420px] md:h-[575px] md:mt-0">
          <img
            src={about.frontImage}
            alt={about.frontAlt}
            className="absolute bottom-0 left-0 z-0 w-[55%] rounded-sm object-cover"
          />
          <img
            src={about.backImage}
            alt={about.backAlt}
            className="absolute right-0 top-[60px] z-10 w-[55%] rounded-sm border-[10px] border-[#f2f2f2] object-cover"
          />
        </div>
      </div>
    </section>
  )
}
