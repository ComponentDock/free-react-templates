const posts = [
  {
    category: 'Gym & Fitness',
    title: 'How to Start Your Fitness Journey the Right Way',
    image: 'https://picsum.photos/seed/justly-blog1/600/400',
  },
  {
    category: 'Nutrition',
    title: 'Essential Supplements Every Athlete Should Know About',
    image: 'https://picsum.photos/seed/justly-blog2/600/400',
  },
]

export function Blog() {
  return (
    <section className="bg-surface-light py-20" data-testid="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl text-white text-center uppercase mb-12">From Blog</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.title} className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <span className="text-brand text-xs uppercase tracking-[0.2em] font-heading">
                {post.category}
              </span>
              <h3 className="font-heading text-xl text-white mt-2 group-hover:text-brand transition-colors">
                {post.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
