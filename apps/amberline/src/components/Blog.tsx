import { MessageCircle, User } from 'lucide-react'
import { posts } from '../data'
import { SectionHeading } from './SectionHeading'

export function Blog() {
  return (
    <section id="blog" className="bg-band pt-0 pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1320px] px-4">
        <SectionHeading eyebrow="Our Blog" title="Recent Blog" />
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <li
              key={post.title}
              className="overflow-hidden rounded-[4px] bg-white shadow-[0_10px_25px_-13px_rgba(0,0,0,0.1)]"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/830/560`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-[260px] w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 flex size-[69px] flex-col items-center justify-center bg-ink text-white">
                  <span className="text-[30px] leading-none font-bold">{post.day}</span>
                  <span className="text-[12px] uppercase">{post.month}</span>
                </div>
              </div>
              <div className="p-[30px]">
                <div className="flex items-center gap-4 text-[13px] uppercase tracking-[0.06em]">
                  <span className="flex items-center gap-1">
                    <User aria-hidden="true" className="size-3.5 text-brand" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle aria-hidden="true" className="size-3.5 text-brand" />
                    {post.comments} comments
                  </span>
                </div>
                <h3 className="mt-3 text-[24px] font-normal text-black/80">{post.title}</h3>
                <p className="mt-2 text-[15px]">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-[13px] font-semibold uppercase tracking-[0.06em] text-deep-amber hover:text-brand"
                >
                  Read more
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
