const integrations = [
  { name: 'Slack', icon: 'S' },
  { name: 'GitHub', icon: 'G' },
  { name: 'Stripe', icon: 'St' },
  { name: 'Figma', icon: 'Fi' },
  { name: 'Notion', icon: 'N' },
  { name: 'Zapier', icon: 'Z' },
  { name: 'Google', icon: 'Go' },
  { name: 'Trello', icon: 'Tr' },
] as const

export function Integrations() {
  return (
    <section className="bg-lavender py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-ink sm:text-4xl">
          Integrates With Your Favorite Tools
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-smoke">
          Connect Spark with the tools you already love and create a seamless workflow across all
          your platforms.
        </p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-4">
          {integrations.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-600">
                {tool.icon}
              </span>
              <span className="font-semibold text-ink">{tool.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-primary-500 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-600"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
