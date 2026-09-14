import { ArrowRight } from 'lucide-react'

const POSTS = [
  {
    title: 'Signs Your Laptop Needs Professional Repair',
    excerpt:
      'Learn the warning signs that indicate your laptop needs expert attention before the problem gets worse.',
    date: '12 August, 2025',
    image: 'renovo-blog-1',
  },
  {
    title: 'How to Protect Your Phone from Water Damage',
    excerpt:
      'Prevention tips and immediate steps to take if your device comes into contact with water.',
    date: '5 August, 2025',
    image: 'renovo-blog-2',
  },
  {
    title: 'Data Backup Strategies Everyone Should Know',
    excerpt:
      'Essential backup practices to keep your files safe from hardware failures and accidents.',
    date: '28 July, 2025',
    image: 'renovo-blog-3',
  },
  {
    title: 'When to Repair vs Replace Your Device',
    excerpt:
      'A practical guide to help you decide whether repairing or replacing is the better choice.',
    date: '20 July, 2025',
    image: 'renovo-blog-4',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#222] mb-3">Latest posts from our blog</h2>
          <p className="text-[#777] max-w-xl mx-auto">
            Tips, guides, and news from the world of tech repair and maintenance
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POSTS.map((post) => (
            <article key={post.title} className="group">
              <div className="overflow-hidden rounded">
                <img
                  src={`https://picsum.photos/seed/${post.image}/400/250`}
                  alt={post.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-[#777] mt-3">{post.date}</p>
              <h5 className="font-semibold text-[#222] mt-2 mb-2 group-hover:text-[#988fff] transition-colors border-b border-gray-200 pb-2 uppercase text-sm">
                {post.title}
              </h5>
              <p className="text-sm text-[#777] mb-3">{post.excerpt}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#222] border border-[#988fff] rounded-full w-10 h-10 justify-center hover:bg-[#988fff] hover:text-white transition-all group-hover:w-auto group-hover:px-4 group-hover:gap-2 overflow-hidden"
              >
                <span className="hidden group-hover:inline">Details</span>
                <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
