const schedule = [
  { time: '3:00-4:00pm', date: '12 Feb 2020', name: 'Mr. Zosoldos', seed: 'gigfest-prog1' },
  { time: '3:00-4:00pm', date: '12 Feb 2020', name: 'Protik Hasan', seed: 'gigfest-prog2' },
  { time: '3:00-4:00pm', date: '12 Feb 2020', name: 'Salmon Vicky', seed: 'gigfest-prog3' },
  { time: '3:00-4:00pm', date: '12 Feb 2020', name: 'Filaris Habol', seed: 'gigfest-prog4' },
]

export function ProgramDetails() {
  return (
    <section
      className="relative py-24"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/gigfest-program/1920/1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-16 text-center font-heading text-4xl uppercase tracking-wider text-white">
          Program Details
        </h2>

        <div className="mx-auto max-w-3xl">
          {/* Vertical timeline */}
          <div className="relative border-l-2 border-brand/40 pl-8">
            {schedule.map((item, i) => (
              <div key={i} className="relative mb-12 last:mb-0">
                {/* Circle indicator */}
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-brand bg-dark-bg" />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex-1">
                    <span className="font-sans text-sm uppercase tracking-wider text-brand">
                      {item.time}
                    </span>
                    <h3 className="mt-1 font-heading text-xl uppercase text-white">{item.date}</h3>
                  </div>
                  <img
                    src={`https://picsum.photos/seed/${item.seed}/80/80`}
                    alt={item.name}
                    className="h-16 w-16 rounded-full object-cover"
                    loading="lazy"
                  />
                  <h4 className="font-heading text-lg uppercase text-white">{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
