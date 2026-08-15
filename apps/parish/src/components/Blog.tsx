import { MessageSquare } from 'lucide-react'
import { blogPosts, sectionLabels } from '../data'
import { SectionHeading } from './SectionHeading'

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-[1250px] px-4">
        <SectionHeading label={sectionLabels.blog} heading={sectionLabels.blogHeading} />
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title}>
              <p className="mb-3 flex items-center gap-2 text-sm text-body">
                {post.meta.split(' · ')[0]} · {post.meta.split(' · ')[1]}
                <MessageSquare className="h-4 w-4 text-brand" aria-hidden="true" />
                {post.meta.split(' · ')[2]}
              </p>
              <h3 className="mb-4 font-heading text-lg font-semibold text-black">
                <a href="#" className="transition-colors hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <img
                src={post.image}
                alt=""
                aria-hidden="true"
                className="mb-4 h-[200px] w-full object-cover"
              />
              <p className="text-base leading-[1.8] text-body">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
