import { User, Calendar, MessageCircle } from 'lucide-react'

const techPosts = [
  {
    category: 'technology',
    categoryColor: 'bg-cat-tech',
    title: 'The New Apple Release Ceremony',
    author: 'Michael Smith',
    date: '29 April 2024',
    comments: 3,
    excerpt:
      'Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum.',
    image: 'https://picsum.photos/seed/bytepress-tech1/600/400',
  },
  {
    category: 'world',
    categoryColor: 'bg-cat-world',
    title: 'The Rise of Artificial Intelligence',
    author: 'Michael Smith',
    date: '28 April 2024',
    comments: 5,
    excerpt:
      'Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum.',
    image: 'https://picsum.photos/seed/bytepress-tech2/600/400',
  },
  {
    category: 'world',
    categoryColor: 'bg-cat-world',
    title: 'New HTML5 Features Explained',
    author: 'Michael Smith',
    date: '27 April 2024',
    comments: 2,
    excerpt:
      'Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum.',
    image: 'https://picsum.photos/seed/bytepress-tech3/600/400',
  },
]

export function TechnologySection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-ink">Technology</h2>
          <p className="text-sm text-secondary">Handpicked articles</p>
          <div className="mt-2 h-1 w-12 bg-accent" />
        </div>

        <div className="space-y-8">
          {techPosts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col gap-6 overflow-hidden rounded bg-alt-bg md:flex-row"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-64 w-full object-cover md:h-auto md:w-2/5"
              />
              <div className="flex flex-col justify-center p-6">
                <span
                  className={`inline-block w-fit rounded px-3 py-0.5 text-xs font-semibold uppercase text-white ${post.categoryColor}`}
                >
                  {post.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-ink">
                  <a href="#" className="transition-colors hover:text-accent">
                    {post.title}
                  </a>
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-secondary">
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="ml-auto flex items-center gap-1">
                    <MessageCircle size={12} />
                    {post.comments} comments
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
