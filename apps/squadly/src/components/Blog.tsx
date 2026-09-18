import { Calendar, User, MessageCircle } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

interface BlogPostProps {
  title: string
  excerpt: string
  date: string
  author: string
  comments: number
  imageUrl: string
}

function BlogPost({ title, excerpt, date, author, comments, imageUrl }: BlogPostProps) {
  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl dark:bg-gray-900">
      <div
        className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-3 text-xs text-muted">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" aria-hidden="true" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <User className="h-3 w-3" aria-hidden="true" />
            {author}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="h-3 w-3" aria-hidden="true" />
            {comments}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-bold text-ink">{title}</h3>
        <p className="mb-4 text-sm text-muted">{excerpt}</p>
        <ButtonLink
          href="#blog"
          className="inline-block rounded bg-primary-100 px-4 py-2 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-200"
        >
          Read more
        </ButtonLink>
      </div>
    </article>
  )
}

const posts = [
  {
    title: 'New Heavy Equipment To Launch',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
    date: 'Aug. 27, 2020',
    author: 'Admin',
    comments: 3,
    imageUrl: 'https://picsum.photos/seed/squadly-blog1/400/300',
  },
  {
    title: 'New Heavy Equipment To Launch',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
    date: 'Aug. 27, 2020',
    author: 'Admin',
    comments: 3,
    imageUrl: 'https://picsum.photos/seed/squadly-blog2/400/300',
  },
  {
    title: 'New Heavy Equipment To Launch',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
    date: 'Aug. 27, 2020',
    author: 'Admin',
    comments: 3,
    imageUrl: 'https://picsum.photos/seed/squadly-blog3/400/300',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-surface py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-primary-500">
            Our Blog
          </span>
          <h2 className="text-3xl font-bold text-ink">Latest Blog Updates</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <BlogPost key={post.imageUrl} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}
