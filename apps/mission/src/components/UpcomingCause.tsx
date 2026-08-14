import { cause } from '../data'

/** "Upcoming Cause" panel that overlaps the hero (negative top margin):
 *  kicker + title, Target/Raised amount boxes, photo with a 60% progress
 *  bar and circular percentage badge, and a Donate Now button. */
export function UpcomingCause() {
  return (
    <section
      id="causes"
      aria-label="Upcoming cause"
      className="relative z-10 -mt-32 bg-white pb-[115px] lg:-mt-[130px]"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm tracking-[2px] text-brand">{cause.kicker}</p>
          <h2 className="font-serif text-3xl font-normal leading-[1.2] text-maroon lg:text-[46px] lg:leading-[56px]">
            {cause.title}
          </h2>
          <p className="mb-11 mt-3 text-base leading-7 text-ink">{cause.paragraph}</p>

          <div className="mb-8 flex flex-wrap items-end gap-6">
            <div>
              <span className="mb-[10px] block text-sm capitalize text-label">Target :</span>
              <span className="inline-block bg-rose px-[26px] py-3 font-sans text-xl text-brand">
                {cause.target}
              </span>
            </div>
            <div>
              <span className="mb-[10px] block text-sm capitalize text-label">Raised :</span>
              <span className="inline-block bg-rose px-[26px] py-3 font-sans text-xl text-brand">
                {cause.raised}
              </span>
            </div>
            <a
              href="#donate"
              onClick={(event) => event.preventDefault()}
              className="inline-block bg-brand px-[26px] py-[9px] text-xl text-white transition-colors hover:bg-rose hover:text-brand"
            >
              Donate Now
            </a>
          </div>
        </div>

        <div className="pb-[30px]">
          <div className="relative">
            <img src={cause.image} alt="" className="h-[420px] w-full object-cover grayscale" />
            <div
              role="progressbar"
              aria-valuenow={cause.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Cause funding progress"
              className="relative mt-0 h-[10px] w-full bg-transparent"
            >
              <div className="relative h-full bg-brand" style={{ width: `${cause.progress}%` }}>
                <span className="absolute -right-[30px] -top-[25px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-brand text-base font-bold text-white">
                  <span className="relative left-[2px]">{cause.progress}%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
