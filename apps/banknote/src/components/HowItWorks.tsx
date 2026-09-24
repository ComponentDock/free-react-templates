import { ChevronLeft, ChevronRight } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Online Applications',
    desc: 'Fill out our simple online application form in minutes.',
  },
  {
    num: '02',
    title: 'Get an approval',
    desc: 'Receive quick approval from our financial experts.',
  },
  { num: '03', title: 'Card delivery', desc: 'Get your new card delivered to your doorstep.' },
]

const images = ['banknote-how1', 'banknote-how2', 'banknote-how3']

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">How It Works</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Getting started with Banknote is simple. Follow these three easy steps.
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image carousel placeholder */}
          <div className="relative">
            <img
              src={`https://picsum.photos/seed/${images[0]}/600/400`}
              alt="How it works"
              className="rounded-lg"
            />
            <button
              type="button"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow transition hover:bg-white"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 text-ink" />
            </button>
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow transition hover:bg-white"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5 text-ink" />
            </button>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-6">
                <span className="text-4xl font-black text-brand">{s.num}.</span>
                <div>
                  <h4 className="mb-2 text-lg font-bold">{s.title}</h4>
                  <p className="text-gray-600">{s.desc}</p>
                  <a
                    href="#"
                    className="mt-2 inline-block text-sm font-semibold text-brand transition hover:underline"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
