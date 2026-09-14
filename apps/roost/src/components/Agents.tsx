const agents = [
  {
    image: 'https://picsum.photos/seed/roost-agent1/300/300',
    name: 'James Stallon',
    listings: 10,
  },
  {
    image: 'https://picsum.photos/seed/roost-agent2/300/300',
    name: 'James Stallon',
    listings: 10,
  },
  {
    image: 'https://picsum.photos/seed/roost-agent3/300/300',
    name: 'James Stallon',
    listings: 10,
  },
]

export function Agents() {
  return (
    <section id="agents" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">Our Agents</h2>
          <p className="text-gray-500">Meet our professional agents</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {agents.map((agent, i) => (
            <div key={`${agent.name}-${i}`} className="text-center">
              <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                <img src={agent.image} alt={agent.name} className="h-full w-full object-cover" />
              </div>
              <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-600">
                I&apos;m an agent
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900">{agent.name}</h3>
              <p className="text-sm text-gray-500">Listing &mdash; {agent.listings} Properties</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
