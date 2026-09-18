import { User, Clock, MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'Molestie at elementum eu facilisis sed odio',
    excerpt:
      'Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.',
    author: 'John Doe',
    date: '18 Oct',
    comments: 57,
    image: 'https://picsum.photos/seed/vivid-blog-1/600/400',
  },
  {
    title: 'Molestie at elementum eu facilisis sed odio',
    excerpt:
      'Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.',
    author: 'John Doe',
    date: '18 Oct',
    comments: 57,
    image: 'https://picsum.photos/seed/vivid-blog-2/600/400',
  },
  {
    title: 'Molestie at elementum eu facilisis sed odio',
    excerpt:
      'Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl purus in mollis nunc sed. Nunc non blandit massa enim nec.',
    author: 'John Doe',
    date: '18 Oct',
    comments: 57,
    image: 'https://picsum.photos/seed/vivid-blog-3/600/400',
  },
]

export function Blog() {
  return (
    <section id="blog" className="border-y border-grey-border bg-grey-bg py-32">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="inline-block text-4xl font-bold text-heading">Recent News</h2>
          <div className="mx-auto mt-5 h-1 w-10 bg-primary" />
        </div>

        {/* Blog grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <div key={i} className="overflow-hidden rounded bg-white shadow-sm">
              <img
                src={post.image}
                alt={post.title}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                {/* Meta */}
                <ul className="mb-4 flex gap-4 text-xs text-body">
                  <li className="flex items-center gap-1">
                    <User size={12} /> {post.author}
                  </li>
                  <li className="flex items-center gap-1">
                    <Clock size={12} /> {post.date}
                  </li>
                  <li className="flex items-center gap-1">
                    <MessageCircle size={12} /> {post.comments}
                  </li>
                </ul>
                <h3 className="mb-3 text-lg font-bold text-heading">{post.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-body">{post.excerpt}</p>
                <a href="#" className="text-sm font-semibold text-primary hover:opacity-80">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
