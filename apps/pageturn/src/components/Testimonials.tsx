import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'John Doe',
    position: 'CEO, TechCorp',
    seed: 'avatar1',
  },
  {
    text: 'Separate they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Jane Smith',
    position: 'Designer, CreativeStudio',
    seed: 'avatar2',
  },
  {
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    name: 'Mike Johnson',
    position: 'Writer, BookWorld',
    seed: 'avatar3',
  },
  {
    text: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Sarah Wilson',
    position: 'Editor, PagePress',
    seed: 'avatar4',
  },
] as const

export function Testimonials() {
  return (
    <section id="reviews" className="relative py-20">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/pageturn-reviews/1600/700"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gray-900/85" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Kinds Words From Customers</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <Quote className="mb-4 h-8 w-8 text-brand" />
              <p className="mb-6 text-sm leading-relaxed text-gray-300">{t.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/50/50`}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
