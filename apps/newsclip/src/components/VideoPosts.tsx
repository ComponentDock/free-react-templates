import { Play } from 'lucide-react'
import { videoPosts } from '../data'

export function VideoPosts() {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-6 border-b-2 border-brand pb-3 font-serif text-xl font-bold text-ink">
          Video Posts
        </h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {videoPosts.map((post) => (
            <article key={post.seed} className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/300/200`}
                  alt=""
                  className="h-[140px] w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                    <Play className="h-4 w-4 ml-0.5" aria-hidden="true" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 px-1.5 py-0.5 text-[10px] text-white">
                  {post.duration}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-[10px] font-bold uppercase text-brand">{post.category}</span>
                <h4 className="mt-1 font-serif text-sm font-bold leading-snug text-ink">
                  {post.title}
                </h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
