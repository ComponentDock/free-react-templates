import { Clock } from 'lucide-react'

const posts = [
  {
    tag: 'Marketing',
    title: 'Improve Your Business Cards And Enhance Your Sales',
    date: '19th May, 2025',
    img: 'convene-blog-1',
    large: true,
  },
  {
    tag: 'Experience',
    title: 'All users on MySpace will know that there are millions of people out there.',
    date: '19th May, 2025',
    img: 'convene-blog-2',
  },
  {
    tag: 'Marketing',
    title: 'A Pocket PC is a handheld computer, which features many of the same capabilities.',
    date: '19th May, 2025',
    img: 'convene-blog-3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Latest News
          </h2>
          <p className="mt-3 text-mist dark:text-gray-400">
            Do not miss anything topic about the event
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <div
              key={post.title}
              className={`group relative overflow-hidden rounded-lg ${post.large ? 'lg:row-span-2' : ''}`}
            >
              <img
                src={`https://picsum.photos/seed/${post.img}/800/${post.large ? 800 : 400}`}
                alt={post.title}
                className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${post.large ? 'h-64 lg:h-full' : 'h-48'}`}
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6">
                <span className="mb-2 inline-block w-fit rounded-full bg-gradient-to-r from-brand to-brand-pink px-3 py-1 text-xs font-semibold text-white">
                  {post.tag}
                </span>
                <h4
                  className={`font-display font-semibold text-white ${post.large ? 'text-xl' : 'text-base'}`}
                >
                  {post.title}
                </h4>
                <span className="mt-2 inline-flex items-center gap-1 text-xs text-gray-300">
                  <Clock className="h-3 w-3" /> {post.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
