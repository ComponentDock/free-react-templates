import { services } from '../data'

export function Services() {
  return (
    <section aria-label="We help companies" className="bg-light pb-[90px] pt-[110px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink">
            We help companies to find talents
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-body">
            We collect reviews from our users on hiring platforms so you can recruit with
            confidence.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, blurb }) => (
            <li
              key={title}
              className="rounded-[5px] bg-white p-8 text-center shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
            >
              <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Icon aria-hidden="true" className="size-7" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
