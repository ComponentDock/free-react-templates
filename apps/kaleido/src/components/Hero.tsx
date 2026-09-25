export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-b from-primary-900 via-primary-700 to-brand">
      {/* Decorative jellyfish silhouette */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-[15%] h-48 w-48 text-white/10 sm:h-64 sm:w-64"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <ellipse cx="100" cy="80" rx="60" ry="50" />
        <path
          d="M60 100 Q50 160 40 200 M80 105 Q75 170 70 200 M100 108 Q100 175 100 200 M120 105 Q125 170 130 200 M140 100 Q150 160 160 200"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-[5%] bottom-[20%] h-32 w-32 text-white/5 sm:h-40 sm:w-40"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <ellipse cx="100" cy="80" rx="60" ry="50" />
        <path
          d="M60 100 Q50 160 40 200 M80 105 Q75 170 70 200 M100 108 Q100 175 100 200 M120 105 Q125 170 130 200 M140 100 Q150 160 160 200"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h1 className="font-display text-4xl font-black text-white sm:text-6xl">Kaleido UI Kit</h1>
        <p className="mt-6 text-lg font-normal text-white/80 sm:text-xl">
          An elegant collection of colors, typography, and components for your next project.
          Beautifully crafted, easy to use.
        </p>
      </div>
    </section>
  )
}
