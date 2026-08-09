import { CalendarDays } from 'lucide-react'

const posts = [
  {
    title: 'Is wellness the new luxury',
    date: 'Sep 25, 2019',
    image: 'https://picsum.photos/seed/serenity-blog-1/800/500',
  },
  {
    title: 'Spa rituals for a calmer mind',
    date: 'Sep 12, 2019',
    image: 'https://picsum.photos/seed/serenity-blog-2/800/500',
  },
  {
    title: 'Why regular massage matters',
    date: 'Aug 30, 2019',
    image: 'https://picsum.photos/seed/serenity-blog-3/800/500',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-fog transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Blog</span>
          <h2 className="mt-3 text-3xl font-light text-ink dark:text-white sm:text-4xl">
            Recent Posts
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden bg-white transition-shadow hover:shadow-lg dark:bg-gray-800"
            >
              <img src={post.image} alt="" className="h-52 w-full object-cover" />
              <div className="p-6">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {post.date}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-mist dark:text-white/60">
                  A small river named Duden flows by their place and supplies it with the necessary
                  regelialia.
                </p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand transition-colors hover:text-primary-700"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
