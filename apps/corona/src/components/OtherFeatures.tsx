import { Briefcase, Crown, Files, Headphones, Key, Medal } from 'lucide-react'

/* Other features (source: .other-feature-area — 6 × #f2f3f7 cards:
   Lifetime Access, Source File Included, Student Membership, 35000+
   Courses, Expert Mentors, Live Supports). */
const FEATURES = [
  {
    icon: Key,
    title: 'Lifetime Access',
    text: 'Pay once and keep your courses forever, including every future update.',
  },
  {
    icon: Files,
    title: 'Source File Included',
    text: 'Every project ships with clean, documented source files you can reuse.',
  },
  {
    icon: Medal,
    title: 'Student Membership',
    text: 'Join a supportive community with exclusive events and study groups.',
  },
  {
    icon: Briefcase,
    title: '35000+ Courses',
    text: 'A huge catalog across design, code, science and business subjects.',
  },
  {
    icon: Crown,
    title: 'Expert Mentors',
    text: 'Learn directly from industry veterans who love to teach.',
  },
  {
    icon: Headphones,
    title: 'Live Supports',
    text: 'Real humans on chat and calls whenever you get stuck.',
  },
]

export function OtherFeatures() {
  return (
    <section id="features" className="bg-white py-[120px]">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="mb-[75px] text-left">
          <h2 className="font-display text-[42px] font-black text-ink">
            Features That Can Avail By Everyone
          </h2>
          <p className="mt-5 max-w-[560px] text-[14px] leading-6 text-smoke">
            Everything you need to start learning today — no matter your level, budget or schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-tint p-[50px_40px]">
              <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
              <h3 className="mt-5 text-[18px] font-bold text-ink">{title}</h3>
              <p className="mt-3 text-[14px] leading-6 text-smoke">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
