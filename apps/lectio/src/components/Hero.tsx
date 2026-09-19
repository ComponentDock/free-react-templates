import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section className="relative min-h-[500px] overflow-hidden lg:min-h-[600px]">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/lectio-hero/1920/1080"
        alt="Student studying with books"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:min-h-[600px] lg:px-8">
        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Literature Course
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
          Donec id mattis est. Proin nunc sapien, gravida ut sapien ut, ultrices faucibus sapien.
          Proin vehicula varius ex, vel feugiat massa scelerisque id.
        </p>

        {/* Author info */}
        <div className="mt-8 flex items-center gap-4">
          <img
            src="https://picsum.photos/seed/lectio-author/80/80"
            alt="Sebastian Smith avatar"
            className="h-14 w-14 rounded-full border-2 border-white/30 object-cover"
          />
          <p className="text-sm text-white/80">
            By <span className="font-semibold text-gold">Sebastian Smith</span>, Senior Lead
            Developer
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Button className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-dark">
            See Details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
