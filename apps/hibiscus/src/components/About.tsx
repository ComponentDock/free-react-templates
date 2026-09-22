import { cn } from '@free-react-templates/ui'

export function About({ className }: { className?: string }) {
  return (
    <section id="about" className={cn('py-24 bg-paper', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-[4px] text-brand">
              About Us
            </p>
            <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Welcome Hibiscus Hotel In Street L&apos;Abreuvoir
            </h2>
            <p className="mb-4 leading-relaxed text-mist">
              Welcome to Hibiscus Hotel, your home away from home in the heart of the city. We offer
              world-class accommodation with stunning views, exceptional dining, and unparalleled
              hospitality that will make your stay truly unforgettable.
            </p>
            <p className="leading-relaxed text-mist">
              Our hotel features beautifully designed rooms, a premium swimming pool, a world-class
              restaurant, and a relaxing spa to ensure your comfort throughout your stay.
            </p>
          </div>
          {/* Image */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/hibiscus-about/600/400"
              alt="Hibiscus Hotel lobby"
              className="w-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -left-4 hidden bg-brand px-6 py-4 text-white sm:block">
              <p className="font-heading text-2xl font-bold">15+</p>
              <p className="font-heading text-sm font-semibold uppercase tracking-wider">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
