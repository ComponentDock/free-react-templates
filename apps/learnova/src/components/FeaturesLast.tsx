import { Award, Globe, Briefcase, Infinity as InfinityIcon } from 'lucide-react'
const features = [
  {
    icon: Award,
    title: 'Scholarship',
    text: 'Financial aid available for qualifying students.',
  },
  {
    icon: Globe,
    title: 'Global Community',
    text: 'Connect with learners from around the world.',
  },
  {
    icon: Briefcase,
    title: 'Job Placement',
    text: 'Career support and job placement assistance.',
  },
  {
    icon: InfinityIcon,
    title: 'Lifetime Access',
    text: 'Access your courses forever once enrolled.',
  },
] as const

export function FeaturesLast() {
  return (
    <section id="features-last" aria-label="Features last" className="relative py-24">
      <img
        src="https://picsum.photos/seed/learnova-feat3/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-lg bg-white/10 p-6 text-center text-white backdrop-blur-sm"
            >
              <Icon className="mx-auto h-12 w-12 text-primary-blue" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
