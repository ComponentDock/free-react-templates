import { Globe } from 'lucide-react'

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  )
}

const teamMembers = [
  { name: 'Bruce Roberts', role: 'Volunteer Leader', seed: 'loanforge-team1' },
  { name: 'Sarah Mitchell', role: 'Senior Advisor', seed: 'loanforge-team2' },
  { name: 'David Chen', role: 'Loan Specialist', seed: 'loanforge-team3' },
  { name: 'Emily Parker', role: 'Client Manager', seed: 'loanforge-team4' },
]

const socialLinks = [
  { Icon: FacebookIcon, label: 'Facebook', href: '#' },
  { Icon: TwitterIcon, label: 'Twitter', href: '#' },
  { Icon: Globe, label: 'Website', href: '#' },
]

export function Team() {
  return (
    <section className="bg-bg-light py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-brand">
            Our Loan Section Team Members
          </p>
          <h2 className="text-3xl font-bold text-navy md:text-4xl">
            Take a look to our professional team members.
          </h2>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name + member.role}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/${member.seed}/400/400`}
                  alt={member.name}
                  className="h-64 w-full object-cover"
                />
                {/* Social overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-navy/0 opacity-0 transition-opacity hover:bg-navy/60 hover:opacity-100">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy transition-colors hover:bg-brand hover:text-white"
                    >
                      <social.Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                <p className="text-sm text-text-dim">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
