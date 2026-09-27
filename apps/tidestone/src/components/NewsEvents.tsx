import { Calendar, MessageCircle, ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'Hotel companies tipped the scales',
    date: '20th Nov, 2018',
    comments: 3,
    description:
      'Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order.',
    image: 'tidestone-news1',
  },
  {
    title: 'Try your hand at inaugural industry crossword',
    date: '20th Nov, 2018',
    comments: 3,
    description:
      'Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order.',
    image: 'tidestone-news2',
  },
  {
    title: 'Hoteliers resolve to invest in guests',
    date: '20th Nov, 2018',
    comments: 3,
    description:
      'Not thoughts all exercise blessing Indulgence way everything joy alteration boisterous the attachment party we years to order.',
    image: 'tidestone-news3',
  },
]

export function NewsEvents() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink">News & Events</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="overflow-hidden bg-white shadow-md">
              <img
                src={`https://picsum.photos/seed/${post.image}/400/250`}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h4 className="mb-3 font-display text-lg font-semibold text-ink">
                  <a href="#" className="hover:text-brand">
                    {post.title}
                  </a>
                </h4>
                <ul className="mb-3 flex gap-4 text-xs text-mist">
                  <li className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {post.date}
                  </li>
                  <li className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" aria-hidden="true" />
                    {post.comments} Comments
                  </li>
                </ul>
                <p className="mb-4 text-sm leading-relaxed text-mist">{post.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-brand"
                >
                  Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
