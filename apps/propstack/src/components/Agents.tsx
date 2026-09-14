const AGENTS = [
  {
    name: 'Kaiara Spencer',
    image: 'https://picsum.photos/seed/agent1/200/200',
  },
  {
    name: 'Dave Simpson',
    image: 'https://picsum.photos/seed/agent2/200/200',
  },
  {
    name: 'Ben Thompson',
    image: 'https://picsum.photos/seed/agent3/200/200',
  },
  {
    name: 'Kyla Stewart',
    image: 'https://picsum.photos/seed/agent4/200/200',
  },
]

function SocialIcon({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-gray-400 transition-colors hover:text-primary"
    >
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
      </svg>
    </a>
  )
}

export function Agents() {
  return (
    <section id="agents" className="border-t border-gray-100 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Agents</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {AGENTS.map((agent) => (
            <div key={agent.name} className="text-center">
              <img
                src={agent.image}
                alt={agent.name}
                className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
              />
              <h3 className="mb-2 text-xl font-bold text-gray-900">{agent.name}</h3>
              <div className="flex justify-center gap-3">
                <SocialIcon label="Facebook" href="#" />
                <SocialIcon label="Twitter" href="#" />
                <SocialIcon label="LinkedIn" href="#" />
                <SocialIcon label="Instagram" href="#" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
