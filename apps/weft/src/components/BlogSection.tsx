const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Art of Visual Storytelling',
    excerpt:
      'How strategic design choices can transform your brand narrative and create lasting impressions with your audience.',
    date: 'Sep 10, 2024',
    image: 'https://picsum.photos/seed/weft-blog1/600/400',
  },
  {
    id: 2,
    title: 'Design Trends for 2024',
    excerpt:
      'Exploring the emerging design trends that are shaping the creative industry this year.',
    date: 'Sep 5, 2024',
    image: 'https://picsum.photos/seed/weft-blog2/600/400',
  },
  {
    id: 3,
    title: 'Building a Brand Identity',
    excerpt:
      'A step-by-step guide to creating a cohesive and memorable brand identity from scratch.',
    date: 'Aug 28, 2024',
    image: 'https://picsum.photos/seed/weft-blog3/600/400',
  },
]

export function BlogSection() {
  return (
    <div className="bg-white px-6 py-16 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="relative mb-12 text-2xl font-medium text-heading lg:text-3xl">
          Latest Blog
          <span className="absolute bottom-[-10px] left-[2px] h-[2px] w-[30px] bg-accent" />
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="mb-4 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mb-2 text-xs text-text/60">{post.date}</p>
              <h3 className="mb-2 text-lg font-medium text-heading transition-colors group-hover:text-accent">
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed text-text">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
