import { cn } from '@free-react-templates/ui'

interface AboutProps {
  className?: string
}

export function About({ className }: AboutProps) {
  return (
    <section id="about-us" className={cn('bg-white py-20', className)}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4">
              <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                About Us
              </h2>
              <span className="mb-8 block h-px w-12 bg-brand" />
            </div>
            <h3 className="mb-4 text-3xl font-light text-ink">A Place That Feels Like Home</h3>
            <p className="mb-4 text-sm leading-relaxed text-mist">
              Hotelbreeze offers an unforgettable hospitality experience in the heart of the city.
              With beautifully designed rooms, world-class dining, and attentive service, we create
              moments that last a lifetime.
            </p>
            <p className="text-sm leading-relaxed text-mist">
              Whether you are visiting for business or leisure, our dedicated team ensures every
              detail is taken care of — from the moment you arrive until you depart.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/hotelbreeze-about/600/500"
              alt="Hotel lobby"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
