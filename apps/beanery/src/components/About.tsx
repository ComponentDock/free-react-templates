import { about, hoursBlocks } from '../data'

/* Cream about section: serif headline + paragraph + signature line on
   the left, three hours blocks on the right, and a full-width photo
   below. */
export function About() {
  return (
    <section id="about" aria-label="About Beanery" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-snug text-navy lg:text-[44px]">
              {about.heading}
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed">{about.paragraph}</p>
            <p className="mt-10 font-display text-xl italic text-copper">{about.signature}</p>
          </div>

          <div className="lg:pt-6">
            {hoursBlocks.map((block) => (
              <div key={block.title} className="mb-10 flex flex-col gap-1">
                <h3 className="text-lg font-bold text-navy">{block.title}</h3>
                <p className="text-base">{block.days}</p>
                <p className="text-base font-medium text-copper">{block.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <img
            src={about.image}
            alt="Two guests with coffee and notebooks at a wooden Beanery table"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
