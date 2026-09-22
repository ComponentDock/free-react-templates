import { Calendar, MessageSquare } from 'lucide-react'

const posts = [
  {
    title: 'How to Build Lean Muscle with the Right Nutrition Plan',
    image: 'https://picsum.photos/seed/ironshed-news1/400/300',
    date: 'May 4, 2026',
    comments: 12,
  },
  {
    title: 'Top 5 Cardio Exercises for Maximum Fat Burn',
    image: 'https://picsum.photos/seed/ironshed-news2/400/300',
    date: 'Apr 28, 2026',
    comments: 8,
  },
  {
    title: 'The Benefits of Yoga for Strength Athletes',
    image: 'https://picsum.photos/seed/ironshed-news3/400/300',
    date: 'Apr 15, 2026',
    comments: 15,
  },
] as const

export function LatestNews() {
  return (
    <section id="blog" aria-label="Latest news" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold text-section-title sm:text-4xl">
            Latest News
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-sm bg-white shadow-sm"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-4 text-xs text-description">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.comments} Comments
                  </span>
                </div>
                <h5 className="mt-3">
                  <a
                    href="#"
                    className="font-heading text-base font-medium text-heading transition-colors hover:text-brand"
                  >
                    {post.title}
                  </a>
                </h5>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
