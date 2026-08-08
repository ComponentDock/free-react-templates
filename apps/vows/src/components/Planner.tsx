export function Planner() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-primary-200 dark:border-primary-800" />
            <img
              src="https://picsum.photos/seed/vows-planner/600/750"
              alt="Isabella Sterling"
              className="relative w-full rounded-2xl object-cover shadow-xl"
              loading="lazy"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-500">
              About Us
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Meet Your Planner
            </h2>
            <h3 className="mt-6 font-serif text-2xl font-semibold text-gray-900 dark:text-white">
              Isabella Sterling
            </h3>
            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
              With over twelve years of experience creating breathtaking celebrations, Isabella has
              planned more than five hundred weddings — from intimate elopements to multi-day
              destination affairs. Her philosophy is simple: every couple deserves a day that feels
              unmistakably, beautifully theirs.
            </p>
            <p className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
              Featured in Vogue Weddings, Martha Stewart Weddings, and Brides Magazine
            </p>
            <p className="mt-6 border-l-2 border-primary-200 pl-4 text-gray-600 italic dark:border-primary-800 dark:text-gray-400">
              "A wedding should feel like the couple, not like a checklist. We design the day around
              your story — and handle every detail so you can live in the moment."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
