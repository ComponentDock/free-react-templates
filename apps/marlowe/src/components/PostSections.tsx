import { postSections, imgUrl, loadMoreLabel, type Post } from '../data'

function PostRow({ post }: { post: Post }) {
  return (
    <article className="group flex flex-col gap-5 sm:flex-row">
      <div className="overflow-hidden sm:w-[40%]">
        <img
          src={imgUrl(post.seed, 400, 300)}
          alt=""
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-[1600ms] group-hover:scale-110"
        />
      </div>
      <div className="sm:w-[60%]">
        <a href="#" className="text-xs font-bold tracking-wide text-brand uppercase">
          {post.category}
        </a>
        <h3 className="mt-1 text-lg leading-snug font-bold text-ink">{post.title}</h3>
        <p className="mt-1 text-xs text-meta uppercase">{post.meta}</p>
        <p className="mt-3 text-sm leading-relaxed text-meta">{post.excerpt}</p>
      </div>
    </article>
  )
}

export function PostSections() {
  return (
    <div className="flex-1">
      {postSections.map((section) => (
        <section key={section.id} aria-label={section.title} className="mb-12">
          <h2 className="relative mb-8 flex items-center gap-3">
            <span className="relative z-10 inline-block bg-white pr-3 font-display text-base font-bold tracking-widest text-ink uppercase">
              {section.title}
            </span>
            <span aria-hidden="true" className="h-0.5 flex-1 bg-line" />
          </h2>
          <div className="flex flex-col gap-10">
            {section.posts.map((post) => (
              <PostRow key={post.seed} post={post} />
            ))}
          </div>
        </section>
      ))}
      <div className="flex justify-center">
        <button
          type="button"
          className="h-12 min-w-[180px] border-2 border-brand bg-brand px-8 font-display text-sm font-bold tracking-widest text-white uppercase shadow-[inset_0_0_0_0_#ee4266] transition-colors hover:bg-transparent hover:text-brand"
        >
          {loadMoreLabel}
        </button>
      </div>
    </div>
  )
}
