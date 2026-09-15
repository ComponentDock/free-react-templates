const posts = [
  {
    title: 'Understanding Your Rights in Criminal Defense Cases',
    image: 'https://picsum.photos/seed/counsel-blog1/600/400',
    date: 'Sep 10, 2026',
  },
  {
    title: 'How to Choose the Right Lawyer for Your Business',
    image: 'https://picsum.photos/seed/counsel-blog2/600/400',
    date: 'Sep 5, 2026',
  },
  {
    title: "Family Law: Protecting Your Children's Best Interests",
    image: 'https://picsum.photos/seed/counsel-blog3/600/400',
    date: 'Aug 28, 2026',
  },
] as const

export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-[#f7f7f7] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-[#1d2124]">Recent Blog</h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-md bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-smoke">{post.date}</p>
                <h3 className="mt-2 font-display text-base font-semibold text-[#1d2124] leading-snug">
                  <a href="#" className="transition-colors hover:text-primary-500">
                    {post.title}
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
