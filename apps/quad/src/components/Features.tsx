import { Award, BookOpen, GraduationCap } from 'lucide-react'

/* Features (source: section.feature_area — "Awesome Feature" title, three
   cards on #f9f9ff with an icon, 20px title and description; hover shadow
   rgba(0,35,71,0.1)). */
const FEATURES = [
  {
    icon: GraduationCap,
    title: 'Scholarship Facility',
    blurb: "One make creepeth, man bearing theira firmament won't great heaven.",
  },
  {
    icon: BookOpen,
    title: 'Sell Online Course',
    blurb: "One make creepeth, man bearing theira firmament won't great heaven.",
  },
  {
    icon: Award,
    title: 'Global Certification',
    blurb: "One make creepeth, man bearing theira firmament won't great heaven.",
  },
]

export function Features() {
  return (
    <section id="features" className="bg-white pb-[100px] pt-[100px]">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="mx-auto mb-16 max-w-[540px] text-center">
          <h2 className="font-heading text-[36px] font-bold text-primary">Awesome Feature</h2>
          <p className="mt-4 text-[16px] leading-[25px] text-muted">
            Replenish man have thing gathering lights yielding shall you.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="bg-card p-[40px_36px] transition-shadow hover:shadow-[0_10px_30px_rgba(0,35,71,0.1)]"
            >
              <feature.icon className="h-[30px] w-[30px] text-primary" aria-hidden="true" />
              <h3 className="mt-3 font-heading text-[20px] font-medium text-primary">
                {feature.title}
              </h3>
              <p className="mt-2 text-[16px] leading-[25px] text-muted">{feature.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
