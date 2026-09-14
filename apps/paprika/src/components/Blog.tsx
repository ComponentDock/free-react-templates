const BLOG_POSTS = [
  {
    title: 'The Art of Wood-Fired Cooking',
    category: 'Recipes',
    date: 'Feb 11, 2025',
    comments: 3,
    image: 'paprika-blog-1',
  },
  {
    title: 'Behind the Kitchen: Our Chef Stories',
    category: 'News',
    date: 'Jan 28, 2025',
    comments: 0,
    image: 'paprika-blog-2',
  },
  {
    title: 'Seasonal Ingredients We Love',
    category: 'Articles',
    date: 'Jan 15, 2025',
    comments: 5,
    image: 'paprika-blog-3',
  },
]

export function Blog() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="font-[family-name:var(--font-cursive)] text-3xl text-[#b10400]">News</h3>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl uppercase text-[#333] mt-1">
            Recent Blog
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.title}
              className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={`https://picsum.photos/seed/${post.image}/400/250`}
                alt={post.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <span className="text-xs text-[#b10400] font-semibold uppercase">
                  {post.category}
                </span>
                <h4 className="font-[family-name:var(--font-heading)] text-lg text-[#333] mt-2 mb-2">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span>/</span>
                  <span>{post.comments === 0 ? 'No Comments' : `${post.comments} Comments`}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
