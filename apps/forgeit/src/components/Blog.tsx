interface BlogPostProps {
  image: string
  title: string
  author: string
  date: string
  category: string
  excerpt: string
}

function BlogPost({ image, title, author, date, category, excerpt }: BlogPostProps) {
  return (
    <div>
      <img src={image} alt={title} className="mb-4 w-full object-cover" loading="lazy" />
      <h3 className="mb-2 text-lg font-bold text-dark">
        <a href="#" className="hover:text-brand">
          {title}
        </a>
      </h3>
      <div className="mb-3 text-sm text-body">
        {author} <span className="mx-2">&bull;</span> {date}
        <span className="mx-2">&bull;</span>{' '}
        <a href="#" className="text-brand hover:underline">
          {category}
        </a>
      </div>
      <p className="mb-3 text-sm text-body">{excerpt}</p>
      <a href="#" className="text-sm font-medium text-brand hover:underline">
        Continue Reading...
      </a>
    </div>
  )
}

const POSTS: BlogPostProps[] = [
  {
    image: 'https://picsum.photos/seed/forgeit-blog1/600/400',
    title: 'Create Beautiful Websites In Less Than An Hour',
    author: 'Ham Brook',
    date: 'Jan 18, 2019',
    category: 'News',
    excerpt:
      'Discover how modern tools and frameworks can accelerate your web development workflow.',
  },
  {
    image: 'https://picsum.photos/seed/forgeit-blog2/600/400',
    title: 'The Future of Digital Design Trends',
    author: 'James Phelps',
    date: 'Jan 18, 2019',
    category: 'News',
    excerpt: 'Explore the emerging design trends that will shape the digital landscape this year.',
  },
  {
    image: 'https://picsum.photos/seed/forgeit-blog3/600/400',
    title: 'Building scalable web applications',
    author: 'James Phelps',
    date: 'Jan 18, 2019',
    category: 'News',
    excerpt: 'Best practices for creating web applications that grow with your business needs.',
  },
]

export function Blog() {
  return (
    <section id="blog-section" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Blog</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <BlogPost key={post.title} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}
