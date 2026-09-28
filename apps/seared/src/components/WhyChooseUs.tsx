import { ShieldCheck, Clock, Award } from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Quality Guarantee',
    desc: 'We stand behind every dish with our commitment to using only the finest ingredients and preparation methods.',
  },
  {
    icon: Clock,
    title: 'Fast Service',
    desc: 'Our efficient kitchen and attentive staff ensure your meal arrives promptly without sacrificing quality.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    desc: 'Recognized by top culinary critics and awarded multiple times for excellence in fine dining.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2
          className="mb-12 text-center text-3xl font-bold text-ink sm:text-4xl"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Why Choose Us
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10">
                <r.icon size={28} className="text-brand" />
              </div>
              <h4 className="mb-3 text-lg font-bold text-ink">{r.title}</h4>
              <p className="text-sm leading-relaxed text-body">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
