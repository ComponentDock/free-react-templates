import { ButtonLink } from '@free-react-templates/ui'

const aboutImage = 'https://picsum.photos/seed/manorly-about/900/1100'

const counters = [
  { value: '100', label: 'project' },
  { value: '300', label: 'clients' },
  { value: '150', label: 'member' },
]

export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full border-2 border-brand" aria-hidden="true" />
          <img
            src={aboutImage}
            alt="Estate agent handing over the keys of a city apartment"
            className="relative h-[420px] w-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            <span>about</span>
            <span className="h-px w-12 bg-ink/30" aria-hidden="true" />
            <span>us</span>
          </p>
          <h2 className="mt-6 text-3xl font-semibold leading-snug text-ink sm:text-4xl">
            Hello City We are leader in <span className="text-brand">properties.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ips eiusmod tempor
            incididunt ut labore et dolore magna aliqua isuspendisse ultrices gravida. Risus.
          </p>
          <ButtonLink
            href="#projects"
            className="mt-8 rounded-md bg-panel px-10 py-4 text-base font-bold uppercase text-ink hover:bg-brand hover:text-white"
          >
            Learn More
          </ButtonLink>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-panel pt-8">
            {counters.map((counter) => (
              <div key={counter.label}>
                <p className="text-4xl font-semibold text-ink">{counter.value}</p>
                <p className="mt-1 text-sm uppercase tracking-wide text-muted">{counter.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
