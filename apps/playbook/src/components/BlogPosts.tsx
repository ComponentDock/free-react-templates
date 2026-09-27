import { useState } from 'react'

interface BlogPost {
  title: string
  date: string
  image: string
  size: 'full' | 'half'
}

const POSTS: BlogPost[] = [
  {
    title: 'Creative Design Trends for 2026',
    date: 'March 15, 2026',
    image: 'https://picsum.photos/seed/playbook-blog-1/1200/500',
    size: 'full',
  },
  {
    title: 'Building Brand Identity',
    date: 'March 10, 2026',
    image: 'https://picsum.photos/seed/playbook-blog-2/600/400',
    size: 'half',
  },
  {
    title: 'The Future of Web Development',
    date: 'March 5, 2026',
    image: 'https://picsum.photos/seed/playbook-blog-3/600/400',
    size: 'half',
  },
]

function BlogCard({ post }: { post: BlogPost }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative overflow-hidden ${
        post.size === 'full' ? 'col-span-1 md:col-span-2' : 'col-span-1'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={post.image}
        alt={post.title}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-brand/90 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="text-2xl font-bold text-white">{post.title}</h3>
        <p className="mt-2 text-sm text-white/90">{post.date}</p>
      </div>
    </div>
  )
}

export function BlogPosts() {
  return (
    <section id="blog" className="bg-bg-light px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left: heading */}
          <div>
            <h2 className="text-4xl font-bold text-ink">Recent Blog Posts</h2>
          </div>

          {/* Right: blog posts */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {POSTS.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <a
            href="#blog"
            className="inline-block text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            Read All Blog Posts
          </a>
        </div>
      </div>
    </section>
  )
}
