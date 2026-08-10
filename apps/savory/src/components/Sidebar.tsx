import { adImage, postImage, recentPosts } from '../data'

export function Sidebar() {
  return (
    <aside aria-label="Sidebar" className="space-y-10">
      <div className="border border-gray-100 p-4 text-center">
        <p className="text-xs font-semibold tracking-widest text-meta uppercase">Advertisement</p>
        <img
          src={postImage(adImage.seed, 300, 250)}
          alt="Advertisement placeholder"
          className="mx-auto mt-3 w-full object-cover"
        />
      </div>
      <div>
        <h2 className="border-b-2 border-brand pb-2 font-display text-lg font-semibold text-ink">
          Recent Posts
        </h2>
        <ul className="mt-5 space-y-5">
          {recentPosts.map((post) => (
            <li key={post.title} className="flex items-center gap-4">
              <img
                src={postImage(post.seed, 100, 100)}
                alt={post.alt}
                className="h-16 w-16 shrink-0 object-cover"
              />
              <div>
                <a
                  href="#posts"
                  className="text-sm font-semibold text-ink transition-colors hover:text-brand"
                >
                  {post.title}
                </a>
                <p className="mt-1 text-xs font-semibold tracking-widest text-meta uppercase">
                  {post.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
