import { featuredPosts } from '../data'

export function FeaturedSlider() {
  return (
    <section aria-label="Featured posts" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-3">
        {featuredPosts.map((post) => (
          <article key={post.seed} className="group relative overflow-hidden">
            <img
              src={`https://picsum.photos/seed/${post.seed}/800/500`}
              alt=""
              loading="lazy"
              className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-16">
              <h2 className="font-display text-xl leading-snug font-medium text-white transition-colors group-hover:text-brand">
                <a href="#home">{post.title}</a>
              </h2>
              <div className="mt-4 flex items-center gap-4 border-t border-white/25 pt-4">
                <img
                  src={`https://picsum.photos/seed/trove-author-${post.seed.slice(-1)}/60/60`}
                  alt=""
                  loading="lazy"
                  className="h-[52px] w-[52px] rounded-full border-2 border-white object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-white">{post.author}</p>
                  <p className="text-[11px] tracking-widest text-white/80 uppercase">{post.date}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/90">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
