export function LatestTrending() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="font-body text-lg text-secondary">
          Thousands of recipes are waiting to be watched
        </p>
        <h2 className="mt-2 font-body text-3xl font-bold text-body">
          Discover latest trending recipes
        </h2>
        <a
          href="#recipes"
          className="mt-8 inline-block border-2 border-brand-pink px-8 py-3 font-body font-medium text-brand-pink transition-colors hover:bg-brand-pink hover:text-white"
        >
          View all Recipes
        </a>
      </div>
    </section>
  )
}
