const keywords = ['UI Designer', 'Python', 'Developer', 'Web Design', 'Graphic Design']

export function TrendingKeywords() {
  return (
    <section className="py-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-3">
        <span className="text-sm font-semibold text-gray-500">Trending Keywords:</span>
        {keywords.map((kw) => (
          <a
            key={kw}
            href="#"
            className="inline-block border border-lime-400 text-lime-400 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-lime-400 hover:text-white transition-colors"
          >
            {kw}
          </a>
        ))}
      </div>
    </section>
  )
}
