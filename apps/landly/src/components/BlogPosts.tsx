import { SectionHeading } from './SectionHeading'
import { blogHeading, image, posts } from '../data'

/** Light-grey blog band with three posts. */
export function BlogPosts() {
  return (
    <section id="blog" className="bg-light py-12 lg:py-28">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mx-auto mb-10 max-w-[560px] text-center">
          <SectionHeading align="center">{blogHeading}</SectionHeading>
        </div>

        <ul className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.seed} className="h-full">
              <a href="#blog" className="block">
                <img
                  src={image(post.seed, 600, 400)}
                  alt={post.title}
                  className="h-[220px] w-full object-cover"
                  loading="lazy"
                />
              </a>
              <div className="bg-white p-5">
                <h2 className="mb-4 text-[22px] leading-tight">
                  <a href="#blog" className="text-black transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h2>
                <span className="text-[13px] text-[#ccc]">
                  {post.date} by {post.author}
                </span>
                <p className="mt-3 text-body">{post.excerpt}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
