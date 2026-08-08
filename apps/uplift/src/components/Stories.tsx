const stories = [
  {
    quote:
      'The scholarship program changed everything for my daughter. She is the first in our family to finish high school.',
    name: 'Maria Gonzalez',
    role: 'Parent · Guatemala',
  },
  {
    quote:
      'The clean water well in our village means the children no longer miss school because of waterborne illness.',
    name: 'James Otieno',
    role: 'Community Leader · Kenya',
  },
  {
    quote:
      'I started a small tailoring business with a micro-loan. Today I employ three women from my neighborhood.',
    name: 'Sarah Kim',
    role: 'Entrepreneur · Vietnam',
  },
]

export function Stories() {
  return (
    <section id="stories" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Lives Transformed
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Real stories from the people your generosity reaches.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <figure
              key={story.name}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-800"
            >
              <blockquote className="text-gray-700 dark:text-gray-200">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/uplift-${stories.indexOf(story) + 2}/96/96`}
                  alt={`Portrait of ${story.name}`}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{story.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{story.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
