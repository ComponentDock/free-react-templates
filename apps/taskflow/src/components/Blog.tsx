import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'Creative Design Trends for 2026',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    date: 'March 20, 2026',
    category: 'Design',
    comments: 12,
    image: 'https://picsum.photos/seed/taskflow-blog1/400/250',
  },
  {
    title: 'Building Scalable Web Applications',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    date: 'March 15, 2026',
    category: 'Development',
    comments: 8,
    image: 'https://picsum.photos/seed/taskflow-blog2/400/250',
  },
  {
    title: 'The Art of Brand Storytelling',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    date: 'March 10, 2026',
    category: 'Branding',
    comments: 5,
    image: 'https://picsum.photos/seed/taskflow-blog3/400/250',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[2px] text-gray-400">
            Read
          </span>
          <h2 className="text-2xl font-bold text-black">Recent Blog</h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded bg-white shadow-sm">
              <div
                className="h-[200px] bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-[11px] text-gray-400">
                  <span>{post.date}</span>
                  <span>&middot;</span>
                  <span className="text-brand-400">{post.category}</span>
                  <span>&middot;</span>
                  <span>{post.comments} comments</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-black">{post.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-500">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-[1px] text-brand-400 hover:text-brand-500"
                >
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
