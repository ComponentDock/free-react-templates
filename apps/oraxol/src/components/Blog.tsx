import { MessageCircle } from 'lucide-react'

const posts = [
  { id: 1, seed: 'oraxol-blog-1' },
  { id: 2, seed: 'oraxol-blog-2' },
  { id: 3, seed: 'oraxol-blog-3' },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-dark-base px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Recent Blog</h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-lg border border-white/10 bg-dark-card"
            >
              <a href="#">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt={`Blog post ${post.id}`}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
              </a>
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-muted">
                  <span className="font-medium text-white">John Dorf</span>
                  <span>&middot;</span>
                  <time>Sep 10, 2024</time>
                </div>
                <p className="mt-2 flex items-center gap-1 text-xs text-muted">
                  <MessageCircle className="h-3 w-3" aria-hidden="true" />
                  <a href="#" className="hover:text-accent">
                    3 Comments
                  </a>
                </p>
                <h3 className="mt-3">
                  <a
                    href="#"
                    className="text-lg font-semibold text-white transition-colors hover:text-accent"
                  >
                    Grow your insights with inspiring news
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
