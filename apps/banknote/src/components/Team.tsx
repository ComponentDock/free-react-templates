const members = [
  { name: 'Kaiara Spencer', role: 'Financial Advisor', img: 'banknote-team1' },
  { name: 'Dave Simpson', role: 'Investment Analyst', img: 'banknote-team2' },
  { name: 'Ben Thompson', role: 'Credit Specialist', img: 'banknote-team3' },
  { name: 'Kyla Stewart', role: 'Loan Officer', img: 'banknote-team4' },
  { name: 'Jake Smith', role: 'Risk Manager', img: 'banknote-team5' },
  { name: 'Ava Johnson', role: 'Compliance Lead', img: 'banknote-team6' },
  { name: 'Liam Brown', role: 'Account Executive', img: 'banknote-team7' },
  { name: 'Mia Davis', role: 'Client Relations', img: 'banknote-team8' },
]

function SocialIcon({ label, path }: { label: string; path: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-brand"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d={path} />
      </svg>
    </a>
  )
}

const socials = [
  { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  {
    label: 'Twitter',
    path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  },
  {
    label: 'LinkedIn',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
  },
]

export function Team() {
  return (
    <section id="team" className="border-b bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Meet Team</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Our experienced team of financial professionals is here to guide you every step of the
            way.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div key={m.name} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${m.img}/400/500`}
                alt={m.name}
                className="h-72 w-full object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 to-transparent pb-6 pt-20 opacity-0 transition group-hover:opacity-100">
                <div className="flex gap-2">
                  {socials.map((s) => (
                    <SocialIcon key={s.label} label={s.label} path={s.path} />
                  ))}
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold">{m.name}</h4>
                <p className="text-sm text-gray-500">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
