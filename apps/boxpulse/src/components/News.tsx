const blogPosts = [
  {
    num: '01',
    author: 'Robert Williams',
    category: 'Design',
    excerpt:
      'Exploring the latest trends in digital design and how they shape user experiences across platforms.',
  },
  {
    num: '02',
    author: 'John Doe',
    category: 'Marketing',
    excerpt:
      'Strategic approaches to building a compelling online presence that converts visitors into customers.',
  },
  {
    num: '03',
    author: 'Jane Smith',
    category: 'Development',
    excerpt:
      'The future of web development: emerging technologies and best practices for modern applications.',
  },
  {
    num: '04',
    author: 'Robert Williams',
    category: 'Branding',
    excerpt:
      'Creating memorable brand identities that resonate with audiences and stand the test of time.',
  },
]

const testimonials = [
  {
    quote:
      'Their creative vision transformed our brand completely. The results exceeded all expectations.',
    author: 'Sarah Johnson',
    company: 'TechCorp',
  },
  {
    quote:
      'Working with this team was a game-changer for our digital presence. Truly exceptional work.',
    author: 'Michael Chen',
    company: 'InnovateCo',
  },
  {
    quote:
      'Professional, creative, and results-driven. They delivered exactly what we needed and more.',
    author: 'Emily Davis',
    company: 'GrowthLab',
  },
]

export function News() {
  return (
    <section id="news" className="bg-brand-dark py-20">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="shrink-0 md:w-1/4">
            <span className="block font-heading text-8xl font-bold text-white/10 md:text-[120px]">
              04
            </span>
            <h2 className="mt-2 -translate-y-4 font-heading text-2xl font-bold uppercase tracking-wider text-white">
              Stories
            </h2>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {blogPosts.map((post) => (
                <article key={post.num} className="border-l-2 border-brand-pink/30 pl-6">
                  <span className="mb-2 block font-heading text-4xl font-bold text-white/10">
                    {post.num}
                  </span>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-heading text-xs font-medium text-white/60">
                      {post.author}
                    </span>
                    <span className="rounded bg-brand-pink/20 px-2 py-0.5 font-heading text-[10px] font-medium uppercase tracking-wider text-brand-pink">
                      {post.category}
                    </span>
                  </div>
                  <p className="font-accent text-sm leading-relaxed text-white/70">
                    {post.excerpt}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button
                type="button"
                className="border-2 border-brand-pink px-8 py-3 font-heading text-sm font-bold uppercase tracking-wider text-brand-pink transition-colors hover:bg-brand-pink hover:text-white"
              >
                Go To Blog
              </button>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {testimonials.map((t) => (
                <blockquote key={t.author} className="text-center">
                  <p className="mb-4 font-accent text-sm italic leading-relaxed text-white/80">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer>
                    <cite className="not-italic">
                      <span className="block font-heading text-xs font-bold text-white">
                        {t.author}
                      </span>
                      <span className="block font-heading text-[10px] uppercase tracking-wider text-text-light">
                        {t.company}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
