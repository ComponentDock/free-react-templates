import { ArrowRight } from 'lucide-react'

interface BlogPostProps {
  image: string
  category: string
  title: string
  date: string
  excerpt: string
}

const posts: BlogPostProps[] = [
  {
    image: 'https://picsum.photos/seed/gaze-blog1/400/300',
    category: 'Photography',
    title: 'How to take the perfect shot',
    date: 'January 23, 2019',
    excerpt:
      'Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo sollicitudin. Aenean quis velit pulvinar.',
  },
  {
    image: 'https://picsum.photos/seed/gaze-blog2/400/300',
    category: 'Photography',
    title: '10 tips for a new photographer',
    date: 'January 23, 2019',
    excerpt:
      'Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium, vitae ornare leo sollicitudin. Aenean quis velit pulvinar.',
  },
]

function BlogPost({ image, category, title, date, excerpt }: BlogPostProps) {
  return (
    <article className="flex flex-col gap-4 md:flex-row">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover md:h-56 md:w-56"
        loading="lazy"
      />
      <div className="flex flex-col justify-center">
        <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand">
          {category}
        </span>
        <h4 className="mb-1 font-display text-lg font-bold text-brand">{title}</h4>
        <span className="mb-3 text-sm text-gray-400">{date}</span>
        <p className="mb-3 text-sm text-gray-500 leading-relaxed">{excerpt}</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 self-start rounded-full border border-brand px-6 py-2 text-xs font-semibold uppercase tracking-wider text-brand transition-colors hover:bg-brand hover:text-white"
        >
          Read More
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </article>
  )
}

export function Blog() {
  return (
    <section id="news" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 font-display text-3xl font-bold text-brand">Latest from the Blog</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {posts.map((post) => (
            <BlogPost key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}
