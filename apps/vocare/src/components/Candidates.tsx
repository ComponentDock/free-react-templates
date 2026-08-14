import { CANDIDATES, JOB_LOCATION } from '../data'

/* Latest candidates band on solid brand blue: six candidate cards with a
   180px circular photo, white name and uppercase location. The original
   carousel renders as a static grid in the recreation. */
export function Candidates() {
  return (
    <section className="bg-brand py-[6em]">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[2px] text-white/70">
          Candidates
        </p>
        <h2 className="mt-2 text-[28px] font-medium text-white md:text-[38px]">
          Latest Candidates
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {CANDIDATES.map((candidate) => (
            <a key={candidate.seed} href="#" className="group block">
              <img
                src={`https://picsum.photos/seed/${candidate.seed}/360/360`}
                alt={candidate.name}
                className="mx-auto h-[180px] w-[180px] rounded-full object-cover ring-4 ring-white/20 transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <h3 className="mt-4 text-[20px] font-medium text-white">{candidate.name}</h3>
              <p className="mt-1 text-[14px] font-semibold uppercase tracking-wide text-white">
                {JOB_LOCATION}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
