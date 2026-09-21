const articles = [
  {
    title: 'Every Single Way You Can Wear Pastel Makeup This Spring',
    author: 'Jeff Rodriguez',
    image: 'https://picsum.photos/seed/smokeshade-blog1/600/400',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Everything Coming to Netflix Canada in May 2019',
    author: 'Aaron Russell',
    image: 'https://picsum.photos/seed/smokeshade-blog2/600/400',
    excerpt:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

export function Blog() {
  return (
    <section className="bg-[#191919] py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">From Our Blog</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {articles.map((article) => (
            <div key={article.title} className="overflow-hidden rounded-lg bg-[#222222]">
              <img src={article.image} alt={article.title} className="h-64 w-full object-cover" />
              <div className="p-6">
                <a
                  href="#"
                  className="mb-2 block text-lg font-bold text-white hover:text-[#e32879]"
                >
                  {article.title}
                </a>
                <p className="mb-4 text-sm text-[#b3b3b3]">{article.excerpt}</p>
                <p className="text-sm text-[#e32879]">{article.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
