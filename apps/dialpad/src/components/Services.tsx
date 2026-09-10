import { User, Award, PhoneCall, Rocket, Diamond, MessageCircle } from 'lucide-react'

const services = [
  {
    icon: User,
    title: 'Expert Technicians',
    description:
      'Our team comprises industry-leading professionals with years of hands-on experience in customer support operations.',
  },
  {
    icon: Award,
    title: 'Professional Service',
    description:
      'We maintain the highest standards of professionalism in every interaction, ensuring your brand is represented flawlessly.',
  },
  {
    icon: PhoneCall,
    title: 'Great Support',
    description:
      'Round-the-clock support infrastructure means your customers always have someone to turn to when they need help.',
  },
  {
    icon: Rocket,
    title: 'Technical Skills',
    description:
      'Advanced technical proficiency allows our agents to troubleshoot complex issues quickly and effectively.',
  },
  {
    icon: Diamond,
    title: 'Highly Recommended',
    description:
      'Trusted by hundreds of businesses worldwide, our track record speaks for itself in customer satisfaction.',
  },
  {
    icon: MessageCircle,
    title: 'Positive Reviews',
    description:
      'Consistently rated five stars by clients, we pride ourselves on delivering experiences that exceed expectations.',
  },
] as const

export function Services() {
  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/dialpad-services/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white">Some Awesomeness that should share</h2>
          <p className="mt-3 text-sm text-white/80">
            Comprehensive solutions designed to elevate your customer experience.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-brand" aria-hidden="true" />
                <h4 className="text-base font-semibold text-white">{s.title}</h4>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
