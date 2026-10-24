import { cn } from '@free-react-templates/ui'
import { expertise } from '../data'

/** Solid neon box of three stacked headings with a rotated notch, plus two grey paragraphs. */
export function Expertise() {
  return (
    <section id="expertise" aria-label="Expertise" className="bg-white py-[70px] lg:py-[120px]">
      <div className="mx-auto max-w-[1320px] px-4">
        <h2 className="mb-14 text-center text-[24px] text-ink md:text-[31px] lg:text-[40px]">
          {expertise.heading}
        </h2>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="relative bg-neon px-4 py-[60px] lg:w-1/2 lg:px-[65px] lg:pb-[20px]">
            <div
              aria-hidden="true"
              className="absolute top-[80px] -right-[15px] hidden size-[27px] rotate-45 bg-white lg:block"
            />
            {expertise.lead.map((item) => (
              <h3
                key={item.title}
                className={cn(
                  'mb-[37px] text-[26px] leading-[1.3] md:text-[32px] lg:text-[40px]',
                  item.muted ? 'text-ink/30' : 'text-ink',
                )}
              >
                {item.title}
              </h3>
            ))}
          </div>
          <div className="lg:w-1/2 lg:pl-[30px]">
            {expertise.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mb-6 text-[18px] leading-[1.5] text-body last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
