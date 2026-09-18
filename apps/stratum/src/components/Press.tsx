const articles = [
  {
    date: 'Apr 19, 2025',
    title: 'How To Find Gold In Mining',
    description:
      'A comprehensive guide to modern gold prospecting techniques and the tools that make extraction more efficient than ever before.',
  },
  {
    date: 'Mar 12, 2025',
    title: 'Surface Mining Innovations',
    description:
      'Exploring the latest advances in surface mining technology and sustainable practices that are reshaping the industry.',
  },
  {
    date: 'Feb 08, 2025',
    title: 'Environmental Compliance in Mining',
    description:
      'Understanding the regulatory landscape and best practices for maintaining environmental compliance in mining operations.',
  },
]

export function Press() {
  return (
    <section id="press" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-heading uppercase text-black">Press</h2>
          </div>
          <div className="lg:w-2/3">
            <ul className="space-y-12">
              {articles.map((article) => (
                <li key={article.title}>
                  <span className="block text-[#b8b8b8] mb-2 text-sm">{article.date}</span>
                  <h3 className="text-lg">
                    <a href="#" className="text-black hover:text-[#ff8b00] transition-colors">
                      {article.title}
                    </a>
                  </h3>
                  <p className="text-[#939393] mt-2">{article.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
