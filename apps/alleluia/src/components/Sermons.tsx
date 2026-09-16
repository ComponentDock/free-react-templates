const sermons = [
  {
    title: 'Walking in Faith',
    preacher: 'Pastor John Brighton',
    date: 'September 10, 2025',
    image: 'https://picsum.photos/seed/alleluia-sermon1/400/250',
  },
  {
    title: 'The Power of Prayer',
    preacher: 'Pastor Julia Amber',
    date: 'September 3, 2025',
    image: 'https://picsum.photos/seed/alleluia-sermon2/400/250',
  },
  {
    title: 'Grace Upon Grace',
    preacher: 'Pastor Ashley Young',
    date: 'August 27, 2025',
    image: 'https://picsum.photos/seed/alleluia-sermon3/400/250',
  },
]

export function Sermons() {
  return (
    <section id="sermons" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-oldstandard text-4xl font-bold text-text-primary text-center mb-12">
          Recent Sermons
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {sermons.map((sermon) => (
            <div key={sermon.title} className="bg-surface rounded-lg overflow-hidden shadow-md">
              <img src={sermon.image} alt={sermon.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-oldstandard text-xl font-bold text-text-primary mb-2">
                  {sermon.title}
                </h3>
                <p className="text-text-secondary text-sm mb-1">{sermon.preacher}</p>
                <p className="text-text-secondary text-xs">{sermon.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
