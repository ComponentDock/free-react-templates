interface BlogCardProps {
  title: string
  excerpt: string
  author: string
  date: string
  image: string
}

const posts: BlogCardProps[] = [
  {
    title: 'The Art of Visual Storytelling',
    excerpt:
      'Explore how visual narratives can transform your brand communication and connect with audiences on a deeper level.',
    author: 'Jo Breed',
    date: 'Mar 15, 2024',
    image: 'https://picsum.photos/seed/brushmark-blog1/600/400',
  },
  {
    title: 'Design Trends to Watch in 2024',
    excerpt:
      'From bold typography to immersive 3D elements, discover the design movements shaping the creative landscape.',
    author: 'Jo Breed',
    date: 'Mar 10, 2024',
    image: 'https://picsum.photos/seed/brushmark-blog2/600/400',
  },
  {
    title: 'Building a Creative Portfolio',
    excerpt:
      'Tips and strategies for curating a portfolio that showcases your best work and attracts the right opportunities.',
    author: 'Jo Breed',
    date: 'Mar 05, 2024',
    image: 'https://picsum.photos/seed/brushmark-blog3/600/400',
  },
]

function BlogCard({ title, excerpt, author, date, image }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={600}
          height={400}
        />
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center gap-3 text-xs text-mist">
          <span className="font-medium text-brand-blue">{author}</span>
          <span>{date}</span>
        </div>
        <h3 className="mb-2 text-lg font-bold text-ink">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-mist">{excerpt}</p>
        <a
          href="#"
          className="text-sm font-semibold text-brand-blue transition-colors hover:text-brand-pink"
        >
          Learn More
        </a>
      </div>
    </article>
  )
}

export function Blog() {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand-pink">
            Our blog
          </p>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">Latest Story From Our Blog</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
