const EDITORS_PICKS = [
  {
    title: 'Orci varius natoque penatibus et magnis dis parturient montes.',
    date: 'February 11, 2018',
    image: 'https://picsum.photos/seed/broadsheet-ed1/400/250',
  },
  {
    title: 'Orci varius natoque penatibus et magnis dis parturient montes.',
    date: 'February 11, 2018',
    image: 'https://picsum.photos/seed/broadsheet-ed2/400/250',
  },
  {
    title: 'Orci varius natoque penatibus et magnis dis parturient montes.',
    date: 'February 11, 2018',
    image: 'https://picsum.photos/seed/broadsheet-ed3/400/250',
  },
  {
    title: 'Orci varius natoque penatibus et magnis dis parturient montes.',
    date: 'February 11, 2018',
    image: 'https://picsum.photos/seed/broadsheet-ed4/400/250',
  },
  {
    title: 'Orci varius natoque penatibus et magnis dis parturient montes.',
    date: 'February 11, 2018',
    image: 'https://picsum.photos/seed/broadsheet-ed5/400/250',
  },
  {
    title: 'Orci varius natoque penatibus et magnis dis parturient montes.',
    date: 'February 11, 2018',
    image: 'https://picsum.photos/seed/broadsheet-ed6/400/250',
  },
]

const WORLD_NEWS = [
  {
    title: 'Orci varius natoque penatibus et magnis',
    date: 'February 11, 2018',
    image: 'https://picsum.photos/seed/broadsheet-wn1/200/120',
  },
  {
    title: 'Orci varius natoque penatibus et magnis',
    date: 'February 11, 2018',
    image: 'https://picsum.photos/seed/broadsheet-wn2/200/120',
  },
  {
    title: 'Orci varius natoque penatibus et magnis',
    date: 'February 11, 2018',
    image: 'https://picsum.photos/seed/broadsheet-wn3/200/120',
  },
  {
    title: 'Orci varius natoque penatibus et magnis',
    date: 'February 11, 2018',
    image: 'https://picsum.photos/seed/broadsheet-wn4/200/120',
  },
  {
    title: 'Orci varius natoque penatibus et magnis',
    date: 'February 11, 2018',
    image: 'https://picsum.photos/seed/broadsheet-wn5/200/120',
  },
]

export function Editorial() {
  return (
    <section className="bg-light-bg py-10" aria-label="Editorial">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Editor's Pick */}
          <div className="lg:col-span-9">
            <h2 className="mb-6 text-lg font-bold text-text-heading">Editor&apos;s Pick</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {EDITORS_PICKS.map((post) => (
                <article key={post.title + post.image} className="group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="mb-2 w-full rounded object-cover"
                    loading="lazy"
                  />
                  <h3 className="text-sm font-semibold text-text-heading group-hover:text-brand">
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className="mt-1 text-xs text-text-meta">{post.date}</p>
                </article>
              ))}
            </div>
          </div>

          {/* World News */}
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-lg font-bold text-text-heading">World News</h2>
            <div className="flex flex-col gap-4">
              {WORLD_NEWS.map((post) => (
                <article key={post.title + post.image} className="group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="mb-2 w-full rounded object-cover"
                    loading="lazy"
                  />
                  <h3 className="text-sm font-semibold text-text-heading group-hover:text-brand">
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className="mt-1 text-xs text-text-meta">{post.date}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
