import { MessageCircle } from 'lucide-react'

interface BlogPostProps {
  title: string
  date: string
  author: string
  comments: number
  excerpt: string
  imageSeed: string
}

function BlogPost({ title, date, author, comments, excerpt, imageSeed }: BlogPostProps) {
  return (
    <article className="flex flex-col">
      <img
        src={`https://picsum.photos/seed/${imageSeed}/400/300`}
        alt={title}
        className="h-48 w-full rounded-t-lg object-cover"
        loading="lazy"
      />
      <div className="flex-1 rounded-b-lg bg-surface p-5 shadow-sm">
        <h3 className="mb-3 text-lg font-bold text-ink">
          <a href="#blog" className="transition-colors hover:text-brand">
            {title}
          </a>
        </h3>
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted">
          <span>{date}</span>
          <span>{author}</span>
          <span className="flex items-center gap-1">
            <MessageCircle className="h-3 w-3" aria-hidden="true" />
            {comments}
          </span>
        </div>
        <p className="text-sm text-muted">{excerpt}</p>
      </div>
    </article>
  )
}

const posts = [
  {
    title: 'Amplify Your Blockchain Team',
    date: 'June 01, 2020',
    author: 'Admin',
    comments: 3,
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    imageSeed: 'minima-blog1',
  },
  {
    title: 'Digital Marketing Trends',
    date: 'June 01, 2020',
    author: 'Admin',
    comments: 3,
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    imageSeed: 'minima-blog2',
  },
  {
    title: 'UI Design Best Practices',
    date: 'June 01, 2020',
    author: 'Admin',
    comments: 3,
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    imageSeed: 'minima-blog3',
  },
  {
    title: 'Building Scalable Products',
    date: 'June 01, 2020',
    author: 'Admin',
    comments: 3,
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    imageSeed: 'minima-blog4',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-surface-alt py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-ink">Recent Blog</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <BlogPost key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}
