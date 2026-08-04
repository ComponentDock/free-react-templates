export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <img
            src="https://picsum.photos/seed/leopet-about/560/520"
            alt="A happy dog resting in the care of a Leopet veterinarian"
            className="w-full max-w-lg rounded-3xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl dark:text-white">
            We care your pet As you care
          </h2>
          <p className="mt-6 text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400">
            Working alongside animal welfare charities, we run programmes that keep pets healthy and
            families together — because for many people a pet is their closest companion.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-strong"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  )
}
