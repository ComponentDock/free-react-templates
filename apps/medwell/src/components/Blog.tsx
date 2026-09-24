import { MessageCircle, Heart } from 'lucide-react'

const posts = [
  {
    tags: ['medical', 'dental', 'health'],
    title: 'Hath is gathering from hath great gan man lights evening man.',
    comments: 8,
    likes: 0,
    image: 'https://picsum.photos/seed/medwell-blog1/600/400',
  },
  {
    tags: ['medical', 'dental', 'health'],
    title: "Also good after there saying don't third you be careful every man.",
    comments: 1,
    likes: 1,
    image: 'https://picsum.photos/seed/medwell-blog2/600/400',
  },
  {
    tags: ['medical', 'dental', 'health'],
    title: "Also good after there saying don't third you be careful every man.",
    comments: 5,
    likes: 0,
    image: 'https://picsum.photos/seed/medwell-blog3/600/400',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xs font-heading text-3xl font-bold leading-snug text-heading md:text-4xl">
            Get Every Single Update Here
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-body">
            Land meat winged called subdue without very light in all years sea appear midst forth
            image him third there set.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <article key={i} className="group overflow-hidden bg-white">
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="mb-2 flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="text-xs text-brand-500 transition-colors hover:text-brand-600"
                    >
                      {tag},
                    </a>
                  ))}
                </div>
                <a href="#" className="block">
                  <h3 className="font-heading text-base font-semibold leading-snug text-heading transition-colors group-hover:text-brand-500">
                    {post.title}
                  </h3>
                </a>
                <div className="mt-3 flex items-center gap-4 text-xs text-body">
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" />
                    {post.comments} comment{post.comments !== 1 ? 's' : ''}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5" />
                    {post.likes} like{post.likes !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
