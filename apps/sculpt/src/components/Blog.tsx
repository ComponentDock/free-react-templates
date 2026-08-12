import { BLOG_POSTS } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * Blog — light-grey blog strip with three article cards, each with a
 * 250px image and a date chip overlapping its bottom-left corner
 * (orange day over white month).
 */
export function Blog() {
  return (
    <section id="blog" aria-label="Recent blog" className="bg-light py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Recent Blog"
          intro="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.title} className="bg-white pb-8">
              <div className="relative">
                <img
                  src={post.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-[250px] w-full object-cover"
                />
                <div className="absolute bottom-[-24px] left-4 text-center">
                  <span className="block bg-brand px-2.5 py-1 text-2xl text-white">{post.day}</span>
                  <span className="block bg-white px-2.5 py-0.5 text-sm text-neutral-700">
                    {post.month}
                  </span>
                </div>
              </div>
              <div className="px-6 pt-12">
                <p className="text-sm">Posted by: Noah Henderson</p>
                <h3 className="mt-2 text-[22px] leading-snug">{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
