import { ButtonLink } from '@free-react-templates/ui'
import { introBand } from '../data'

/** Intro band (source: .ftco-intro — photo + 45° blue→teal gradient overlay
 *  at .9 opacity): white "You Always Get the Best Guidance" heading, a
 *  "Request A Quote" text link and the teal "Our Services" pill. The band is
 *  rendered twice on the page (after Free Consulting and after Why Choose
 *  Us?). */
export function IntroBand() {
  return (
    <section aria-label="Intro band" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${introBand.background})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-band-blue to-brand opacity-90"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-16 text-center lg:py-20">
        <h2 className="text-3xl font-bold leading-[1.2] text-white lg:text-4xl">
          {introBand.heading}
        </h2>
        <a href="#consult" className="text-white underline underline-offset-4 hover:text-white/80">
          {introBand.quoteLink}
        </a>
        <ButtonLink
          href="#services"
          className="rounded-full bg-brand px-8 py-3 font-semibold text-white hover:bg-brand-hover"
        >
          {introBand.servicesCta}
        </ButtonLink>
      </div>
    </section>
  )
}
