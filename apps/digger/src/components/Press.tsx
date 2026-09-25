const articles = [
  {
    date: 'April 19, 2024',
    title: 'Digger Wins Safety Excellence Award',
    excerpt:
      'Our commitment to safety has been recognized with the prestigious Safety Excellence Award from the National Mining Association.',
  },
  {
    date: 'March 28, 2024',
    title: 'New Sustainable Mining Partnership Announced',
    excerpt:
      'We are proud to announce a new partnership focused on developing sustainable mining practices and reducing environmental impact.',
  },
  {
    date: 'February 15, 2024',
    title: 'Record-Breaking Quarter for Mining Operations',
    excerpt:
      'Digger achieves record production numbers while maintaining the highest safety and environmental standards in the industry.',
  },
]

export function Press() {
  return (
    <section id="press" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-heading mb-16">
          Press & News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.title}
              className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <p className="text-xs text-secondary uppercase mb-3">{article.date}</p>
              <h3 className="text-lg font-bold font-heading text-heading mb-3">{article.title}</h3>
              <p className="text-sm text-body leading-relaxed">{article.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
