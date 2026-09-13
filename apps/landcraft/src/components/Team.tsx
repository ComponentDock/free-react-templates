const team = [
  {
    name: 'Alex Jeson',
    role: 'Marketing',
    image: 'https://picsum.photos/seed/landcraft-team1/300/300',
  },
  {
    name: 'Connor Charles',
    role: 'Founder',
    image: 'https://picsum.photos/seed/landcraft-team2/300/300',
  },
  {
    name: 'Robert Kyle',
    role: 'Sales Head',
    image: 'https://picsum.photos/seed/landcraft-team3/300/300',
  },
  {
    name: 'Brayden Shar',
    role: 'The Boss',
    image: 'https://picsum.photos/seed/landcraft-team4/300/300',
  },
]

const socialIcons = [
  { label: 'Facebook', abbr: 'f' },
  { label: 'Twitter', abbr: 't' },
  { label: 'LinkedIn', abbr: 'in' },
  { label: 'Instagram', abbr: 'ig' },
]

export default function Team() {
  return (
    <section id="team" className="py-24" data-testid="team">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Best Team</h2>
          <p className="text-body">
            Meet the talented professionals who make Landcraft exceptional.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative rounded-lg overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-brand text-sm mb-3">{member.role}</p>
              <div className="flex justify-center gap-3">
                {socialIcons.map(({ label, abbr }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="text-body hover:text-brand transition-colors text-xs font-bold"
                  >
                    {abbr}
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
