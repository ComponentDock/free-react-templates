import { cn } from '@free-react-templates/ui'

export function TheClub() {
  return (
    <section id="club" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Image */}
          <div className="w-full lg:w-6/12">
            <img
              src="https://picsum.photos/seed/gritbox-club/800/600"
              alt="Inside the GritBox gym facility"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-5/12">
            <h2 className="relative mb-6 inline-block text-3xl font-bold uppercase text-ink md:text-4xl">
              <span className="relative z-10">The Club</span>
              <span className="absolute bottom-0 left-0 h-1 w-10 bg-brand" />
            </h2>
            <p className="mb-4 leading-relaxed text-mist">
              GritBox is more than just a gym — it is a community of dedicated athletes pushing
              their limits every day. Our state-of-the-art facility features the latest equipment,
              spacious training zones, and expert coaches ready to guide you.
            </p>
            <p className="mb-8 leading-relaxed text-mist">
              Whether you are a beginner starting your fitness journey or an experienced athlete
              looking to level up, GritBox has everything you need. Join thousands of members who
              have transformed their lives through our crossfit programs.
            </p>
            <a
              href="#footer"
              className={cn(
                'inline-block rounded-full border-2 border-brand px-8 py-3 text-sm font-semibold uppercase text-brand transition-colors hover:bg-brand hover:text-white',
              )}
            >
              Join Our Club
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
