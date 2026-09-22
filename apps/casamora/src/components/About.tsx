import { cn } from '@free-react-templates/ui'

interface AboutProps {
  className?: string
}

export function About({ className }: AboutProps) {
  return (
    <section id="about" className={cn('bg-white py-20', className)}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-heading text-3xl font-semibold text-heading-text">
              Welcome <em>to</em> Casamora.
            </h2>
            <p className="mb-4 font-body text-base leading-relaxed text-body-text">
              Casamora offers an unforgettable hospitality experience in the heart of the city. With
              beautifully designed rooms, world-class dining, and attentive service, we create
              moments that last a lifetime.
            </p>
            <p className="mb-8 font-body text-base leading-relaxed text-body-text">
              Whether you are visiting for business or leisure, our dedicated team ensures every
              detail is taken care of — from the moment you arrive until you depart.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#rooms"
                className="inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Read More
              </a>
              <span className="text-sm text-body-text">or</span>
              <a
                href="#"
                className="text-sm font-medium text-brand transition-colors hover:text-brand-dark"
              >
                See video
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/casamora-about/800/600"
              alt="Hotel lobby"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
