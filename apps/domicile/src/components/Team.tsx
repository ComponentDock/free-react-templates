const teamMembers = [
  {
    name: 'Glenn Watson',
    role: 'Managing Director (Sales)',
    image: 'https://picsum.photos/seed/domicile-team1/400/500',
  },
  {
    name: 'Eva Yates',
    role: 'Managing Director (Marketing)',
    image: 'https://picsum.photos/seed/domicile-team2/400/500',
  },
  {
    name: 'Ethan Hopkins',
    role: 'Managing Director (Finance)',
    image: 'https://picsum.photos/seed/domicile-team3/400/500',
  },
  {
    name: 'Maud Graham',
    role: 'Managing Director (Operations)',
    image: 'https://picsum.photos/seed/domicile-team4/400/500',
  },
] as const

const socialIcons = [
  { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  {
    label: 'Twitter',
    path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  },
  {
    label: 'Dribbble',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.156-.12-.308-.18-.461a9.502 9.502 0 0 0-1.94-4.216c1.568-1.389 3.36-1.052 3.89-1.052z',
  },
  {
    label: 'Behance',
    path: 'M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z',
  },
] as const

export function Team() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold uppercase text-ink">
          Meet Our Team
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-body">
          Our dedicated professionals are committed to delivering exceptional results for every
          project.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="group relative overflow-hidden bg-white shadow">
              <img
                src={member.image}
                alt={member.name}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h4 className="text-lg font-bold text-white">{member.name}</h4>
                <p className="mt-1 text-sm text-gray-300">{member.role}</p>
                <div className="mt-4 flex gap-3">
                  {socialIcons.map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={`${member.name} on ${s.label}`}
                      className="text-white/70 transition-colors hover:text-primary-400"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
