import { caseStudies } from '../data'

/** Near-full-bleed case-study strip: three cards, a 1px gold frame inset 22px on hover/focus. */
export function CaseStudy() {
  return (
    <section id="case-study" className="overflow-hidden bg-white px-0 py-[70px] md:py-[80px] xl:py-[130px]">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mx-auto mb-[81px] max-w-[560px] text-center">
          <h2 className="mb-[27px] text-[26px] leading-[1.25] font-bold text-ink xl:text-[36px]">
            {caseStudies.heading}
          </h2>
          <p className="text-[15px] text-muted">{caseStudies.intro}</p>
        </div>
      </div>

      <div className="grid gap-[15px] px-[7.5px] sm:grid-cols-2 xl:grid-cols-3">
        {caseStudies.items.map((item) => (
          <a key={item.caption} href="#contact" className="group relative block overflow-hidden">
            <img
              src={item.image}
              alt={item.alt}
              width={720}
              height={560}
              loading="lazy"
              className="h-[300px] w-full object-cover xl:h-[480px]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-[22px] border border-gold-soft opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100"
            />
            <span className="pointer-events-none absolute inset-0 bg-ink/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100" />
            <span className="absolute inset-x-0 top-[40%] block text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100">
              <span className="block font-serif text-[30px] leading-[1.25] font-normal text-white">
                {item.caption}
              </span>
              <span className="mt-2 block font-sans text-[15px] text-white">{item.note}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
