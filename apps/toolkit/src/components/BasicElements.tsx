export function BasicElements() {
  return (
    <section className="bg-white px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-4xl font-light text-gray-800">Basic Elements</h2>

        <div id="buttons" className="mb-16">
          <h3 className="mb-2 text-2xl font-normal text-gray-700">Buttons</h3>
          <p className="mb-6 text-gray-500">Pick your style</p>
          <div className="flex flex-wrap gap-3">
            <button className="rounded bg-primary-400 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-500">
              Primary
            </button>
            <button className="rounded bg-primary-400 px-6 py-2 text-sm font-medium text-white opacity-75 transition-colors hover:opacity-100">
              Secondary
            </button>
            <button className="rounded bg-primary-400 px-6 py-2 text-sm font-medium text-white opacity-50 transition-colors hover:opacity-75">
              Disabled
            </button>
            <button className="rounded border-2 border-primary-400 bg-transparent px-6 py-2 text-sm font-medium text-primary-400 transition-colors hover:bg-primary-400 hover:text-white">
              Outline
            </button>
            <button className="rounded-full bg-primary-400 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-500">
              Rounded
            </button>
            <button className="rounded-full border-2 border-primary-400 bg-transparent px-6 py-2 text-sm font-medium text-primary-400 transition-colors hover:bg-primary-400 hover:text-white">
              Outline Rounded
            </button>
          </div>
        </div>

        <div id="forms" className="mb-16">
          <h3 className="mb-2 text-2xl font-normal text-gray-700">Form Elements</h3>
          <p className="mb-6 text-gray-500">Custom form controls</p>
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="Text input"
              className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
            />
            <select className="w-full rounded border border-gray-300 bg-white px-4 py-2 text-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400">
              <option>Select option</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
        </div>

        <div id="cards" className="mb-16">
          <h3 className="mb-2 text-2xl font-normal text-gray-700">Cards</h3>
          <p className="mb-6 text-gray-500">Content containers</p>
          <div className="grid gap-6 md:grid-cols-3">
            {['Design', 'Development', 'Marketing'].map((title) => (
              <div key={title} className="rounded border border-gray-200 bg-white p-6 shadow-sm">
                <img
                  src={`https://picsum.photos/seed/toolkit-${title.toLowerCase()}/400/250`}
                  alt={title}
                  className="mb-4 h-40 w-full rounded object-cover"
                />
                <h4 className="mb-2 text-lg font-medium text-gray-800">{title}</h4>
                <p className="text-sm text-gray-500">
                  Professional {title.toLowerCase()} solutions for your business needs.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div id="alerts">
          <h3 className="mb-2 text-2xl font-normal text-gray-700">Alerts</h3>
          <p className="mb-6 text-gray-500">Feedback messages</p>
          <div className="flex flex-col gap-3">
            <div className="rounded border-l-4 border-green-400 bg-green-50 p-4 text-sm text-green-700">
              Success! Your changes have been saved.
            </div>
            <div className="rounded border-l-4 border-blue-400 bg-blue-50 p-4 text-sm text-blue-700">
              Info: A new version is available.
            </div>
            <div className="rounded border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm text-yellow-700">
              Warning: Your session will expire soon.
            </div>
            <div className="rounded border-l-4 border-red-400 bg-red-50 p-4 text-sm text-red-700">
              Error: Something went wrong. Please try again.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
