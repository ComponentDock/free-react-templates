import { ButtonLink } from '@free-react-templates/ui'
import { bigPosts, postImage } from '../data'

export function BigPosts() {
  return (
    <section aria-label="Featured recipes" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="space-y-14">
        {bigPosts.map((post, index) => (
          <div
            key={post.title}
            data-testid="big-post-row"
            className={`flex flex-col items-center gap-8 md:flex-row ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="md:w-1/2">
              <img
                src={postImage(post.seed, 700, 600)}
                alt={post.alt}
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="text-center md:w-1/2 md:px-10">
              <p className="text-xs font-semibold tracking-widest text-brand uppercase">
                {post.tag}
              </p>
              <h3 className="mt-2 font-display text-2xl text-ink sm:text-3xl">{post.title}</h3>
              <p className="mt-2 text-xs font-semibold tracking-widest text-meta uppercase">
                {post.date} / By {post.author}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-meta">{post.excerpt}</p>
              <ButtonLink
                href="#home"
                className="mt-6 min-w-[160px] rounded-none bg-brand px-8 text-sm font-medium text-white hover:bg-black"
              >
                Read More
              </ButtonLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
