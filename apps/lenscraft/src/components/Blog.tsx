import { User, Calendar } from 'lucide-react'

const featuredPost = {
  seed: 'lenscraft-blog1',
  title: 'Pictures of the year 2018, from the migrant caravan to Serena Williams Harbor dangerous',
  author: 'Admin',
  date: '20/09/2018',
  excerpt:
    'Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual now.',
}

const sidePosts = [
  {
    seed: 'lenscraft-blog2',
    title: 'Spirits in the sky over Northern Ireland lake',
    author: 'Admin',
    date: '20/09/2018',
    excerpt: 'Behind lovers eat having length horses vanity say had its mega.',
  },
  {
    seed: 'lenscraft-blog3',
    title: 'Spirits in the sky over Northern Ireland lake',
    author: 'Admin',
    date: '20/09/2018',
    excerpt: 'Behind lovers eat having length horses vanity say had its mega.',
  },
  {
    seed: 'lenscraft-blog4',
    title: 'Spirits in the sky over Northern Ireland lake',
    author: 'Admin',
    date: '20/09/2018',
    excerpt: 'Behind lovers eat having length horses vanity say had its mega.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h3 className="font-[var(--font-heading)] text-lg font-light uppercase tracking-widest text-coral-400">
            Our Blog
          </h3>
          <h2 className="font-[var(--font-heading)] mt-2 text-3xl font-semibold text-gray-900">
            Latest Good Story
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Featured post */}
          <article className="mb-6 lg:mb-0">
            <img
              src={`https://picsum.photos/seed/${featuredPost.seed}/800/500`}
              alt={featuredPost.title}
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
            <h4 className="mt-4 font-[var(--font-heading)] text-lg font-medium text-gray-900">
              {featuredPost.title}
            </h4>
            <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <User size={14} /> {featuredPost.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} /> {featuredPost.date}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{featuredPost.excerpt}</p>
          </article>

          {/* Side posts */}
          <div className="flex flex-col gap-6">
            {sidePosts.map((post) => (
              <article key={post.seed} className="flex gap-4">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/200/200`}
                  alt={post.title}
                  className="h-28 w-28 flex-shrink-0 rounded-lg object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-[var(--font-heading)] text-base font-medium text-gray-900">
                    {post.title}
                  </h4>
                  <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <User size={12} /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
