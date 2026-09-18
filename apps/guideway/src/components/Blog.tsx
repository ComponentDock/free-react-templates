import { ArrowRight, MessageCircle } from 'lucide-react'

const posts = [
  {
    seed: 'guideway-blog-1',
    title: 'Finance And Legal Working Streams Occur Throughout',
    date: '26 June 2019',
    comments: 3,
  },
  {
    seed: 'guideway-blog-2',
    title: 'Finance And Legal Working Streams Occur Throughout',
    date: '26 June 2019',
    comments: 3,
  },
  {
    seed: 'guideway-blog-3',
    title: 'Finance And Legal Working Streams Occur Throughout',
    date: '26 June 2019',
    comments: 3,
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-navy lg:text-4xl">
            Recent <span className="text-brand">Blog</span>
          </h2>
          <p className="mx-auto max-w-2xl text-mist">
            Separated they live in. A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.seed} className="overflow-hidden rounded-xl bg-white shadow-sm">
              <div
                className="relative h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(https://picsum.photos/seed/${p.seed}/600/400)` }}
              >
                <div className="absolute left-4 top-4 rounded-lg bg-brand px-3 py-2 text-center text-white">
                  <span className="block text-lg font-bold">26</span>
                  <span className="text-xs">June</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-heading text-lg font-semibold text-navy">
                  <a href="#" className="hover:text-brand">
                    {p.title}
                  </a>
                </h3>
                <p className="mb-4 text-sm text-mist">
                  Far far away, behind the word mountains, far from the countries Vokalia and
                  Consonantia, there live the blind texts.
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </a>
                  <span className="flex items-center gap-1 text-xs text-mist">
                    <MessageCircle className="h-3 w-3" aria-hidden="true" /> {p.comments}
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
