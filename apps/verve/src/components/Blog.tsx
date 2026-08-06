import { Calendar, MessageCircle, User } from 'lucide-react'
import { Card } from '@free-react-templates/ui'

const posts = [
  {
    seed: 'verve-blog-1',
    title: 'Pointing has no control about the blind texts',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts — it is an almost unorthographic life.',
  },
  {
    seed: 'verve-blog-2',
    title: 'A small line of blind text by the name of Lorem Ipsum',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts — it is an almost unorthographic life.',
  },
  {
    seed: 'verve-blog-3',
    title: 'The far World of Grammar and the road to Vokalia',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts — it is an almost unorthographic life.',
  },
] as const

export function Blog() {
  return (
    <section
      id="blog"
      aria-label="Recent blog"
      className="bg-gray-50 py-16 sm:py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            From the Blog
          </p>
          <h2 className="mt-3 font-display text-2xl font-medium leading-snug text-gray-900 sm:text-3xl dark:text-gray-100">
            Recent Blog
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.title} className="overflow-hidden p-0">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/640/480`}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    July 12, 2018
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <User className="h-3.5 w-3.5" aria-hidden="true" />
                    Admin
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />3 Comments
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold leading-snug text-gray-900 dark:text-gray-100">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {post.excerpt}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
