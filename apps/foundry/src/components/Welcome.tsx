export function Welcome() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex min-h-[280px] items-center justify-center bg-brand p-10 text-center">
            <p className="font-display text-6xl font-bold uppercase leading-none text-ink">
              25
              <span className="mt-2 block text-2xl font-semibold tracking-[0.2em]">
                Years Experience
              </span>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Welcome!</p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white">
              Secrets of Success of Our Projects
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mist dark:text-gray-400">
              Since 1980 our team has been planning, designing, and building landmark construction
              projects. From private apartments to mega malls, we bring every kind of structure to
              life with precision and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
