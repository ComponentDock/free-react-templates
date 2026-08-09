import { Quote } from 'lucide-react'

const stories = [
  {
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Gabby Smith',
    role: 'Spa Visitor',
  },
  {
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Floyd Weather',
    role: 'Spa Visitor',
  },
  {
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'James Dee',
    role: 'Spa Visitor',
  },
] as const

export function Testimony() {
  return (
    <section
      id="testimony"
      className="relative overflow-hidden bg-night py-20 transition-colors dark:bg-gray-950"
    >
      <img
        src="https://picsum.photos/seed/serenity-testimony/1920/800"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            Testimony
          </span>
          <h2 className="mt-3 text-3xl font-light text-white sm:text-4xl">Successful Stories</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <blockquote
              key={story.name}
              className="border border-white/15 bg-white/5 p-8 text-center backdrop-blur-sm"
            >
              <Quote className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
              <p className="mt-4 text-sm font-light leading-relaxed text-white/80">{story.text}</p>
              <footer className="mt-6">
                <p className="text-base font-semibold text-white">{story.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-brand">{story.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
