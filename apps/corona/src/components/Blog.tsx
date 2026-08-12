import { ArrowRight, Heart, MessageCircle, CalendarDays } from 'lucide-react'

/* Blog posts (source: .blog-post-area — 3 image cards with meta (date,
   likes, comments), a white title, a blurb and a "View Details" link with
   a right arrow). The shipped demo repeats the other-feature heading; the
   canonical "Latest Posts From Our Blog" title is used instead. */
const POSTS = [
  {
    title: 'Smart Kitchen Setup',
    date: '29th, oct, 2018',
    likes: '121 likes',
    comments: '05 comments',
    text: 'Turn your kitchen into a connected hub with smart appliances that save time and energy.',
  },
  {
    title: 'Learning Astronomy at Home',
    date: '12th, nov, 2018',
    likes: '87 likes',
    comments: '11 comments',
    text: 'A beginner-friendly guide to stargazing, telescopes and the wonders of the night sky.',
  },
  {
    title: 'Design Systems That Scale',
    date: '3rd, dec, 2018',
    likes: '203 likes',
    comments: '24 comments',
    text: 'How to build a reusable component library your whole team will love to ship with.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white pb-[120px]">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="mb-[75px] text-center">
          <h2 className="font-display text-[42px] font-black text-ink">
            Latest Posts From Our Blog
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[14px] leading-6 text-smoke">
            News, guides and stories from the Corona team and our community of learners.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {POSTS.map((post, index) => (
            <article key={post.title} className="group overflow-hidden rounded-md bg-ink">
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/corona-blog-${index + 1}/600/400`}
                  alt=""
                  className="h-[220px] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 flex justify-between px-5 py-3 text-[12px] text-white">
                  <p className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" /> {post.date}
                  </p>
                  <p className="flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5" aria-hidden="true" /> {post.likes}
                  </p>
                  <p className="flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" /> {post.comments}
                  </p>
                </div>
              </div>
              <div className="p-[30px]">
                <h3 className="text-[18px] font-bold text-white">{post.title}</h3>
                <p className="mt-3 text-[13px] leading-6 text-white/80">{post.text}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-flex items-center gap-2 bg-brand px-4 py-2 text-[12px] font-medium uppercase text-ink transition-colors hover:bg-white"
                >
                  View Details <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
