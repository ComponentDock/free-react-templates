import { Calendar, Heart } from 'lucide-react'
import { SectionTitle } from './SectionTitle'

const POSTS = [
  { seed: 'outpost-blog-1', date: '13th Dec', likes: '15' },
  { seed: 'outpost-blog-2', date: '27th Jan', likes: '23' },
  { seed: 'outpost-blog-3', date: '04th Mar', likes: '31' },
] as const

const TITLE = 'Cruise Private Party Booking Available Now'

/* Blog row: photo, date and likes meta, a serif title link and an excerpt. */
export function BlogRow() {
  return (
    <section id="blog" className="pb-[120px]">
      <div className="mx-auto max-w-[1140px] px-4">
        <SectionTitle eyebrow="We're Offering these Trip Packages" title="Latest Posts from Blog" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.seed}
              className="border border-hairline transition-shadow duration-300 hover:shadow-[0px_5px_50px_rgba(129,74,255,0.2)]"
            >
              <a href="#blog" className="block">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt={TITLE}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </a>
              <div className="p-[30px]">
                <p className="flex items-center gap-6 text-[13px] text-brand">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Heart className="h-4 w-4" aria-hidden="true" />
                    {post.likes}
                  </span>
                </p>
                <h5 className="mt-4 font-display text-[21px] font-bold">
                  <a href="#blog" className="text-ink transition-colors hover:text-brand">
                    {TITLE}
                  </a>
                </h5>
                <p className="mt-3">
                  What to pack, when to go and how the crew keeps a private charter feeling small —
                  notes from the last season on the water.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
