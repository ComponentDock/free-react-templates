import { MessageCircle } from 'lucide-react'

const posts = [
  {
    image: 'https://picsum.photos/seed/ministry-blog1/400/250',
    date: 'July 20, 2029',
    author: 'Admin',
    comments: 3,
    title: "Building Holy & Healthy Lives God's",
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
  },
  {
    image: 'https://picsum.photos/seed/ministry-blog2/400/250',
    date: 'July 15, 2029',
    author: 'Admin',
    comments: 5,
    title: 'Finding Peace in a Busy World',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
  },
  {
    image: 'https://picsum.photos/seed/ministry-blog3/400/250',
    date: 'July 10, 2029',
    author: 'Admin',
    comments: 2,
    title: 'The Power of Community Prayer',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-16">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-brand text-sm font-medium uppercase tracking-wider">Our Blog</span>
          <h2 className="text-3xl font-normal mt-2">Latest news from our blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col">
              <a href="#" className="block overflow-hidden rounded">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-body-text mb-3">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" aria-hidden="true" />
                    {post.comments}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-2">
                  <a href="#" className="text-heading hover:text-brand transition-colors">
                    {post.title}
                  </a>
                </h3>
                <p className="text-sm text-body-text mb-3">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-block bg-brand text-white px-5 py-2 rounded text-sm hover:bg-brand-hover transition-colors"
                >
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
