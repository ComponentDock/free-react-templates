const HIGHLIGHTS = [
  {
    title: 'Happier customers',
    description: 'Design better websites and spend less with Essentials.',
    image: 'https://picsum.photos/seed/crest-cust/400/300',
  },
  {
    title: 'Faster growth',
    description: 'Design better websites and spend less with Essentials.',
    image: 'https://picsum.photos/seed/crest-grow/400/300',
  },
  {
    title: 'Connected workflow',
    description: 'Design better websites and spend less with Essentials.',
    image: 'https://picsum.photos/seed/crest-work/400/300',
  },
]

export function ClientHighlights() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
        {HIGHLIGHTS.map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center">
            <img
              src={item.image}
              alt={item.title}
              className="mb-6 h-48 w-full rounded-lg object-cover"
              loading="lazy"
            />
            <h2 className="mb-3 text-2xl font-bold text-navy">{item.title}</h2>
            <p className="text-navy-gray">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
