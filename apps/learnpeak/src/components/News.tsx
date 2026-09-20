const POSTS = [
  {
    date: 'April 02, 2025',
    title: 'Why Choose Online Education?',
    author: 'William Smith',
    img: 'learnpeak-news-1',
  },
  {
    date: 'April 02, 2025',
    title: 'Books, Kindle or Tablet?',
    author: 'William Smith',
    img: 'learnpeak-news-2',
  },
  {
    date: 'April 02, 2025',
    title: 'Tips for Online Learning Success',
    author: 'Sarah Johnson',
    img: 'learnpeak-news-3',
  },
]

export function News() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-dark mb-12 text-center">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <div
              key={post.title}
              className="bg-white group cursor-pointer hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.img}/600/400`}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3 bg-brand text-white text-xs font-semibold px-3 py-1">
                  {post.date}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-light text-sm mt-auto">By {post.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
