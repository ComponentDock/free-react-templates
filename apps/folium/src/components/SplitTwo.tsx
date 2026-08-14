import { splitTwo } from '../data'

/** Second split section on a #fafafa band: two text blocks on the left and
 *  an image with an overlapping mint quote block on the right. */
export function SplitTwo() {
  return (
    <section id="quote" aria-label="Why choose us" className="bg-band">
      <div className="grid items-center gap-0 lg:grid-cols-12">
        <div className="px-6 py-16 lg:col-span-5 lg:col-start-2 lg:px-0">
          <div>
            {splitTwo.blocks.map((block) => (
              <div key={block.heading} className="mb-8">
                <h3 className="mb-2 text-xl font-medium text-primary">{block.heading}</h3>
                <p className="text-base font-light leading-relaxed text-gray-700">{block.copy}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:col-start-7">
          <div
            className="h-[420px] w-full bg-cover bg-center lg:h-[500px]"
            style={{ backgroundImage: `url(${splitTwo.image})` }}
          />
          <div className="relative z-10 mx-6 -mt-20 bg-primary px-8 py-10 lg:-ml-16 lg:mt-0 lg:ml-0 lg:px-12 lg:py-16">
            <p className="mb-4 text-2xl font-light leading-snug text-black">{splitTwo.quote}</p>
            <p className="text-base text-black">{splitTwo.author}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
