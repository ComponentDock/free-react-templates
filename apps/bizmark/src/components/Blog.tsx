import { MessageCircle, Heart } from 'lucide-react'

const posts = [
  {
    img: 'https://picsum.photos/seed/bizmark-blog1/400/250',
    category: 'Technology',
    date: 'March 30, 2019',
    title: 'He waters likeness their land set female for',
    comments: 2,
    likes: 0,
  },
  {
    img: 'https://picsum.photos/seed/bizmark-blog2/400/250',
    category: 'Technology',
    date: 'March 30, 2019',
    title: 'Be there bring void give good from stars',
    comments: 2,
    likes: 0,
  },
  {
    img: 'https://picsum.photos/seed/bizmark-blog3/400/250',
    category: 'Technology',
    date: 'March 30, 2019',
    title: 'Third lights they are over moved days above',
    comments: 2,
    likes: 0,
  },
]

export function Blog() {
  return (
    <section className="bg-section-bg px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-heading sm:text-4xl">Update From Blog</h2>
          <p className="text-body">Winged hath had face creepeth abundantly so shall fire appear</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={post.img}
                alt={post.title}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <p className="mb-2 text-sm text-body">
                  <a href="#" className="font-medium text-brand-accent">
                    {post.category}
                  </a>{' '}
                  | <span>{post.date}</span>
                </p>
                <h5 className="mb-3 text-lg font-semibold text-heading">{post.title}</h5>
                <ul className="flex gap-4 text-sm text-body">
                  <li className="flex items-center gap-1">
                    <MessageCircle size={14} /> {post.comments} Comments
                  </li>
                  <li className="flex items-center gap-1">
                    <Heart size={14} /> {post.likes} Like
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
