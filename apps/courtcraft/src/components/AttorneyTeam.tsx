import { ATTORNEYS } from '../data'

export function AttorneyTeam() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-center text-2xl font-bold text-black md:text-3xl">
          Our Attorneys
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-[#828282]">
          Meet the experienced legal professionals who bring dedication, expertise, and passion to
          every case they handle.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ATTORNEYS.map((atty) => (
            <div key={atty.name} className="group overflow-hidden rounded-lg text-center">
              <div className="overflow-hidden">
                <img
                  src={atty.image}
                  alt={atty.name}
                  className="h-[350px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="py-4">
                <h3 className="text-lg font-semibold text-black">{atty.name}</h3>
                <p className="text-sm text-[#828282]">{atty.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
