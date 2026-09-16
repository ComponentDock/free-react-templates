import { Play } from 'lucide-react'

const SERMONS = [
  {
    title: 'Arise, Shine',
    pastor: 'Luis Matthew',
    date: 'March 28, 2018',
  },
  {
    title: 'Filled in Him',
    pastor: 'Luis Matthew',
    date: 'March 28, 2018',
  },
  {
    title: 'Jehovah the Creator',
    pastor: 'Luis Matthew',
    date: 'March 28, 2018',
  },
]

export function Sermons() {
  return (
    <section className="bg-dark py-12" aria-label="Recent sermons">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block bg-brand px-4 py-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
            Recent Sermons
          </span>
          <h2 className="font-heading text-3xl text-white">Listen Our Sermons</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERMONS.map((sermon) => (
            <div key={sermon.title} className="bg-black p-5">
              <div className="mb-4 flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/nave-pastor-${sermon.title.replace(/\s/g, '')}/200/200`}
                  alt={sermon.pastor}
                  className="h-[100px] w-[100px] rounded-full object-cover"
                />
                <div>
                  <h3 className="font-heading text-lg text-white">
                    <a href="#" className="transition-opacity hover:opacity-80">
                      {sermon.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-white/50">
                    by{' '}
                    <a href="#" className="text-white transition-opacity hover:opacity-80">
                      {sermon.pastor}
                    </a>{' '}
                    on {sermon.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-white/10 pt-3">
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-light"
                  aria-label={`Play ${sermon.title}`}
                >
                  <Play className="h-4 w-4" />
                </button>
                <div className="h-2 flex-1 rounded-full bg-white/10">
                  <div className="h-full w-0 rounded-full bg-brand" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
