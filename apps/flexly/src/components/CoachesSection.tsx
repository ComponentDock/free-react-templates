import { COACHES } from '../data'

/* Coaches — centered "Our Coaches" heading and four round-photo staff
   cards with name + position. */
export function CoachesSection() {
  return (
    <section id="coaches-section" aria-label="Our coaches" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[3px] text-brand">Team</span>
          <h2 className="mt-2 text-4xl font-bold text-black">Our Coaches</h2>
          <p className="mt-4 text-black/70">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COACHES.map((coach) => (
            <div key={coach.name} className="flex flex-col items-center text-center">
              <img
                src={coach.photo}
                alt=""
                className="h-[120px] w-[120px] rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-bold text-black">{coach.name}</h3>
              <span className="mt-1 text-[13px] uppercase tracking-wide text-black/50">
                {coach.position}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
