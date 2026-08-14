import { CTA } from '../data'

/* Call to action (source: div.cta_part — centered white text on a
   background image with a gold "Sign Up" button; the original's "Sing Up"
   typo is fixed). */
export function CtaBand() {
  return (
    <section
      aria-label="Reserve a viewing"
      className="py-[170px] text-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(20, 48, 58, 0.85), rgba(20, 48, 58, 0.85)), url(https://picsum.photos/id/868/1600/700)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-[760px] px-[15px]">
        <h2 className="text-[38px] font-bold leading-[1.25] text-white">{CTA.heading}</h2>
        <p className="mt-5 text-[15px] leading-relaxed text-white/80">{CTA.blurb}</p>
        <a
          href="#contact"
          className="mt-9 inline-block bg-brand px-9 py-[13px] text-[15px] font-medium capitalize text-white transition-colors hover:bg-brand-hover"
        >
          {CTA.ctaLabel}
        </a>
      </div>
    </section>
  )
}
