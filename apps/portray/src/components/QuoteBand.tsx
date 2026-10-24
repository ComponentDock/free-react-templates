import { quote } from '../data'

/** Full-bleed neon band: photograph on the left 56%, oversized quote on the right 35%. */
export function QuoteBand() {
  return (
    <section aria-label="Testimonial" className="bg-neon">
      <div className="flex flex-col lg:h-[662px] lg:flex-row">
        <img
          src={quote.photo}
          alt="The designer at work by a window"
          className="h-[300px] w-full object-cover lg:h-full lg:w-[56%]"
        />
        <div className="flex items-center lg:w-[35%]">
          <blockquote className="px-[30px] py-[50px] text-[22px] leading-[1.35] font-light text-ink lg:py-[20px] lg:pr-[40px] lg:pl-[80px] lg:text-[33px] xl:text-[40px]">
            <span aria-hidden="true">“</span>
            {quote.text}
            <span aria-hidden="true">”</span>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
