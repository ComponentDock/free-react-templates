import { MessageCircle } from 'lucide-react'

const POSTS = [
  {
    title: 'Work Hard, Party Hard in a Luxury Chalet in the Alps',
    date: 'January 30, 2020',
    author: 'Admin',
    comments: 3,
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
    image: 'https://picsum.photos/seed/getawaypad-blog1/400/250',
  },
  {
    title: 'Work Hard, Party Hard in a Luxury Chalet in the Alps',
    date: 'January 30, 2020',
    author: 'Admin',
    comments: 3,
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
    image: 'https://picsum.photos/seed/getawaypad-blog2/400/250',
  },
  {
    title: 'Work Hard, Party Hard in a Luxury Chalet in the Alps',
    date: 'January 30, 2020',
    author: 'Admin',
    comments: 3,
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
    image: 'https://picsum.photos/seed/getawaypad-blog3/400/250',
  },
]

export function Blog() {
  return (
    <section className="bg-light-bg py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="mb-1 text-sm font-medium uppercase tracking-widest text-brand">
            News &amp; Blog
          </p>
          <h2 className="text-2xl font-semibold">Latest news from our blog</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {POSTS.map((post, i) => (
            <div key={i} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${post.image}')` }}
              />
              <div className="p-5 text-center">
                <h3 className="mb-2 text-base font-semibold leading-snug">
                  <a href="#" className="hover:text-brand transition-colors">
                    {post.title}
                  </a>
                </h3>
                <div className="mb-3 flex items-center justify-center gap-3 text-xs text-text-body">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} /> {post.comments}
                  </span>
                </div>
                <p className="text-sm text-text-body">{post.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
