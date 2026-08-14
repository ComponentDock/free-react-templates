import { retroShows } from '../data'

function RetroCard({
  title,
  schedule,
  img,
  alt,
  className,
}: {
  title: string
  schedule: string
  img: string
  alt: string
  className: string
}) {
  return (
    <a href="#schedule" className={`group relative block overflow-hidden ${className}`}>
      <img
        src={img}
        alt={alt}
        className="absolute inset-0 h-full w-full scale-[1.05] object-cover transition-transform duration-300 group-hover:scale-100"
      />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 px-0 transition-transform duration-300 group-hover:-translate-y-[65%]">
        <h3 className="inline bg-brand py-[5px] pl-[10px] pr-0 text-xl text-white shadow-[10px_0_0_#7cbd1e]">
          {title}
        </h3>
        <span className="mt-2 block bg-ink py-[4px] pl-[10px] text-[11px] uppercase tracking-[0.15em] text-white shadow-[10px_0_0_#000]">
          {schedule}
        </span>
      </div>
    </a>
  )
}

export function WeeklyProgram() {
  const [tall, ...stacked] = retroShows
  const featured = tall as (typeof retroShows)[number]
  return (
    <section id="schedule" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-5 max-w-xl text-center">
          <h2 className="relative inline-block pb-5 text-[20px] uppercase tracking-[0.2em] text-black after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-[70px] after:-translate-x-1/2 after:bg-brand">
            Weekly Radio Program
          </h2>
          <p className="mt-4 text-body">
            From morning warm-ups to late-night classics, our weekly lineup keeps every hour on air
            fresh and worth tuning in for.
          </p>
        </div>

        <div className="site-block-retro mt-10 flex flex-col gap-8 md:flex-row">
          <RetroCard
            className="h-[300px] w-full md:w-[48%]"
            title={featured.title}
            schedule={featured.schedule}
            img={featured.img}
            alt={featured.alt}
          />
          <div className="flex w-full flex-col md:w-[48%]">
            {stacked.map((card, index) => (
              <RetroCard
                key={card.alt}
                className={`h-[200px] w-full ${index === 0 ? 'mb-[8%]' : ''}`}
                title={card.title}
                schedule={card.schedule}
                img={card.img}
                alt={card.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
