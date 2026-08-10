import { Eye, Heart, MessageCircle } from 'lucide-react'
import { author, counters, posts } from '../data'
import { Sidebar } from './Sidebar'

function MetaCounters() {
  return (
    <p className="flex items-center gap-4 text-sm text-muted">
      <span className="flex items-center gap-1">
        <Heart className="h-4 w-4" aria-hidden="true" />
        <span aria-label={`${counters[0]!.value} likes`}>{counters[0]!.value}</span>
      </span>
      <span className="flex items-center gap-1">
        <Eye className="h-4 w-4" aria-hidden="true" />
        <span aria-label={`${counters[1]!.value} views`}>{counters[1]!.value}</span>
      </span>
      <span className="flex items-center gap-1">
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        <span aria-label={`${counters[2]!.value} comments`}>{counters[2]!.value}</span>
      </span>
    </p>
  )
}

export function BlogSection() {
  return (
    <section id="blog" className="px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          {posts.map((post) => (
            <article key={post.id} className="mb-16 last:mb-0">
              <a
                href="#blog"
                className="block h-[400px] w-full bg-cover bg-center transition-transform duration-300 hover:scale-[1.02]"
                style={{ backgroundImage: `url(${post.image})` }}
                role="img"
                aria-label={`Photo for ${post.watermark} story`}
              />
              <div className="relative pt-8">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-4 left-0 font-display text-[100px] leading-none text-[#ebebeb] select-none"
                >
                  {post.watermark}
                </span>
                <h3 className="relative mb-4 max-w-xl text-3xl font-bold text-black">
                  <a href="#blog" className="transition-colors hover:text-coral">
                    {post.title}
                  </a>
                </h3>
                <p className="relative mb-6 max-w-2xl leading-relaxed text-body">{post.excerpt}</p>

                <div className="mb-6 flex items-center">
                  <img
                    src={author.avatar}
                    alt={`Photo of ${author.name}`}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <span className="text-sm text-gray-600">Written by</span>
                    <h4 className="text-base font-semibold text-black">
                      {author.name},{' '}
                      <span className="font-normal text-gray-500">{author.date}</span>
                    </h4>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">
                  <MetaCounters />
                  <a
                    href="#blog"
                    className="inline-block border border-coral bg-coral px-6 py-3 text-sm text-white transition-colors hover:bg-transparent hover:text-coral"
                  >
                    Continue Reading
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside id="sidebar" className="lg:col-span-4">
          <Sidebar />
        </aside>
      </div>
    </section>
  )
}
