import { Trophy } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { awards } from '../data'

/** Brand / awards section (source: section.brand-area, bg #0e0e0e, extra
 *  200px bottom padding): left column with the "Take a look at our
 *  achivment" heading, a paragraph and a square GET START button; right side
 *  with six bordered award cards (lucide trophy + "Behance award" +
 *  "Prize 2019"). */
export function Awards() {
  return (
    <section id="awards" className="bg-coal pb-[200px] pt-[65px] lg:pt-[195px]">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-[15px] lg:grid-cols-12 lg:px-[30px]">
        <div className="lg:col-span-6">
          <h2 className="mb-[17px] font-heading text-[31px] font-semibold uppercase leading-[1.3] text-white lg:text-[50px]">
            {awards.title}
          </h2>
          <p className="mb-[30px] max-w-md text-white">{awards.text}</p>
          <ButtonLink
            href="#awards"
            className="rounded-none bg-brand px-[44px] py-[27px] font-heading text-base font-normal uppercase tracking-[1px] text-white hover:bg-brand-hover"
          >
            {awards.cta}
          </ButtonLink>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-6 lg:grid-cols-3 lg:gap-0">
          {awards.items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex flex-col items-center border border-[#2e2e2e] px-6 py-[50px] text-center"
            >
              <Trophy className="mb-4 h-10 w-10 text-brand" aria-hidden="true" />
              <span className="text-lg font-medium uppercase text-white">{item.name}</span>
              <span className="text-lg font-medium uppercase text-white">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
