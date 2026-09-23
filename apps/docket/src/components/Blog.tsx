interface BlogPost {
  image: string
  date: string
  author: string
  title: string
  description: string
}

const posts: BlogPost[] = [
  {
    image: 'https://picsum.photos/seed/docket-blog1/600/400',
    date: 'October 15, 2026',
    author: 'Admin',
    title: 'Understanding Your Rights in Criminal Defense',
    description:
      'A comprehensive guide to knowing and protecting your legal rights when facing criminal charges.',
  },
  {
    image: 'https://picsum.photos/seed/docket-blog2/600/400',
    date: 'September 28, 2026',
    author: 'Admin',
    title: 'How to Choose the Right Family Lawyer',
    description:
      'Key factors to consider when selecting a family law attorney to represent your interests.',
  },
  {
    image: 'https://picsum.photos/seed/docket-blog3/600/400',
    date: 'September 10, 2026',
    author: 'Admin',
    title: 'Business Legal Compliance Checklist',
    description:
      'Essential legal compliance steps every business owner should be aware of to avoid penalties.',
  },
]

export function Blog() {
  return (
    <section aria-labelledby="blog-heading" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="blog-heading" className="mb-12 text-center text-3xl font-bold text-[#212529]">
          Recent Blog
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded border border-gray-200 transition-shadow hover:shadow-lg"
            >
              <img src={post.image} alt="" className="h-48 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <p className="mb-3 text-xs text-[#b2b2b8]">
                  {post.date} / by {post.author}
                </p>
                <h3 className="mb-2 text-base font-bold text-[#212529]">{post.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#b2b2b8]">{post.description}</p>
                <a
                  href="#blog"
                  className="text-sm font-semibold text-[#007bff] transition-colors hover:text-[#0069d9]"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
