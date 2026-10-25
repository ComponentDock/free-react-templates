import { aboutSplit } from '../data'

/**
 * Gutters-free editorial split: the photograph runs flush to the left viewport
 * edge, the text column is inset 171px inside its half, and a halftone panel
 * sits behind the photograph's lower corner.
 */
export function AboutSplit() {
  return (
    <section aria-label="Inside the studio" className="bg-white py-[80px] md:py-[120px]">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-1/2">
          <div
            aria-hidden="true"
            className="halftone absolute bottom-[-112px] left-0 hidden h-[calc(100%+115px)] w-[calc(100%+115px)] md:block"
          />
          <img
            src="https://picsum.photos/seed/modeline-31/720/522?grayscale"
            alt="Rack of finished garments in the Modeline studio"
            className="relative h-[320px] w-full object-cover md:h-[522px]"
          />
        </div>

        <div className="px-6 pt-10 md:w-1/2 md:px-0 md:pt-0 md:pl-[171px]">
          <div className="md:max-w-[655px]">
            <h2 className="text-[32px] leading-[1.25] font-normal text-ink md:text-[48px]">
              {aboutSplit.heading}
            </h2>
            {aboutSplit.paragraphs.map((paragraph, index) => (
              <p key={index} className="mt-[25px]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
