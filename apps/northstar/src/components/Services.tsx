import { Award, Target, FileCheck, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Award,
    title: 'Achievement Coaching',
    description:
      'Set ambitious goals and achieve them with our structured coaching program that keeps you accountable and motivated throughout your journey.',
  },
  {
    icon: Target,
    title: 'Goal Setting',
    description:
      'Define clear, actionable goals with our expert guidance. We help you break down big dreams into achievable milestones that lead to lasting success.',
  },
  {
    icon: FileCheck,
    title: 'Action Planning',
    description:
      'Transform your vision into reality with detailed action plans. Our step-by-step approach ensures you know exactly what to do and when to do it.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Tracking',
    description:
      "Monitor your progress with our proven tracking systems. See how far you've come and stay motivated to keep pushing toward your ultimate goals.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-16" aria-label="Services">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-[#212529] md:text-4xl font-heading">
          Our Services
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[#737373]">
          We provide a wide range of coaching services tailored to meet your unique needs and help
          you succeed.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#eff1f3]">
                  <Icon size={48} className="text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#212529]">{item.title}</h3>
                <p className="text-[#737373] leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
