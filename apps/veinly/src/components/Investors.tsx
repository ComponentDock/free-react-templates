import { investors } from '../data'

/** Investors section: two background-photo tiles on the left (2-up on
 *  desktop, stacked on mobile) and a right content column headed "Our
 *  Investors" with a paragraph and a coral-outline "Get in touch" button. */
export function Investors() {
  return (
    <section id="investors-section" data-testid="investors" className="bg-white py-28">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">
          <div className="grid flex-1 grid-cols-2 gap-0 max-lg:h-[400px]">
            <div
              data-testid="investors-tile"
              className="bg-cover bg-center max-lg:h-full"
              style={{
                backgroundImage: "url('https://picsum.photos/seed/veinly-invest-1/800/1000')",
              }}
              aria-hidden="true"
            />
            <div
              data-testid="investors-tile"
              className="bg-cover bg-center max-lg:h-full"
              style={{
                backgroundImage: "url('https://picsum.photos/seed/veinly-invest-2/800/1000')",
              }}
              aria-hidden="true"
            />
          </div>
          <div className="lg:w-1/2 lg:p-5">
            <h2 className="text-3xl font-bold text-brand md:text-[3rem]">{investors.heading}</h2>
            <p className="mt-4 max-w-md text-body">{investors.paragraph}</p>
            <a
              href="#contact-section"
              className="mt-6 inline-block rounded border-2 border-brand px-5 py-2 text-base font-bold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
