import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '150+', label: 'Projects' },
  { value: '120+', label: 'Clients' },
  { value: '15+', label: 'Awards' },
] as const

export function About() {
  return (
    <section aria-label="About" className="bg-mist py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-start">
          <img
            src="https://picsum.photos/seed/talon-about/560/420"
            alt="Team working together"
            className="h-auto w-full max-w-md rounded-md shadow-xl"
            loading="lazy"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl font-semibold leading-snug text-ink dark:text-gray-100">
            About Us
          </h2>
          <p className="mt-6 leading-relaxed text-smoke dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-primary-400">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-smoke dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <ButtonLink
            href="#services"
            className="mt-9 inline-flex rounded-md bg-primary-400 px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-500"
          >
            Learn More
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
