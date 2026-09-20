import { GraduationCap, Users, Rocket, Settings } from 'lucide-react'

const features = [
  {
    icon: GraduationCap,
    title: 'Certificate',
    description:
      'Receive a verified certificate upon course completion to showcase your achievements to employers and peers.',
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description:
      'Learn from industry professionals with years of real-world experience in their respective fields.',
  },
  {
    icon: Rocket,
    title: 'Learn from Anywhere',
    description:
      'Access courses on any device, anytime. Study at your own pace from the comfort of your home or on the go.',
  },
  {
    icon: Settings,
    title: 'Quality Service',
    description:
      'We are committed to providing the highest quality education with dedicated support for every student.',
  },
]

export function Features() {
  return (
    <section id="features" className="relative z-20 -mt-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-[10px] bg-white p-8 text-center shadow-lg">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-light">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-brand-heading">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
