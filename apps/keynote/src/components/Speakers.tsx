const speakers = [
  { name: 'Dr. Maya Patel', role: 'VP of Research, Anthropic', talk: 'Keynote' },
  { name: 'Andrej Kovalenko', role: 'ML Engineer, Mistral AI', talk: 'Efficient Training' },
  { name: 'Dr. Sophia Chen', role: 'Director of Research, Cohere', talk: 'RAG at Scale' },
  { name: 'Marcus Thompson', role: 'Staff Engineer, OpenAI', talk: 'LLMs in Production' },
  { name: 'Dr. Yuki Tanaka', role: 'Research Scientist, Google DeepMind', talk: 'Multimodal AI' },
  { name: 'James Okonkwo', role: 'Platform Lead, Hugging Face', talk: 'Open Source AI' },
  { name: 'Dr. Elena Rossi', role: 'Head of AI, Modal', talk: 'Sub-100ms Inference' },
  { name: 'Kevin Park', role: 'Founding Engineer, Replicate', talk: 'Agent Tooling' },
]

export function Speakers() {
  return (
    <section id="speakers" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Learn from the Best
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            80+ speakers from leading AI labs, research institutions, and pioneering companies.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {speakers.map((speaker) => (
            <li
              key={speaker.name}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/keynote-${speaker.name.split(' ').pop()?.toLowerCase()}/200/200`}
                alt={`${speaker.name} portrait`}
                className="mx-auto h-24 w-24 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">{speaker.name}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{speaker.role}</p>
              <p className="mt-2 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
                {speaker.talk}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
