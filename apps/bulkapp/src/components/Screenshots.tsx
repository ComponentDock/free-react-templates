const shots = ['bulkapp-shot-1', 'bulkapp-shot-2', 'bulkapp-shot-3', 'bulkapp-shot-4'] as const

export function Screenshots() {
  return (
    <section id="screens" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-semibold text-gray-900 dark:text-white">
          Unique Screenshots
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shots.map((seed, index) => (
            <img
              key={seed}
              src={`https://picsum.photos/seed/${seed}/300/560`}
              alt={`BulkApp screenshot ${index + 1}`}
              className="w-full rounded-lg border border-gray-100 object-cover shadow-md dark:border-gray-800"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
