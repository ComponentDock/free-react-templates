import { User, Calendar, ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'No finer food can be found',
    excerpt:
      'Discover why our signature dishes have earned rave reviews from food lovers and critics alike.',
    date: '18 Sep 2025',
    img: 'feastly-blog1',
  },
  {
    title: 'Things go better with food',
    excerpt:
      'A look at how great ingredients and expert preparation come together to create unforgettable meals.',
    date: '20 Sep 2025',
    img: 'feastly-blog2',
  },
  {
    title: 'Food head above the rest',
    excerpt:
      'From our kitchen to your table — the story behind the dishes that keep our guests coming back.',
    date: '22 Sep 2025',
    img: 'feastly-blog3',
  },
] as const

export function Updates() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h3 className="font-display text-3xl font-bold text-ink">
            Our <span className="text-primary-400">food</span> update
          </h3>
          <p className="mt-2 italic text-smoke">
            Beast kind form divide night above let moveth bearing darkness.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded transition-shadow hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/${post.img}/400/250`}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="bg-mist p-6 transition-colors group-hover:bg-white">
                <div className="mb-3 flex gap-4 text-xs text-smoke">
                  <span className="inline-flex items-center gap-1">
                    <User className="h-3 w-3" aria-hidden="true" />
                    Admin
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {post.date}
                  </span>
                </div>
                <h5 className="font-display text-lg font-bold capitalize text-ink">{post.title}</h5>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{post.excerpt}</p>
                <a
                  href="#"
                  className="group/link mt-3 inline-flex items-center gap-2 text-sm font-medium uppercase text-ink transition-colors hover:text-primary-400"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
