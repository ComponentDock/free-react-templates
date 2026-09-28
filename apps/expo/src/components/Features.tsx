import { Check } from 'lucide-react'

const features = [
  {
    title: 'Digital marketing',
    description:
      'We create data-driven digital marketing campaigns that maximize your ROI and help you reach your target audience effectively.',
  },
  {
    title: 'Social media marketing',
    description:
      'Build your brand presence across all major social media platforms with our expert social media marketing strategies.',
  },
  {
    title: 'Content create',
    description:
      'Our team produces high-quality, engaging content that resonates with your audience and drives organic traffic to your website.',
  },
  {
    title: 'Web design',
    description:
      'We design beautiful, responsive websites that not only look great but also convert visitors into loyal customers.',
  },
]

export function Features() {
  return (
    <section
      id="services"
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/expo-features-bg/1600/900)',
      }}
    >
      <div className="absolute inset-0 bg-secondary/90" />
      <div className="relative mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-white font-heading md:text-4xl">
          How we can help
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-lg bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <Check size={24} className="text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-text-dark font-heading">
                {feature.title}
              </h3>
              <p className="text-text-gray-dark">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
