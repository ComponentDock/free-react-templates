import { Calendar, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { blogPosts, imgUrl, nextLabel, paginationPages, previousLabel } from '../data'
import { Sidebar } from './Sidebar'

const fullPosts = blogPosts.filter((post) => !post.small)
const smallPosts = blogPosts.filter((post) => post.small)

function PostCard({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden bg-heading">
        <img
          src={imgUrl(post.seed, 1200, 700)}
          alt=""
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* white card overlapping the photo's bottom edge (~100px) */}
      <div className="relative -mt-[100px] ml-0 bg-white p-10 shadow-[0_10px_20px_0_rgba(153,153,153,0.1)] sm:mx-10">
        <a
          href="#"
          className="inline-block rounded-[15px] border border-primary px-[18px] text-xs leading-7 text-body transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {post.category}
        </a>
        <h4 className="mt-4 font-heading text-2xl leading-8 font-medium text-heading">
          <a
            href="#"
            className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {post.headline}
          </a>
        </h4>
        <p className="mt-3 leading-7 text-body">{post.excerpt}</p>
        <div className="mt-4 flex items-center gap-5 border-t border-line pt-4 text-xs text-body">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <MessageCircle className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            {post.comments}
          </span>
        </div>
      </div>
    </article>
  )
}

export function BlogSection() {
  return (
    <section aria-label="Blog posts" className="bg-white pb-[120px]">
      <div className="mx-auto max-w-7xl gap-14 px-4 sm:px-6 lg:grid lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="space-y-24">
            <PostCard post={fullPosts[0]!} />
            <PostCard post={fullPosts[1]!} />
            <div className="grid gap-14 md:grid-cols-2">
              <PostCard post={smallPosts[0]!} />
              <PostCard post={smallPosts[1]!} />
            </div>
            <PostCard post={fullPosts[2]!} />
            <PostCard post={fullPosts[3]!} />
          </div>

          {/* Pagination */}
          <nav aria-label="Pagination" className="mt-16 flex justify-center">
            <ul className="flex items-center gap-1.5">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 px-3 py-2 text-xs text-meta transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  {previousLabel}
                </a>
              </li>
              {paginationPages.map((page, index) => (
                <li key={page}>
                  <a
                    href="#"
                    aria-current={index === 0 ? 'page' : undefined}
                    className={cn(
                      'px-3.5 py-2 text-xs text-meta transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                      index === 0 && 'bg-primary text-white hover:text-white',
                    )}
                  >
                    {page}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 px-3 py-2 text-xs text-meta transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {nextLabel}
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-16 lg:col-span-4 lg:mt-0">
          <Sidebar />
        </div>
      </div>
    </section>
  )
}
