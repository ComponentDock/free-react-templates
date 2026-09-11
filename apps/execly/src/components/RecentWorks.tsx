import { recentWorks } from '../data'

export function RecentWorks() {
  return (
    <section id="work" className="bg-white py-24">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-3xl font-semibold text-heading">
            Our Recent Works may impress you
          </h1>
          <p className="text-body-text">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recentWorks.map((work, i) => (
            <div
              key={i}
              className="group relative flex min-h-[350px] flex-col justify-end bg-cover bg-center p-6"
              style={{
                backgroundImage: `url('https://picsum.photos/seed/execly-w-${work.imageSeed}/600/400')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative z-10">
                <h4 className="mb-2 text-lg font-semibold text-white">{work.title}</h4>
                <p className="mb-4 text-sm text-white/80">{work.description}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={`https://picsum.photos/seed/execly-author-${i}/40/40`}
                    alt={work.author}
                    className="h-10 w-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-sm font-medium text-white">{work.author}</h6>
                    <span className="text-xs text-white/60">{work.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
