import { Button } from '@free-react-templates/ui'

export function AboutVideo() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 sm:px-6">
        <div>
          <h2 className="text-3xl font-bold leading-snug text-ink">
            We Believe that the Right Technology beautifies the Total Customer Experience
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-mist">
            Inappropriate handling is often dismissed as &ldquo;just how it is,&rdquo; but customers
            face higher expectations especially in the digital age. That&rsquo;s why it&rsquo;s
            crucial that our support approach goes beyond reproach — delivering genuine, thoughtful
            service at every touchpoint.
          </p>
          <Button className="mt-6 rounded-full bg-gradient-to-r from-sky to-brand px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-white hover:opacity-90">
            See Details
          </Button>
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/dialpad-video/800/500"
            alt="Video background"
            className="w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-charcoal/50">
            <button
              type="button"
              aria-label="Play video"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-2xl text-brand shadow-lg transition-transform hover:scale-110"
            >
              &#9654;
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
