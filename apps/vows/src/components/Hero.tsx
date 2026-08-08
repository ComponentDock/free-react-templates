import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '500+', label: 'Weddings' },
  { value: '12', label: 'Years' },
  { value: '5-Star', label: 'Rated' },
] as const

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        {/* Decorative background elements */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <div className="animate-hero-float absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary-100/60 blur-3xl dark:bg-primary-900/20" />
          <div className="animate-hero-float-reverse absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-primary-100/40 blur-3xl dark:bg-primary-900/10" />
          <div className="animate-hero-float absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-primary-50/80 blur-3xl dark:bg-primary-900/10" />
        </div>

        <div className="container mx-auto px-4 py-20 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Decorative element: line + ampersand */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-primary-300 dark:bg-primary-700" />
              <span className="font-serif text-2xl text-primary-400 dark:text-primary-500">&</span>
              <span className="h-px w-12 bg-primary-300 dark:bg-primary-700" />
            </div>

            <h1 className="font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Your Dream Wedding Begins Here
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              We craft unforgettable celebrations filled with elegance, romance, and every magical
              detail you have ever imagined. Let us turn your love story into an extraordinary day.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink
                href="#contact"
                className="rounded-full bg-primary-600 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-primary-700"
              >
                Start Planning
              </ButtonLink>
              <ButtonLink
                href="#portfolio"
                className="rounded-full border border-gray-300 bg-white px-8 py-3.5 text-base font-medium text-gray-700 transition-colors hover:border-primary-600 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-primary-400 dark:hover:text-primary-400"
              >
                View Our Work
              </ButtonLink>
            </div>

            <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-3xl font-bold text-gray-900 lg:text-4xl dark:text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-primary-100 lg:mt-24 dark:ring-gray-800">
            <img
              src="https://picsum.photos/seed/vows-venue/1200/600"
              alt="Beautiful wedding venue"
              className="aspect-[2/1] w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Wave divider into the stats band */}
      <div className="relative -mt-1 text-gray-50 dark:text-gray-900" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="currentColor" />
        </svg>
      </div>
    </>
  )
}
