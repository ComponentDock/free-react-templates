import { ChevronRight } from 'lucide-react'

const posts = [
  {
    category: 'Design',
    date: '24/10/2017',
    title: 'Design Inspiration',
    author: 'Loredana Papp',
    comments: 3,
  },
  {
    category: 'Design',
    date: '24/10/2017',
    title: 'Gradients are in!',
    author: 'Loredana Papp',
    comments: 3,
  },
  {
    category: 'Design',
    date: '24/10/2017',
    title: 'All about color',
    author: 'Loredana Papp',
    comments: 3,
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <div key={p.title} className="group">
              <h6 className="text-sm font-semibold text-smoke">
                <a href="#" className="transition-colors hover:text-brand-pink">
                  {p.category}
                </a>
                <span className="mx-2">|</span>
                <a href="#" className="transition-colors hover:text-brand-pink">
                  {p.date}
                </a>
              </h6>
              <h4 className="my-3 text-xl font-bold text-ink">
                <a href="#" className="transition-colors hover:text-brand-pink">
                  {p.title}
                </a>
              </h4>
              <h6 className="text-sm text-smoke">
                by{' '}
                <a href="#" className="transition-colors hover:text-brand-pink">
                  {p.author}
                </a>
                <span className="mx-2">|</span>
                <a href="#" className="transition-colors hover:text-brand-pink">
                  {p.comments} comments
                </a>
              </h6>
              <p className="my-4 text-sm leading-relaxed text-smoke">
                Litora torquent per conubia nostra, per inceptos himenaeos. Fusce quis tempus elit.
                Class aptent taciti orquent per conubia nostra inceptos ...
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded bg-gradient-to-r from-brand-orange to-brand-pink p-3 text-white transition-opacity hover:opacity-80"
                aria-label={`Read more about ${p.title}`}
              >
                <ChevronRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
