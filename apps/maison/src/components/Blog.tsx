import { CalendarDays, Heart, MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'Kitchen of the Future',
    blurb:
      'Smart appliances and warm materials are redefining how the busiest room in the house works.',
    seed: 'maison-blog-1',
  },
  {
    title: 'Lighting a Loft, Room by Room',
    blurb: 'A practical guide to layering ambient, task, and accent light across open-plan spaces.',
    seed: 'maison-blog-2',
  },
  {
    title: 'Materials That Age Beautifully',
    blurb: 'Why natural stone, timber, and brass earn their keep in homes designed for decades.',
    seed: 'maison-blog-3',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-brand-dark">
          We are Maison
        </p>
        <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-5xl">
          A Glimpse from Our Latest Blog
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="border border-black/10 bg-white dark:border-white/10 dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/640/400`}
                alt={post.title}
                className="aspect-[8/5] w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-mist dark:text-white/60">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" aria-hidden="true" /> Maison Studio on 29th
                    Oct, 2018
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Heart className="h-3 w-3" aria-hidden="true" /> 121 Likes
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" aria-hidden="true" /> 05 Comments
                  </span>
                </p>
                <h3 className="mt-4 font-display text-xl font-bold text-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist dark:text-white/60">
                  {post.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
