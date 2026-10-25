import { consultation } from '../data'

/** Solid gold consultation strip: white 0-radius button whose label turns gold on hover. */
export function ConsultationCta() {
  return (
    <section id="contact" className="bg-gold px-4 py-[70px] text-center xl:py-[115.5px]">
      <div className="mx-auto max-w-[950px]">
        <h2 className="text-[20px] leading-[30px] font-normal text-white xl:text-[36px] xl:leading-[1.25]">
          {consultation.statement}
        </h2>
        <a
          href={consultation.cta.href}
          className="mt-[15px] inline-block rounded-none bg-white px-[30px] py-[14.5px] font-serif text-[16px] text-ink transition-colors hover:text-gold xl:mt-[45px] xl:px-[50px]"
        >
          {consultation.cta.label}
        </a>
      </div>
    </section>
  )
}
