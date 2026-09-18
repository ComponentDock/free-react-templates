import { MessageCircle } from 'lucide-react'

const articles = [
  {
    seed: 'cleanpage-blog-1',
    date: 'Oct. 12, 2018',
    author: 'Admin',
    comments: 3,
    title: 'Even the all-powerful Pointing has no control about the blind texts',
  },
  {
    seed: 'cleanpage-blog-2',
    date: 'Oct. 12, 2018',
    author: 'Admin',
    comments: 3,
    title: 'Even the all-powerful Pointing has no control about the blind texts',
  },
  {
    seed: 'cleanpage-blog-3',
    date: 'Oct. 12, 2018',
    author: 'Admin',
    comments: 3,
    title: 'Even the all-powerful Pointing has no control about the blind texts',
  },
]

export function CaseStudy() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-brand">
            Our latest update
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink md:text-4xl">Case Study</h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-mist">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((a) => (
            <div key={a.seed} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(https://picsum.photos/seed/${a.seed}/600/300)` }}
              />
              <div className="p-6">
                <div className="mb-3 flex gap-4 font-sans text-xs text-mist">
                  <span>{a.date}</span>
                  <span>{a.author}</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} /> {a.comments}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold leading-snug text-ink">
                  {a.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
