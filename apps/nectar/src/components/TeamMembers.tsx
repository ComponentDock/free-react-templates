import { cn } from '@free-react-templates/ui'

const teamMembers = [
  { name: 'Adam Johnson', role: 'CEO & Founder', seed: 'nectar-team-1' },
  { name: 'Sarah Williams', role: 'Project Manager', seed: 'nectar-team-2' },
  { name: 'Michael Brown', role: 'Lead Architect', seed: 'nectar-team-3' },
  { name: 'Emily Davis', role: 'Interior Designer', seed: 'nectar-team-4' },
]

const socialLinks = ['twitter', 'facebook', 'instagram', 'linkedin'] as const

export function TeamMembers() {
  return (
    <section className="bg-light py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-heading text-3xl font-bold text-heading md:text-4xl">
          Meet Our Experts
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-brand" aria-hidden="true" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-sm border border-muted bg-paper transition-shadow hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${member.seed}/300/300`}
                  alt={member.name}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-heading text-lg font-bold text-heading">{member.name}</h3>
                <p className="text-sm text-body">{member.role}</p>
                <div className="mt-3 flex justify-center gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link}
                      href={`#${link}`}
                      aria-label={`${member.name} on ${link}`}
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-full border border-muted text-xs text-body transition-colors hover:border-brand hover:bg-brand hover:text-white',
                      )}
                    >
                      {link[0]!.toUpperCase()}
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
