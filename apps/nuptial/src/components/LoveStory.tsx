import { cn } from '@free-react-templates/ui'

const milestones = [
  {
    date: 'June 10, 2017',
    title: 'First We Meet',
    seed: 'nuptial-5',
    copy: 'A chance encounter at a summer garden party — one conversation and neither of us wanted it to end.',
  },
  {
    date: 'June 10, 2017',
    title: 'First Date',
    seed: 'nuptial-6',
    copy: 'Coffee turned into dinner, dinner turned into a long walk, and the walk turned into the beginning of us.',
  },
  {
    date: 'June 14, 2017',
    title: 'In A Relationship',
    seed: 'nuptial-7',
    copy: 'Somewhere between shared playlists and late-night talks, we quietly became inseparable.',
  },
  {
    date: 'May. 10, 2019',
    title: "We're Engaged",
    seed: 'nuptial-8',
    copy: 'Under the evening sky, with a ring and a trembling voice, he asked — and she said yes.',
  },
] as const

export function LoveStory() {
  return (
    <section id="lovestory" className="bg-white py-16 transition-colors dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-script text-5xl text-pink-500 sm:text-6xl">Love Story</h2>
        <div className="relative mt-16">
          <div
            className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-pink-200 md:block"
            aria-hidden="true"
          />
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.title} className="relative flex justify-center md:justify-start">
                <div
                  className={cn(
                    'flex max-w-md flex-col items-center gap-6 md:flex-row md:items-center',
                    index % 2 === 1 ? 'md:flex-row-reverse' : '',
                  )}
                >
                  <img
                    src={`https://picsum.photos/seed/${milestone.seed}/200/200`}
                    alt=""
                    className="h-24 w-24 shrink-0 rounded-full border-4 border-pink-500 object-cover"
                    loading="lazy"
                  />
                  <div className="text-center md:text-left">
                    <p className="text-xs font-semibold tracking-widest text-pink-500 uppercase">
                      {milestone.date}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold text-ink-900 dark:text-white">
                      {milestone.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-700 dark:text-stone-300">
                      {milestone.copy}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
