import { treatments } from '../data'

export function Treatments() {
  return (
    <section id="treatment" className="scroll-mt-24 bg-mist py-[120px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[44px] font-normal leading-tight text-navy">
            Our treatment keeps you smile
          </h2>
          <p className="mt-4 text-lg text-body">
            Gentle, modern procedures for a healthy smile you can trust.
          </p>
        </div>
        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {treatments.map((treatment) => (
            <li key={treatment.title}>
              <article className="flex h-full flex-col items-center border border-navy/10 bg-white px-6 pb-11 pt-11 text-center transition-colors hover:border-mint">
                <treatment.icon
                  className="mb-[30px] h-14 w-14 stroke-[1.4] text-mint"
                  aria-hidden="true"
                />
                <h4 className="text-lg font-medium text-navy">{treatment.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-body">{treatment.text}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
