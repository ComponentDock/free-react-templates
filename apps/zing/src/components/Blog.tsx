import { ArrowRight } from 'lucide-react'

interface BlogPostProps {
  title: string
  date: string
  comments: number
  imageSeed: string
}

const BLOG_POSTS: BlogPostProps[] = [
  {
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    date: 'Sept 28, 2026',
    comments: 3,
    imageSeed: 'zing-blog1',
  },
  {
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    date: 'Sept 28, 2026',
    comments: 3,
    imageSeed: 'zing-blog2',
  },
  {
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    date: 'Sept 28, 2026',
    comments: 3,
    imageSeed: 'zing-blog3',
  },
]

function BlogCard({ title, date, comments, imageSeed }: BlogPostProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(https://picsum.photos/seed/${imageSeed}/600/400)` }}
      />
      <div className="p-6">
        <div className="mb-3 flex items-center gap-4 text-xs text-muted-text">
          <span>{date}</span>
          <span>{comments} Comments</span>
        </div>
        <h3 className="mb-4 text-lg font-bold text-brand-dark leading-snug">{title}</h3>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-red hover:text-red-700"
        >
          Read more <ArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}

export function Blog() {
  return (
    <section id="blog" className="bg-brand-light py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2
            className="mb-3 text-3xl font-bold text-brand-dark"
            style={{ fontFamily: 'var(--font-dancing)' }}
          >
            Recent Blog
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <BlogCard key={i} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}
