import { promiseBlocks } from '../data'

/** "/ OUR PROMISE AND VALUES" heading + promise section: photo block with a
 *  dark "50 Years of Experience" box bottom-right, and a right column with
 *  two "Our Promise" blocks and an outline-red Learn More button. */
export function PromiseSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-28 text-center lg:px-16">
        <h2 className="font-display text-4xl font-semibold uppercase text-ink">
          <span className="text-brand">/ </span>Our Promise and Values
        </h2>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-12 px-6 pb-24 lg:flex-row lg:px-16">
        <div className="relative lg:w-1/2">
          <img
            src="https://picsum.photos/seed/stalwart-promise/900/700"
            alt="Construction site with a crane at dusk"
            className="h-[420px] w-full object-cover lg:h-[700px]"
          />
          <div className="absolute bottom-14 right-16 hidden bg-night px-9 py-8 text-center lg:block">
            <p className="font-display text-[7.5rem] font-extrabold leading-none text-brand">50</p>
            <p className="mt-2 text-lg text-white">Years of Experience</p>
          </div>
        </div>

        <div className="flex flex-col gap-12 lg:w-1/2 lg:pl-16 lg:pt-5">
          {promiseBlocks.map((block, index) => (
            <div key={`${block.heading}-${index}`}>
              <h3 className="mb-4 font-display text-2xl font-semibold uppercase text-ink">
                {block.heading}
              </h3>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mb-4 text-base leading-relaxed text-body">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
          <a href="#about" className="btn-outline-red w-fit">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
