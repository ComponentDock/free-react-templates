import { ABOUT } from '../data'

/* About — forest-green band with two garden photos, a large white heading,
   and two "Our Mission" blocks. */
export function About() {
  return (
    <section aria-label="About" id="about" className="bg-forest">
      <div className="mx-auto grid max-w-7xl items-end gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <div className="grid grid-cols-2 gap-5">
            {ABOUT.images.map((image) => (
              <img
                key={image}
                src={image}
                alt="Garden design photo"
                className="h-64 w-full rounded object-cover lg:h-80"
              />
            ))}
          </div>
          <h2 className="mt-12 max-w-xl font-display text-4xl font-semibold leading-tight text-paper lg:text-[48px]">
            {ABOUT.heading}
          </h2>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-sage-pale">{ABOUT.text}</p>
        </div>
        <div className="space-y-10">
          {ABOUT.missions.map((mission, i) => (
            <div key={i}>
              <h3 className="text-[28px] font-semibold text-paper">{mission.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-sage-pale">{mission.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
