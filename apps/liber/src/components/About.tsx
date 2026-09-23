export function About() {
  return (
    <section id="about" className="py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/liber-about/500/600"
              alt="Author portrait"
              className="w-full max-w-md rounded-lg object-cover shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold tracking-wide sm:text-4xl">
              Dr. Travor James
            </h2>
            <p className="mt-6 leading-relaxed text-mist">
              A bestselling author and adventurer, Dr. Travor James has spent two decades exploring
              remote corners of the globe and translating those experiences into gripping narratives
              that resonate with readers worldwide.
            </p>
            <p className="mt-4 leading-relaxed text-mist">
              His work spans fiction, travel writing, and educational guides — each piece infused
              with a passion for discovery and a deep respect for the cultures and landscapes he
              encounters.
            </p>
            <div className="mt-6">
              <svg
                viewBox="0 0 200 60"
                className="h-12 w-48 text-brand"
                aria-label="Author signature"
              >
                <path
                  d="M10 45 Q30 10 60 35 Q80 50 100 20 Q120 5 150 30 Q170 45 190 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
