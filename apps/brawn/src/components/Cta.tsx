import { CTA } from '../content'
import { Container } from './ui'

/** Blue strip, 48 px padding, one amber button — the page's only CTA. */
export function Cta() {
  return (
    <section id="contact" aria-label="Join the gym" className="bg-brand py-12">
      <Container className="text-center text-white">
        <h2 className="font-display text-[28px] leading-[1.5] font-black text-white">
          {CTA.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-[635px] text-[20px] leading-[36px] font-light text-white">
          {CTA.lead}
        </p>
        <a
          href={CTA.href}
          className="mt-8 inline-block rounded-[4px] bg-action px-6 py-4 text-[13px] font-black tracking-[2.6px] text-[#212529] uppercase transition-colors hover:bg-action-dark focus-visible:bg-action-dark"
        >
          {CTA.button}
        </a>
      </Container>
    </section>
  )
}
