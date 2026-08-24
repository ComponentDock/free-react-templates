/* Inline SVG brand icons — lucide-react removed brand icons. */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const TEAM = [
  {
    name: 'Bradley Costa',
    role: 'CEO',
    img: 'https://picsum.photos/seed/nexus-team-bradley/300/300',
  },
  {
    name: 'Chanice Muir',
    role: 'Creative Director',
    img: 'https://picsum.photos/seed/nexus-team-chanice/300/300',
  },
  {
    name: 'Alisha Ellison',
    role: 'Lead Developer',
    img: 'https://picsum.photos/seed/nexus-team-alisha/300/300',
  },
]

export function Team() {
  return (
    <section id="about" className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-text">Office and team</h2>

        {/* Office */}
        <div className="mb-16">
          <h3 className="mb-4 text-xl font-semibold text-text">Our Office</h3>
          <p className="max-w-2xl text-gray-600">
            Our office is located in the heart of Los Angeles. We have a modern, collaborative
            workspace designed to foster creativity and innovation.
          </p>
        </div>

        {/* Team */}
        <div>
          <h3 className="mb-8 text-xl font-semibold text-text">Our Team</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="group bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                />
                <h4 className="mb-1 text-lg font-semibold text-brand-pink">{member.name}</h4>
                <p className="mb-4 text-sm text-gray-500">{member.role}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href="#"
                    aria-label={`${member.name} Facebook`}
                    className="text-gray-400 hover:text-brand-pink transition-colors"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${member.name} Twitter`}
                    className="text-gray-400 hover:text-brand-pink transition-colors"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${member.name} LinkedIn`}
                    className="text-gray-400 hover:text-brand-pink transition-colors"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
