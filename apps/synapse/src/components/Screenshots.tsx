const screenshots = [
  { src: 'https://picsum.photos/seed/synapse-screen-1/480/320', alt: 'Dashboard screenshot' },
  { src: 'https://picsum.photos/seed/synapse-screen-2/480/320', alt: 'Analytics screenshot' },
  { src: 'https://picsum.photos/seed/synapse-screen-3/480/320', alt: 'Reports screenshot' },
  { src: 'https://picsum.photos/seed/synapse-screen-4/480/320', alt: 'Team screenshot' },
] as const

export function Screenshots() {
  return (
    <section
      id="screenshots"
      aria-label="Screenshots"
      className="bg-white py-16 sm:py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Unique Screens that work perfectly
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {screenshots.map((shot) => (
            <img
              key={shot.alt}
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              className="aspect-[3/2] w-full rounded-xl object-cover shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
