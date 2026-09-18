const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const team = [
  { name: 'Dr. Michael Barley', role: 'Implant Expert', seed: 'dentalyn-dentist-1' },
  { name: 'Dr. Sarah Chen', role: 'Orthodontist', seed: 'dentalyn-dentist-2' },
  { name: 'Dr. James Wilson', role: 'Cosmetic Dentist', seed: 'dentalyn-dentist-3' },
] as const

export function Team() {
  return (
    <section className="py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-2xl font-bold dark:text-white">Our Dentist</h2>
          <div className="mx-auto h-1 w-12 bg-primary-400" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-lg border border-gray-100 bg-card shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${member.seed}/400/500`}
                alt={member.name}
                className="h-72 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0">
                <div className="mb-4 flex justify-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
                  <a
                    href="#"
                    aria-label={`${member.name} on Facebook`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-400 shadow-md transition-colors hover:bg-primary-400 hover:text-white"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${member.name} on Twitter`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-400 shadow-md transition-colors hover:bg-primary-400 hover:text-white"
                  >
                    <TwitterIcon className="h-4 w-4" />
                  </a>
                </div>
                <div className="bg-gradient-to-t from-black/80 to-transparent px-4 py-3 text-center">
                  <h5 className="text-base font-semibold text-white">{member.name}</h5>
                  <p className="text-sm text-white/80">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
