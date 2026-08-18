import { features } from '../data'

export function WhyDifferent() {
  return (
    <section aria-label="Why we are different" className="bg-light pb-[90px] pt-[110px]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink">
            Why we are different
          </h2>
          <p className="mt-3 max-w-md text-body">
            We obsess over the hiring experience so job seekers and employers both win.
          </p>

          <ul className="mt-10 space-y-8">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-[5px] bg-white text-brand shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-body">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <img
          src="https://picsum.photos/seed/hiredly-about/700/560"
          alt="Recruiting team"
          className="w-full rounded-[5px] object-cover shadow-lg"
          loading="lazy"
        />
      </div>
    </section>
  )
}
