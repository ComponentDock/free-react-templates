export function Hero() {
  return (
    <section
      data-testid="hero"
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-brand-50 to-white py-20 sm:py-28 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-widest text-brand-500 dark:text-brand-400">
            Welcome to my portfolio
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            My name is Alex.
            <br />
            <span className="text-brand-400">Digital Product Designer</span>
          </h1>
          <p className="max-w-md text-lg text-gray-600 dark:text-gray-300">
            I create beautiful, user-centered digital experiences that solve real problems and
            delight people along the way.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="#work"
              className="rounded-full bg-brand-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-brand-400 hover:text-brand-500 dark:border-gray-600 dark:text-gray-300 dark:hover:border-brand-400 dark:hover:text-brand-400"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <img
              src="https://picsum.photos/seed/alex-profile/400/500"
              alt="Alex — Digital Product Designer"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-brand-400/20 blur-2xl" />
          <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-brand-300/20 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
