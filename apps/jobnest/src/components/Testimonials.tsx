import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'John Smith',
    initials: 'JS',
    text: 'JobNest made it incredibly easy to find my dream job. The platform is intuitive and the job listings are always up to date. Highly recommended!',
  },
  {
    name: 'Sarah Johnson',
    initials: 'SJ',
    text: 'As a recruiter, JobNest has been a game-changer. I can quickly find qualified candidates and post jobs with ease. The quality of applicants is outstanding.',
  },
  {
    name: 'Michael Chen',
    initials: 'MC',
    text: 'I found my current position through JobNest within a week of signing up. The search filters and location options made it simple to narrow down the right opportunities.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-text-primary">Testimonial</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="min-w-[320px] flex-1 rounded bg-white p-6 shadow-[0_5px_15px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 text-lg font-bold text-gray-500">
                  {t.initials}
                </div>
                <Quote className="h-8 w-8 text-brand opacity-50" />
              </div>
              <p className="mb-4 italic text-text-secondary">{t.text}</p>
              <p className="font-semibold text-text-primary">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
