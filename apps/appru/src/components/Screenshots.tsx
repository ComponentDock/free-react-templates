const screens = [1, 2, 3, 4] as const

export function Screenshots() {
  return (
    <section id="screens" className="bg-paper py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Featured Screens
          </h2>
          <p className="mt-4 leading-relaxed text-muted dark:text-gray-400">
            A look inside Appru — clean screens designed to keep every task one tap away.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {screens.map((screen) => (
            <img
              key={screen}
              src={`https://picsum.photos/seed/appru-screen-${screen}/400/800`}
              alt={`Appru screen ${screen}`}
              className="w-full rounded-2xl border border-gray-100 shadow-lg dark:border-gray-800"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
