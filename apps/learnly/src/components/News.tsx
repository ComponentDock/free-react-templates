const FEATURED_POST = {
  title: 'Campus Camping and Learning Session',
  date: 'June 6, 2024',
  tags: ['Admission', 'Updates'],
  image: 'https://picsum.photos/seed/learnly-blog1/800/500',
}

const SIDE_POSTS = [
  {
    title: 'New Library Wing Opens Next Semester',
    date: 'May 28, 2024',
    tags: ['Campus', 'News'],
    image: 'https://picsum.photos/seed/learnly-blog2/200/150',
  },
  {
    title: 'Annual Science Fair Winners Announced',
    date: 'May 20, 2024',
    tags: ['Events', 'Students'],
    image: 'https://picsum.photos/seed/learnly-blog3/200/150',
  },
  {
    title: 'Summer Internship Program Now Open',
    date: 'May 15, 2024',
    tags: ['Careers', 'Updates'],
    image: 'https://picsum.photos/seed/learnly-blog4/200/150',
  },
]

export function News() {
  return (
    <section className="py-16 md:py-24" id="news">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main news area */}
          <div className="lg:col-span-2">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-ink">News &amp; Updates</h2>
              <a href="#" className="text-sm font-semibold text-brand hover:text-brand-dark">
                Read All News
              </a>
            </div>

            {/* Featured post */}
            <div className="mb-8">
              <img
                src={FEATURED_POST.image}
                alt={FEATURED_POST.title}
                className="mb-4 h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="text-sm text-mist">
                {FEATURED_POST.date} / {FEATURED_POST.tags.join(', ')}
              </div>
              <h3 className="mt-1 text-xl font-bold text-ink">
                <a href="#" className="hover:text-brand">
                  {FEATURED_POST.title}
                </a>
              </h3>
            </div>

            {/* Side posts */}
            <div className="space-y-4">
              {SIDE_POSTS.map((post) => (
                <div key={post.title} className="flex gap-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-20 w-24 flex-shrink-0 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-xs text-mist">
                      {post.date} / {post.tags.join(', ')}
                    </div>
                    <h4 className="mt-1 font-bold text-ink">
                      <a href="#" className="hover:text-brand">
                        {post.title}
                      </a>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-ink">Campus Videos</h2>
              <a href="#" className="text-sm font-semibold text-brand hover:text-brand-dark">
                View All Videos
              </a>
            </div>
            <div className="space-y-4">
              {[1, 2].map((n) => (
                <a key={n} href="#" className="group relative block">
                  <img
                    src={`https://picsum.photos/seed/learnly-video${n}/400/250`}
                    alt={`Campus video ${n}`}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                      &#9654;
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
