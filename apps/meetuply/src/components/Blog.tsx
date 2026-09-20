const POSTS = [
  {
    date: { day: '15', month: 'Dec, 2024' },
    title: 'Announcing the 2025 Conference Schedule',
    excerpt:
      'We are excited to reveal the full schedule for Developer Conference 2025 with over 150 sessions.',
    image: 'https://picsum.photos/seed/meetuply-blog1/800/500',
  },
  {
    date: { day: '10', month: 'Dec, 2024' },
    title: 'Meet Our Keynote Speakers',
    excerpt: 'This year we have an incredible lineup of industry leaders sharing their insights.',
    image: 'https://picsum.photos/seed/meetuply-blog2/800/500',
  },
  {
    date: { day: '05', month: 'Dec, 2024' },
    title: 'Early Bird Tickets Now Available',
    excerpt: 'Grab your tickets early and save up to 40% on conference passes for all 4 days.',
    image: 'https://picsum.photos/seed/meetuply-blog3/800/500',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-light-gray py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-center text-sm font-light uppercase tracking-widest text-gray-400">
          Recent
        </h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-charcoal">Recent Blog</h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-sm bg-white shadow-sm">
              <div className="relative">
                <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
                <div className="absolute bottom-0 left-4 flex flex-col items-center rounded-sm bg-brand px-3 py-2 text-white">
                  <span className="text-2xl font-bold leading-none">{post.date.day}</span>
                  <span className="text-[10px] uppercase">{post.date.month}</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="mb-2 text-lg font-semibold text-charcoal">{post.title}</h4>
                <p className="text-sm leading-relaxed text-body">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
