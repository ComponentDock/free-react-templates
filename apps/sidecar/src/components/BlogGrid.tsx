interface BlogPost {
  id: string
  title: string
  date: string
  avatar: string
}

const POSTS: BlogPost[] = Array.from({ length: 8 }, (_, i) => ({
  id: String(i + 1),
  title: 'How the gut microbes you\u2019re born with affect your lifelong health',
  date: 'Posted: Dec 17, 2019',
  avatar: `https://picsum.photos/seed/author${i + 1}/80/80`,
}))

export function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6" data-testid="blog-grid">
      {POSTS.map((post) => (
        <article key={post.id} className="flex items-start gap-4">
          <img
            src={post.avatar}
            alt={`Author of post ${post.id}`}
            className="h-[60px] w-[60px] rounded-full object-cover flex-shrink-0"
          />
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-text-primary leading-snug">{post.title}</h3>
            <p className="mt-1 text-xs text-text-secondary">{post.date}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
