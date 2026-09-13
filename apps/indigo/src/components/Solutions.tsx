export function Solutions() {
  return (
    <section className="bg-magnolia py-16 sm:py-20 lg:py-28" data-testid="solutions">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Illustration */}
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/indigo-solution/520/360"
              alt="Connected solutions"
              className="w-full max-w-md rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Copy */}
          <div>
            <h2 className="font-display text-3xl font-bold text-heading sm:text-4xl">
              Simple Solutions for Complex Connections
            </h2>
            <p className="mt-5 text-base text-body">
              Integrate your entire tech stack with a single platform. Our solution connects your
              tools, automates workflows, and gives your team a unified view of every interaction.
            </p>
            <a
              href="#features"
              className="mt-8 inline-block rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
