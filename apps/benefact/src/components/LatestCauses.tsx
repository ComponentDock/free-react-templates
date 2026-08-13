import { latestCauses } from '../data'

export function LatestCauses() {
  return (
    <section id="causes" aria-label="Latest causes" className="site-section py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="heading-20219 mb-5 grid grid-cols-1 gap-6 md:grid-cols-12">
          <h2 className="font-script text-4xl text-ink md:col-span-4 md:text-5xl">Latest Causes</h2>
          <p className="font-light text-ink md:col-span-8 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem modi, quaerat laborum id
            fugit blanditiis ratione delectus assumenda, ea voluptates dignissimos possimus quos,
            repellendus illum officiis.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {latestCauses.map((cause, i) => (
            <article key={`${cause.badge}-${i}`} className="cause shadow-sm">
              <div className="relative">
                <img src={cause.img} alt={cause.alt} className="h-56 w-full object-cover" />
                <div className="custom-progress-wrap absolute inset-x-0 bottom-0 p-3">
                  <div className="flex items-center justify-end">
                    <span className="text-xs text-white">80% complete</span>
                  </div>
                  <div className="mt-1 h-[7px] w-full rounded-sm bg-[#ccc]">
                    <div
                      className="h-full rounded-r"
                      style={{ width: '80%', backgroundColor: cause.fill }}
                    />
                  </div>
                </div>
              </div>
              <div className="border border-t-0 border-gray-200 px-4 pb-3 pt-3">
                <span
                  className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${cause.badgeClass}`}
                >
                  {cause.badge}
                </span>
                <h3 className="mt-3 text-xl font-bold text-ink">
                  <a href="#causes" className="transition-colors hover:text-primary">
                    {cause.title}
                  </a>
                </h3>
                <div className="mt-3 flex items-center justify-between border-y border-gray-200 py-2">
                  <span className="text-sm font-light text-ink">Donated</span>
                  <span className="text-sm font-bold text-primary">{cause.donated}</span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <img
                    src={cause.avatar}
                    alt=""
                    className="h-[50px] w-[50px] rounded-full object-cover"
                  />
                  <span className="text-sm font-light text-ink">{cause.organizer}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
