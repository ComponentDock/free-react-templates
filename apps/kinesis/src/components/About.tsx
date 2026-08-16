import { aboutPoints } from '../data'

/* Two-column about section: image on the left, red eyebrow + uppercase
   heading + paragraph + three icon list items on the right. */
export function About() {
  return (
    <section
      id="about"
      aria-label="About Kinesis"
      className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <img
            src="https://picsum.photos/seed/kinesis-about/640/560"
            alt="Athlete training at the Kinesis studio"
            className="h-auto w-full object-cover"
          />
        </div>
        <div>
          <span className="text-[13px] font-bold uppercase tracking-wide text-primary">
            Information About Us
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight text-heading lg:text-[34px]">
            Kinesis A Crossfit <span className="text-primary">Workout</span> Training Center
          </h2>
          <p className="mt-5 leading-relaxed text-neutral-600">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <ul className="mt-8 space-y-4">
            {aboutPoints.map((point) => (
              <li key={point.label} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary text-white">
                  <point.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-display text-lg font-semibold uppercase text-heading">
                  {point.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
