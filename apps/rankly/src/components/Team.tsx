/* Brand icons — lucide-react removed brand icons */

const TEAM = [
  {
    name: 'Ethel Davis',
    role: 'Managing Director (Sales)',
    image: 'https://picsum.photos/seed/rankly-team1/400/500',
  },
  {
    name: 'Rodney Cooper',
    role: 'Creative Art Director',
    image: 'https://picsum.photos/seed/rankly-team2/400/500',
  },
  {
    name: 'Dora Walker',
    role: 'Senior Core Developer',
    image: 'https://picsum.photos/seed/rankly-team3/400/500',
  },
  {
    name: 'Lena Keller',
    role: 'Creative Content Developer',
    image: 'https://picsum.photos/seed/rankly-team4/400/500',
  },
]

export function Team() {
  return (
    <section id="team" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink">About Our Creative Team</h2>
          <p className="text-mist">Who are in extremely love with eco friendly system.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {TEAM.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto mb-4 overflow-hidden rounded-lg">
                <img src={member.image} alt={member.name} className="h-72 w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors hover:bg-black/50">
                  <div className="flex gap-4 opacity-0 transition-opacity hover:opacity-100">
                    <a href="#" aria-label={`${member.name} on Facebook`}>
                      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" aria-label={`${member.name} on Twitter`}>
                      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#" aria-label={`${member.name} on LinkedIn`}>
                      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-ink">{member.name}</h3>
              <p className="text-sm text-mist">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
