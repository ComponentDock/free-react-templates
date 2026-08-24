import { Calendar, User } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  author: string
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Give Hope to the People Need Most',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/cuddle-blog-1/400/250',
    date: 'Feb. 22, 2024',
    author: 'Admin',
  },
  {
    id: 2,
    title: 'Building Communities Through Kindness',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    image: 'https://picsum.photos/seed/cuddle-blog-2/400/250',
    date: 'Feb. 15, 2024',
    author: 'Admin',
  },
  {
    id: 3,
    title: 'How Your Donations Change Lives',
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean where roasted parts of sentences fly.',
    image: 'https://picsum.photos/seed/cuddle-blog-3/400/250',
    date: 'Feb. 8, 2024',
    author: 'Admin',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="py-20 sm:py-28 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-brand">
            Latest News
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl text-ink dark:text-white">
            Recent From Blog
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col rounded-2xl bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-xl dark:bg-gray-900">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={post.image}
          alt={`Blog: ${post.title}`}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-4 text-sm text-mist dark:text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" aria-hidden="true" />
            {post.author}
          </span>
        </div>
        <h3 className="mt-3 font-display text-lg font-bold leading-tight text-ink dark:text-white">
          <a href="#" className="hover:text-brand transition-colors">
            {post.title}
          </a>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-mist dark:text-gray-400">
          {post.excerpt}
        </p>
        <a
          href="#"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-brand hover:text-brand-hover"
        >
          Read More
        </a>
      </div>
    </article>
  )
}
