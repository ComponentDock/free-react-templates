import { Heart, MessageCircle } from 'lucide-react'

const MAIN_POST = {
  category: 'Finance',
  title: 'Financial news: A new company is born today at the stock market',
  author: 'Christinne Williams',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum.',
  likes: 392,
  comments: 10,
  image: 'https://picsum.photos/seed/broadsheet-feat1/800/500',
}

const SIDE_FEATURED = [
  {
    category: 'Finance',
    title: 'Markets reach new highs amid positive economic outlook',
    likes: 392,
    comments: 10,
    image: 'https://picsum.photos/seed/broadsheet-feat2/400/300',
  },
  {
    category: 'Finance',
    title: 'Analysis: What the latest GDP numbers mean for investors',
    likes: 392,
    comments: 10,
    image: 'https://picsum.photos/seed/broadsheet-feat3/400/300',
  },
]

const SMALL_POSTS = [
  {
    category: 'Finance',
    title: 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.',
    time: '7:00 AM | April 14',
    image: 'https://picsum.photos/seed/broadsheet-sm1/100/80',
  },
  {
    category: 'Politics',
    title: 'Sed a elit euismod augue semper congue sit amet ac sapien.',
    time: '7:00 AM | April 14',
    image: 'https://picsum.photos/seed/broadsheet-sm2/100/80',
  },
  {
    category: 'Health',
    title: 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.',
    time: '7:00 AM | April 14',
    image: 'https://picsum.photos/seed/broadsheet-sm3/100/80',
  },
  {
    category: 'Finance',
    title: 'Augue semper congue sit amet ac sapien. Fusce consequat.',
    time: '7:00 AM | April 14',
    image: 'https://picsum.photos/seed/broadsheet-sm4/100/80',
  },
  {
    category: 'Travel',
    title: 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.',
    time: '7:00 AM | April 14',
    image: 'https://picsum.photos/seed/broadsheet-sm5/100/80',
  },
  {
    category: 'Politics',
    title: 'Augue semper congue sit amet ac sapien. Fusce consequat.',
    time: '7:00 AM | April 14',
    image: 'https://picsum.photos/seed/broadsheet-sm6/100/80',
  },
]

export function FeaturedPosts() {
  return (
    <section className="py-6" aria-label="Featured posts">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Main featured + stacked */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
              <div className="md:col-span-7">
                <article className="group">
                  <img
                    src={MAIN_POST.image}
                    alt={MAIN_POST.title}
                    className="mb-3 w-full rounded object-cover"
                    loading="lazy"
                  />
                  <CategoryBadge category={MAIN_POST.category} />
                  <h3 className="mt-2 text-lg font-bold text-text-heading group-hover:text-brand">
                    <a href="#">{MAIN_POST.title}</a>
                  </h3>
                  <p className="mt-1 text-sm text-text-meta">
                    By <span className="text-text-body">{MAIN_POST.author}</span>
                  </p>
                  <p className="mt-2 text-sm text-text-body">{MAIN_POST.excerpt}</p>
                  <div className="mt-3 flex items-center gap-4 text-sm text-text-meta">
                    <span className="flex items-center gap-1">
                      <Heart size={14} /> {MAIN_POST.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={14} /> {MAIN_POST.comments}
                    </span>
                  </div>
                </article>
              </div>
              <div className="flex flex-col gap-4 md:col-span-5">
                {SIDE_FEATURED.map((post) => (
                  <article key={post.image} className="group">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="mb-2 w-full rounded object-cover"
                      loading="lazy"
                    />
                    <CategoryBadge category={post.category} />
                    <h3 className="mt-1 text-sm font-semibold text-text-heading group-hover:text-brand">
                      <a href="#">{post.title}</a>
                    </h3>
                    <div className="mt-1 flex items-center gap-3 text-xs text-text-meta">
                      <span className="flex items-center gap-1">
                        <Heart size={12} /> {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle size={12} /> {post.comments}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
          {/* Sidebar small posts */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-3">
              {SMALL_POSTS.map((post) => (
                <article key={post.image} className="flex gap-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-16 w-20 shrink-0 rounded object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <CategoryBadge category={post.category} />
                    <h4 className="mt-1 text-sm font-semibold text-text-heading line-clamp-2">
                      <a href="#">{post.title}</a>
                    </h4>
                    <p className="mt-0.5 text-xs text-text-meta">{post.time}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block rounded bg-brand px-2 py-0.5 text-xs font-semibold text-white">
      {category}
    </span>
  )
}
