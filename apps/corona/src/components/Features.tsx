import { BookOpen, Monitor, Trophy } from 'lucide-react'

/* Feature strip (source: .feature-area — 3 icon items with thin right
   borders, muted #828bb2 icons, "Read More" links). */
const FEATURES = [
  {
    icon: BookOpen,
    title: 'New Classes',
    text: 'Fresh lessons added every week, from beginner basics to advanced topics across every subject.',
  },
  {
    icon: Trophy,
    title: 'Top Courses',
    text: 'Hand-picked, best-rated courses taught by mentors with real-world experience.',
  },
  {
    icon: Monitor,
    title: 'Full E-Books',
    text: 'Every course ships with complete reading material you can keep forever.',
  },
]

export function Features() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-8 px-[15px] py-16 md:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="flex gap-5 border-r border-[rgba(130,139,178,0.2)] pr-5 last:border-r-0"
          >
            <Icon className="h-[30px] w-[30px] shrink-0 text-muted" aria-hidden="true" />
            <div>
              <h3 className="text-[18px] font-bold text-ink">{title}</h3>
              <p className="mt-2 text-[14px] leading-6 text-smoke">{text}</p>
              <a href="#courses" className="mt-3 inline-block text-[13px] font-medium text-brand">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
