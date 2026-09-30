const posts = [
  {
    id: 1,
    title: "How the gut microbes you're born with affect your lifelong health",
    date: 'Posted: Dec 17, 2019',
    avatar: 1,
  },
  {
    id: 2,
    title: "How the gut microbes you're born with affect your lifelong health",
    date: 'Posted: Dec 17, 2019',
    avatar: 2,
  },
  {
    id: 3,
    title: "How the gut microbes you're born with affect your lifelong health",
    date: 'Posted: Dec 17, 2019',
    avatar: 3,
  },
  {
    id: 4,
    title: "How the gut microbes you're born with affect your lifelong health",
    date: 'Posted: Dec 17, 2019',
    avatar: 4,
  },
  {
    id: 5,
    title: "How the gut microbes you're born with affect your lifelong health",
    date: 'Posted: Dec 17, 2019',
    avatar: 5,
  },
  {
    id: 6,
    title: "How the gut microbes you're born with affect your lifelong health",
    date: 'Posted: Dec 17, 2019',
    avatar: 6,
  },
  {
    id: 7,
    title: "How the gut microbes you're born with affect your lifelong health",
    date: 'Posted: Dec 17, 2019',
    avatar: 7,
  },
  {
    id: 8,
    title: "How the gut microbes you're born with affect your lifelong health",
    date: 'Posted: Dec 17, 2019',
    avatar: 8,
  },
]

export function BlogGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2">
      {posts.map((post) => (
        <article
          key={post.id}
          className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
        >
          <img
            src={`https://picsum.photos/seed/marginote-avatar-${post.avatar}/120/120`}
            alt="Author avatar"
            className="h-14 w-14 flex-shrink-0 rounded-full object-cover"
          />
          <div className="min-w-0">
            <h3 className="text-sm font-semibold leading-snug text-ink">{post.title}</h3>
            <p className="mt-1 text-xs text-muted">{post.date}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
