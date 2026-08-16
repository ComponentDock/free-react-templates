import { gallery } from '../data'

/* Staggered four-photo gallery. A negative top margin pulls it up over
   the bottom of the services band (source `.gallery-area` -295px). */
export function Gallery() {
  return (
    <section
      id="gallery"
      aria-label="Gallery"
      className="relative z-10 mx-auto -mt-20 max-w-7xl px-5 lg:-mt-[295px] lg:px-8"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-7">
          <img
            src={gallery[0]!}
            alt="Seasonal berries waiting at the Beanery counter"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:col-span-5 md:mt-20">
          <img
            src={gallery[1]!}
            alt="Fresh ingredients prepped in the Beanery kitchen"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:col-span-5">
          <img
            src={gallery[2]!}
            alt="Roasted coffee beans ready for the grinder"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:col-span-7 md:mt-20">
          <img
            src={gallery[3]!}
            alt="Latte art poured at the Beanery bar"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
