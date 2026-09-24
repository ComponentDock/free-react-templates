import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const heroPosts = [
  {
    date: 'MAY 01, 2024 / Lifestyle',
    title: "We've Launched Our Latest Summer Collection of Lifestyle Essentials",
    excerpt:
      'Discover the curated picks that define modern living — from handcrafted home accents to seasonal wardrobe must-haves that blend comfort with elegance.',
    image: 'https://picsum.photos/seed/byline-hero1/800/500',
  },
  {
    date: 'MAR 15, 2024 / Travel',
    title: 'A Closer Look At Our Front Porch Collection From The Marketplace',
    excerpt:
      'Transform your outdoor space with artisan-crafted furniture and decor pieces that bring warmth and character to any porch, patio, or garden.',
    image: 'https://picsum.photos/seed/byline-hero2/800/500',
  },
  {
    date: 'JAN 20, 2024 / Food',
    title: 'Answering Your Most Frequently Asked Questions About Seasonal Recipes',
    excerpt:
      'From farm-to-table cooking techniques to quick weeknight meals — everything you need to know about preparing seasonal dishes with fresh ingredients.',
    image: 'https://picsum.photos/seed/byline-hero3/800/500',
  },
] as const

export function Hero() {
  const featured = heroPosts[0]

  return (
    <section className="relative bg-ink" aria-label="Featured post">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${featured.image})` }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ink/80" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[480px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:min-h-[560px]">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-brand">
            {featured.date}
          </p>
          <h1 className="font-display text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
            {featured.title}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-300">
            {featured.excerpt}
          </p>
          <Button
            variant="primary"
            className="mt-8 inline-flex items-center gap-2 rounded-none border border-white bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            Read More
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
