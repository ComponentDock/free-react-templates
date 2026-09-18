const teamMembers = [
  {
    name: 'Jean Smith',
    role: 'Mining Expert',
    image: 'https://picsum.photos/seed/stratum-team1/200/200',
  },
  {
    name: 'Bob Carry',
    role: 'Project Manager',
    image: 'https://picsum.photos/seed/stratum-team2/200/200',
  },
  {
    name: 'Ricky Fisher',
    role: 'Engineer',
    image: 'https://picsum.photos/seed/stratum-team3/200/200',
  },
  {
    name: 'Sarah Wells',
    role: 'Geologist',
    image: 'https://picsum.photos/seed/stratum-team4/200/200',
  },
  {
    name: 'Tom Hardy',
    role: 'Operations Lead',
    image: 'https://picsum.photos/seed/stratum-team5/200/200',
  },
  {
    name: 'Lisa Chen',
    role: 'Environmental Analyst',
    image: 'https://picsum.photos/seed/stratum-team6/200/200',
  },
]

const socialIcons = [
  {
    label: 'Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Twitter',
    path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
  },
  {
    label: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
]

export function Team() {
  return (
    <section id="team" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading uppercase text-black mb-4">Our Team</h2>
          <p className="text-[#939393] max-w-2xl mx-auto">
            Our expert team brings decades of combined experience in mining, engineering, and
            geological sciences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="mb-4 flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-2 border-transparent group-hover:border-[#ff8b00] transition-all"
                />
              </div>
              <h3 className="text-lg text-black mb-1">{member.name}</h3>
              <span className="text-xs text-[#b8b8b8] uppercase tracking-widest block mb-3">
                {member.role}
              </span>
              <div className="flex justify-center gap-2">
                {socialIcons.map((icon) => (
                  <a
                    key={icon.label}
                    href="#"
                    className="w-8 h-8 border-2 border-[#e9ecef] rounded flex items-center justify-center text-[#939393] hover:border-[#ff8b00] hover:text-[#ff8b00] hover:bg-[#ff8b00] hover:text-white transition-all"
                    aria-label={member.name}
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d={icon.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
