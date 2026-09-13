import { Monitor, Sun, Image, Laptop, Video, Rocket } from 'lucide-react'

const features = [
  {
    icon: Monitor,
    title: 'Responsive Layout',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Sun,
    title: 'Light & Dark Themes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Image,
    title: 'Parallax Support',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Laptop,
    title: 'Retina Ready Graphics',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Video,
    title: 'HTML5 Video',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Rocket,
    title: 'Powerful Performance',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="shrink-0 text-brand">
                <feature.icon size={32} />
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase text-heading">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-body">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
