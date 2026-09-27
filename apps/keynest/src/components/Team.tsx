interface Agent {
  id: number
  name: string
  role: string
  image: string
}

const AGENTS: Agent[] = [
  {
    id: 1,
    name: 'Buster Hyman',
    role: 'Dual Agent',
    image: 'https://picsum.photos/seed/agent1/400/500',
  },
  {
    id: 2,
    name: 'Sara Connor',
    role: 'Senior Agent',
    image: 'https://picsum.photos/seed/agent2/400/500',
  },
  {
    id: 3,
    name: 'James Cooper',
    role: 'Property Expert',
    image: 'https://picsum.photos/seed/agent3/400/500',
  },
  {
    id: 4,
    name: 'Emily Rose',
    role: 'Listing Agent',
    image: 'https://picsum.photos/seed/agent4/400/500',
  },
]

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export function Team() {
  return (
    <section className="bg-mist py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading">Meet Our Agents</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {AGENTS.map((agent) => (
            <div key={agent.id} className="text-center">
              <div className="group relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-heading/70 to-transparent pb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex gap-3">
                    <a
                      href="#"
                      aria-label={`${agent.name} on Facebook`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-heading transition-colors hover:bg-primary hover:text-white"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      href="#"
                      aria-label={`${agent.name} on Twitter`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-heading transition-colors hover:bg-primary hover:text-white"
                    >
                      <TwitterIcon />
                    </a>
                    <a
                      href="#"
                      aria-label={`${agent.name} website`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-heading transition-colors hover:bg-primary hover:text-white"
                    >
                      <GlobeIcon />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-heading">{agent.name}</h3>
              <p className="text-sm text-body">{agent.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
