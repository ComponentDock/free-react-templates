import { cn } from '@free-react-templates/ui'

const POSTS = [
  {
    date: 'Oct. 30, 2024',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    image: 'https://picsum.photos/seed/portlight-blog-1/600/400',
  },
  {
    date: 'Oct. 28, 2024',
    title: 'The Big Oxford English Dictionary has no control about the blind texts',
    image: 'https://picsum.photos/seed/portlight-blog-2/600/400',
  },
  {
    date: 'Oct. 25, 2024',
    title: 'Far far away behind the word mountains far from the countries Vokalia',
    image: 'https://picsum.photos/seed/portlight-blog-3/600/400',
  },
] as const

interface BlogProps {
  className?: string
}

export function Blog({ className }: BlogProps) {
  return (
    <section className={cn('bg-paper py-20', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink">Recent Blog</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.date}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="mb-2 text-xs text-mist">{post.date}</p>
                <h3 className="text-sm font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
