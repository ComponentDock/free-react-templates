const sermons = [
  { title: 'Arise, Shine', author: 'Luis Matthew', date: 'March 28, 2018' },
  { title: 'Filled in Him', author: 'Luis Matthew', date: 'March 28, 2018' },
  { title: 'Jehovah the Creator', author: 'Luis Matthew', date: 'March 28, 2018' },
]

export function RecentSermons() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block bg-golden-400 px-4 py-0.5 text-[11px] uppercase tracking-[0.2em] text-white">
            Recent Sermons
          </span>
          <h2 className="font-heading text-3xl text-charcoal-800">Listen Our Sermons</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sermons.map((sermon) => (
            <div key={sermon.title} className="bg-black text-white">
              <div className="p-5">
                <h3 className="mb-2 font-heading text-lg">
                  <a href="#" className="text-white transition-opacity hover:opacity-80">
                    {sermon.title}
                  </a>
                </h3>
                <p className="text-[11px] uppercase tracking-[0.1em] text-white/60">
                  by {sermon.author} on {sermon.date}
                </p>
              </div>
              <div className="border-t border-charcoal-700 px-5 py-3">
                <audio controls preload="none" className="w-full">
                  <source
                    src="https://www.largesound.com/ashborytour/sound/AshboryBYU.mp3"
                    type="audio/mpeg"
                  />
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
