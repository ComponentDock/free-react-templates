import { ArrowRight } from 'lucide-react'
import { ROOM_ROWS } from '../data'

/* Room (source: div.room_part — two full-bleed alternating photo rows, each
   with a white overlay card carrying a title and a "Read More" text button
   that turns gold on hover). */
export function Room() {
  return (
    <section aria-label="Rooms" className="overflow-hidden bg-white pb-10 pt-[130px]">
      <div className="space-y-16">
        {ROOM_ROWS.map((row, index) => (
          <div key={row.title} className="relative">
            <img
              src={row.image}
              alt={row.title}
              className="h-[420px] w-full object-cover"
            />
            <div
              className={
                index === 0
                  ? 'absolute right-[30px] top-1/2 z-[9] w-[510px] max-w-[90%] -translate-y-1/2 bg-white p-10 shadow-[1px_15px_30px_rgba(20,48,58,0.15)]'
                  : 'absolute left-[30px] top-1/2 z-[9] w-[510px] max-w-[90%] -translate-y-1/2 bg-white p-10 shadow-[1px_15px_30px_rgba(20,48,58,0.15)]'
              }
            >
              <h3 className="text-[22px] font-semibold leading-snug text-ink">{row.title}</h3>
              <a
                href="#properties"
                className="group relative mt-5 inline-block pl-4 text-[14px] font-medium text-muted transition-colors hover:text-brand"
              >
                <span
                  className="absolute -left-1 top-1/2 flex h-[30px] w-[30px] -translate-y-1/2 items-center justify-center rounded-full bg-brand"
                  aria-hidden="true"
                >
                  <ArrowRight className="h-4 w-4 text-white" />
                </span>
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
