const posts = [
  {
    title: '5 Habits That Will Transform Your Morning Routine',
    date: 'March 10, 2024',
    excerpt:
      'Start your day with intention and purpose. Discover the five morning habits that successful coaches recommend for a productive and fulfilling day.',
    image: 'https://picsum.photos/seed/northstar-blog-1/600/400',
  },
  {
    title: 'The Power of Mindfulness in Everyday Life',
    date: 'February 25, 2024',
    excerpt:
      "Mindfulness isn't just for meditation sessions. Learn how to bring awareness and presence into every moment of your daily routine for greater happiness.",
    image: 'https://picsum.photos/seed/northstar-blog-2/600/400',
  },
  {
    title: 'Setting Goals That Actually Stick',
    date: 'February 10, 2024',
    excerpt:
      "Why do most New Year's resolutions fail by February? Learn our proven framework for setting and achieving goals that create lasting change in your life.",
    image: 'https://picsum.photos/seed/northstar-blog-3/600/400',
  },
  {
    title: "Overcoming Fear: A Coach's Perspective",
    date: 'January 28, 2024',
    excerpt:
      'Fear is the biggest obstacle standing between you and your dreams. Discover practical strategies to face your fears and turn them into stepping stones.',
    image: 'https://picsum.photos/seed/northstar-blog-4/600/400',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-16" aria-label="Blog">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-[#212529] md:text-4xl font-heading">
          Our Blog
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[#737373]">
          Insights, tips, and stories to inspire your personal growth journey.
        </p>
        <div className="grid gap-8 lg:grid-cols-2">
          {posts.map((post) => (
            <article key={post.title} className="flex flex-col gap-4 sm:flex-row">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full shrink-0 rounded object-cover sm:w-48"
              />
              <div>
                <p className="mb-1 text-sm text-[#737373]">{post.date}</p>
                <h3 className="mb-2 text-lg font-bold text-[#212529]">{post.title}</h3>
                <p className="mb-3 text-sm text-[#333333] leading-relaxed">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-sm font-bold text-primary transition-colors hover:text-[#0265c5]"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
