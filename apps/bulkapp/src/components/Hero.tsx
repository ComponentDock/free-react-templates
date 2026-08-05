import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-brand-start to-brand-end px-4 pb-24 pt-40 sm:px-6 lg:pb-32 lg:pt-48"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            The Best App in the Universe
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90">
            Inappropriate behavior is often laughed off as &ldquo;boys will be boys,&rdquo; but
            great software sets higher standards. BulkApp brings thoughtful design, reliable
            performance, and a beautiful interface to every device you own.
          </p>
          <ButtonLink
            href="#features"
            className="mt-10 rounded-md bg-white px-10 text-primary-600 hover:bg-white/90"
          >
            Explore Now
          </ButtonLink>
        </div>

        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/bulkapp-phone/320/640"
            alt="BulkApp app phone mockup"
            className="w-full max-w-xs rounded-[2.5rem] border-4 border-white/20 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
