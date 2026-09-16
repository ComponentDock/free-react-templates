import { Heart, ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(6,13,1,0.6), rgba(6,13,1,0.6)), url(https://picsum.photos/seed/shores-hero/1920/1080)',
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-brand">Give a hand</p>
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          to make the better world
        </h1>
        <p className="mb-8 max-w-xl text-base text-gray-300">
          Join us in making a difference. Your support helps communities thrive through education,
          healthcare, and sustainable development programs worldwide.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="lg" className="gap-2">
            <Heart size={16} />
            Donate Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-accent bg-accent text-ink hover:bg-accent-hover"
          >
            See Causes
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  )
}
