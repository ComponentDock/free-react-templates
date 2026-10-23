const tools = ['Slack', 'Trello', 'Dropbox', 'GitHub', 'Figma', 'Notion'] as const

export function Integrations() {
  return (
    <section id="integrations" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            Integrations
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl lg:text-5xl">
            Integrates With Your Favorite Tools
          </h2>
        </div>

        <ul className="mt-14 flex flex-wrap justify-center gap-6">
          {tools.map((tool) => (
            <li
              key={tool}
              className="flex h-16 items-center rounded-2xl border border-gray-100 bg-paper px-8 font-display font-bold text-mist shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
