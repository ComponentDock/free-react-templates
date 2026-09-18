import { Shield, Users, UserCheck } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: '100% Confidential',
    description:
      'All sessions and information shared during counseling remain strictly confidential and private.',
  },
  {
    icon: Users,
    title: 'Qualified Team',
    description:
      'Our team of licensed professionals brings years of experience in counseling and legal services.',
  },
  {
    icon: UserCheck,
    title: 'Individual Approach',
    description:
      'We tailor every session to your unique needs, ensuring personalized care and attention.',
  },
]

export function IntroFeatures() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#589167]/10">
                <feature.icon className="h-8 w-8 text-[#589167]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#1a1a1a]">{feature.title}</h3>
              <p className="max-w-xs text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
