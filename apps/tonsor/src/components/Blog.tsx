import { Calendar, Eye, MessageSquare } from 'lucide-react'

const posts = [
  {
    src: 'https://picsum.photos/seed/tonsor-blog-1/600/400',
    date: '13th Dec',
    views: '15',
    comments: '04',
    title: 'Classic Haircuts That Never Go Out of Style',
    excerpt:
      'From the pompadour to the side part, some cuts have earned their place in history. Here is how to pick yours.',
  },
  {
    src: 'https://picsum.photos/seed/tonsor-blog-2/600/400',
    date: '09th Dec',
    views: '22',
    comments: '07',
    title: 'Beard Grooming Tips for Every Season',
    excerpt:
      'Humidity, cold air, and wind all change how your beard behaves. Keep it sharp all year with these simple habits.',
  },
  {
    src: 'https://picsum.photos/seed/tonsor-blog-3/600/400',
    date: '02nd Dec',
    views: '18',
    comments: '03',
    title: 'The Art of the Perfect Hot Towel Shave',
    excerpt:
      'Steam, oil, and a steady hand — our barbers break down the ritual behind the closest shave you will ever get.',
  },
  {
    src: 'https://picsum.photos/seed/tonsor-blog-4/600/400',
    date: '28th Nov',
    views: '31',
    comments: '09',
    title: 'Five Products Every Gentleman Needs',
    excerpt:
      'A good pomade, a boar-bristle brush, and three more essentials that belong in every grooming kit.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-24 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Latest From Blog
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-mist">
            Grooming guides, style notes, and shop news — written by the team behind the chairs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article key={post.title} className="group overflow-hidden rounded-md bg-night">
              <div className="overflow-hidden">
                <img
                  src={post.src}
                  alt=""
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/50">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Eye className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {post.views}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MessageSquare className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {post.comments}
                  </span>
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-white transition-colors group-hover:text-gold">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/60">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
