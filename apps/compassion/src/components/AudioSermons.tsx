const sermons = [
  {
    title: 'Arise, Shine',
    author: 'Luis Matthew',
    date: 'March 28, 2018',
    image: 'https://picsum.photos/seed/compassion-sermon1/400/300',
  },
  {
    title: 'Walking in Grace',
    author: 'David Chen',
    date: 'April 4, 2018',
    image: 'https://picsum.photos/seed/compassion-sermon2/400/300',
  },
  {
    title: 'The Power of Prayer',
    author: 'Sarah Williams',
    date: 'April 11, 2018',
    image: 'https://picsum.photos/seed/compassion-sermon3/400/300',
  },
] as const

export function AudioSermons() {
  return (
    <section className="bg-gray-100 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-black">Audio Sermons</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sermons.map((sermon) => (
            <div key={sermon.title} className="overflow-hidden bg-black text-white">
              <img
                src={sermon.image}
                alt={sermon.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">
                  <a href="#sermons" className="hover:text-brand">
                    {sermon.title}
                  </a>
                </h3>
                <p className="mb-3 text-sm text-gray-400">
                  by {sermon.author} on {sermon.date}
                </p>
                <audio controls className="w-full">
                  <source src="#" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
