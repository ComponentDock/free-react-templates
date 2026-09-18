import { Play, Download } from 'lucide-react'

const sermons = [
  {
    image: 'https://picsum.photos/seed/ministry-sermon1/600/400',
    title: 'God Wants To Do A New Thing In Your Life',
    speaker: 'Dr. Rolando Henderson',
    categories: ['God', 'Pray', 'Faith'],
    date: 'Sunday 12 Jan, 2029',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
  {
    image: 'https://picsum.photos/seed/ministry-sermon2/600/400',
    title: 'Walking In Faith Through Difficult Times',
    speaker: 'Pastor James Wilson',
    categories: ['Faith', 'Hope'],
    date: 'Sunday 19 Jan, 2029',
    description:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place.',
  },
  {
    image: 'https://picsum.photos/seed/ministry-sermon3/600/400',
    title: 'The Power of Prayer in Daily Life',
    speaker: 'Rev. Sarah Mitchell',
    categories: ['Prayer', 'Life'],
    date: 'Sunday 26 Jan, 2029',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.',
  },
]

export function Sermons() {
  return (
    <section id="sermons" className="py-16">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-brand text-sm font-medium uppercase tracking-wider">
            Our Sermons
          </span>
          <h2 className="text-3xl font-normal mt-2">Watch and Listen to our Sermons</h2>
        </div>

        <div className="space-y-6">
          {sermons.map((sermon, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } bg-surface overflow-hidden rounded`}
            >
              <div className="md:w-1/2">
                <img
                  src={sermon.image}
                  alt={`${sermon.title} — sermon image`}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-10 flex items-center">
                <div>
                  <h3 className="text-xl font-normal mb-3">
                    <a href="#" className="text-heading hover:text-brand transition-colors">
                      {sermon.title}
                    </a>
                  </h3>
                  <div className="text-sm text-body-text mb-3 space-y-1">
                    <p>
                      Speaker:{' '}
                      <a href="#" className="text-brand hover:underline">
                        {sermon.speaker}
                      </a>
                    </p>
                    <p>
                      Categories:{' '}
                      {sermon.categories.map((cat, ci) => (
                        <span key={ci}>
                          <a href="#" className="text-brand hover:underline">
                            {cat}
                          </a>
                          {ci < sermon.categories.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>
                    <p>
                      <a href="#" className="text-brand hover:underline">
                        {sermon.date}
                      </a>
                    </p>
                  </div>
                  <p className="text-sm text-body-text leading-relaxed mb-4">
                    {sermon.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 bg-brand text-white px-5 py-3 rounded hover:bg-brand-hover transition-colors text-sm"
                    >
                      <Play className="w-4 h-4" aria-hidden="true" />
                      Watch Sermons
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 border border-brand text-brand px-5 py-3 rounded hover:bg-brand hover:text-white transition-colors text-sm"
                    >
                      <Download className="w-4 h-4" aria-hidden="true" />
                      Download Sermons
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
