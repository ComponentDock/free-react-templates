import { Calendar, MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'Designing Accessible Interfaces at Scale',
    excerpt:
      'Lessons learned building a design system that prioritizes accessibility without compromising on aesthetics.',
    date: 'Aug 15, 2032',
    comments: 8,
    seed: 'curriculo-blog1',
  },
  {
    title: 'The Future of Product Design in AI',
    excerpt:
      'How artificial intelligence is reshaping the way designers approach user research and prototyping workflows.',
    date: 'Jul 28, 2032',
    comments: 12,
    seed: 'curriculo-blog2',
  },
  {
    title: 'From Figma to Production: A Workflow Guide',
    excerpt:
      'A step-by-step guide to bridging the gap between design files and production-ready React components.',
    date: 'Jun 10, 2032',
    comments: 5,
    seed: 'curriculo-blog3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-extralight text-gray-800">
          Blog on <strong className="font-bold">Medium</strong>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-lg">
              <a href="#">
                <img
                  src={`https://picsum.photos/seed/${p.seed}/600/300`}
                  alt={p.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </a>
              <div className="p-5">
                <h3 className="mb-2 text-base font-bold text-gray-800">
                  <a href="#" className="hover:text-brand-primary">
                    {p.title}
                  </a>
                </h3>
                <p className="mb-4 text-sm text-gray-600">{p.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> {p.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" /> {p.comments} Comments
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
