import { Layout, Touchpad, Palette, Zap, Smartphone, Layers } from 'lucide-react'

const features = [
  {
    icon: Layout,
    title: 'Responsive Layout',
    description:
      'Fluid grid adapts beautifully from mobile to desktop, maintaining perfect proportions at every breakpoint.',
  },
  {
    icon: Touchpad,
    title: 'Touch & Gesture Support',
    description:
      'Native swipe gestures on mobile and touch devices — swipe left/right to navigate seamlessly.',
  },
  {
    icon: Palette,
    title: 'Customizable Styling',
    description:
      'Tailwind CSS design tokens make it trivial to match your brand colors, spacing, and typography.',
  },
  {
    icon: Zap,
    title: 'Smooth Transitions',
    description:
      'Hardware-accelerated CSS animations ensure buttery-smooth 60fps slide transitions.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description:
      'Built mobile-first with progressive enhancement — works flawlessly on every device size.',
  },
  {
    icon: Layers,
    title: 'Thumbnail Navigation',
    description: 'Visual thumbnail strip provides instant overview and direct access to any slide.',
  },
] as const

export function Features() {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="py-16 sm:py-24 bg-white dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Powerful Carousel Features
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Everything you need for a stunning carousel experience, built with modern React and
            Tailwind CSS.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative p-6 rounded-2xl border border-gray-100 bg-white/50 transition-all hover:border-brand/30 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-900/30 dark:text-primary-400 dark:group-hover:bg-primary-600">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
