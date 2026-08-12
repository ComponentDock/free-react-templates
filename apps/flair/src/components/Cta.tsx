import { CTA, IMAGES } from '../data'

/* Cta — the dark-overlay "Ready To Discuss Your Project?" band with the
   white paragraph and the gradient-framed "Work with us" button. */
export function Cta() {
  return (
    <section
      aria-label="Call to action"
      className="relative bg-cover bg-center py-[100px]"
      style={{ backgroundImage: `url('${IMAGES.cta}')` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[rgba(4,8,29,0.7)]" />
      <div className="relative mx-auto max-w-[700px] px-6 text-center">
        <h2 className="text-[32px] font-bold leading-[1.2] text-white lg:text-[40px]">
          {CTA.heading}
        </h2>
        <p className="mt-6 text-sm leading-[1.8] text-white/80">{CTA.text}</p>
        <a href="#contact" className="fancy-btn mt-[50px]">
          {CTA.ctaLabel}
        </a>
      </div>
    </section>
  )
}
