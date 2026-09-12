const TOURNAMENTS = [
  {
    title: 'Cyber Nexus Championship',
    badge: 'Premium Tournament',
    startDate: 'June 20, 2025',
    endDate: 'July 01, 2025',
    participants: '10 teams',
    organizer: 'Fragzone Admin',
    prizes: '1st $2,000 · 2nd $1,000 · 3rd $500',
    image: 'https://picsum.photos/seed/fragzone-tourney1/300/200',
  },
  {
    title: 'Shadow Realms Arena',
    badge: 'Premium Tournament',
    startDate: 'July 15, 2025',
    endDate: 'July 25, 2025',
    participants: '16 teams',
    organizer: 'Fragzone Admin',
    prizes: '1st $3,000 · 2nd $1,500 · 3rd $750',
    image: 'https://picsum.photos/seed/fragzone-tourney2/300/200',
  },
]

export function Tournaments() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-6xl px-4">
        <span className="mb-8 inline-block bg-badge-orange px-5 py-2 text-sm font-semibold uppercase text-white">
          Tournaments
        </span>
        <div className="grid gap-6 md:grid-cols-2">
          {TOURNAMENTS.map((t) => (
            <div
              key={t.title}
              className="relative flex flex-col bg-card p-6 md:flex-row md:items-start md:gap-6"
            >
              <span className="absolute left-4 top-4 z-10 inline-block bg-badge-gold px-4 py-1.5 text-xs font-semibold uppercase text-heading">
                {t.badge}
              </span>
              <div className="mb-4 overflow-hidden md:mb-0 md:w-1/3">
                <img src={t.image} alt={t.title} className="h-48 w-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-xl font-semibold text-primary">{t.title}</h3>
                <div className="space-y-1.5 text-sm">
                  <div>
                    <span className="text-gray-400">Tournament Begins: </span>
                    <span className="font-semibold text-white">{t.startDate}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Tournament Ends: </span>
                    <span className="font-semibold text-white">{t.endDate}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Participants: </span>
                    <span className="font-semibold text-white">{t.participants}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Organizer: </span>
                    <span className="font-semibold text-white">{t.organizer}</span>
                  </div>
                  <div className="mt-2">
                    <span className="font-semibold text-primary">Prizes: </span>
                    <span className="text-gray-400">{t.prizes}</span>
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
