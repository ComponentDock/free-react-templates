import { newsPosts } from '../data'

/** "Latest News" — three blog cards with date, category, title, blurb. */
export function LatestNews() {
  return (
    <section id="news" className="bg-ice-50 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-normal text-primary-950">Latest News</h2>
          <p className="mt-4 text-base leading-7 text-mute-500">
            Your domain control panel is designed for ease-of-use and allows for all aspects of your
            domains.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {newsPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-md border border-line bg-white transition-shadow hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/640/400`}
                alt=""
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="p-7">
                <p className="text-sm text-mute-500">
                  {post.date} <span className="text-accent-600">in {post.category}</span>
                </p>
                <h3 className="mt-3 text-xl leading-snug font-medium text-primary-950">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-mute-500">{post.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
