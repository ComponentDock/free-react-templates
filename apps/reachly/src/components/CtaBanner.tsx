import { ButtonLink } from '@free-react-templates/ui'
import { ctaBanner } from '../data'

/* CTA banner (source: div.emargency-care.section-img-bg2 — full-width
   background photo with a big PINK GRADIENT rounded box on the right
   half: white heading + copy + white-bordered "Contact Us" pill). */
export function CtaBanner() {
  return (
    <section
      className="relative bg-cover bg-center py-[120px]"
      style={{ backgroundImage: "url('https://picsum.photos/id/249/1920/900')" }}
    >
      <div className="mx-auto flex max-w-[1200px] justify-end px-[15px]">
        <div className="flex min-h-[420px] w-full max-w-[490px] flex-col justify-center rounded-[30px] bg-gradient-to-b from-brand to-brand-dark p-[50px] text-white shadow-2xl">
          <h2 className="font-heading text-[36px] font-bold leading-tight">{ctaBanner.heading}</h2>
          <p className="mt-4 text-base leading-[1.8] text-white/90">{ctaBanner.paragraph}</p>
          <ButtonLink
            href="#contact"
            className="mt-8 self-start rounded-full border border-white bg-transparent px-[34px] py-[15px] text-lg font-medium tracking-[1px] text-white transition-colors hover:bg-white hover:text-brand"
          >
            {ctaBanner.buttonLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
