import { Star } from 'lucide-react'

export function Intro() {
  return (
    <section id="about" className="bg-paper py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <img
            src="https://picsum.photos/seed/wavecrest-room/600/400"
            alt="Deluxe room at Wavecrest"
            className="w-full rounded-lg object-cover shadow-lg"
          />
        </div>
        <div>
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">Deluxe Room</h2>
          <p className="mt-4 text-mist leading-relaxed">
            Experience the ultimate in luxury and comfort at Wavecrest Beach Hotel. Our deluxe rooms
            offer breathtaking ocean views, premium amenities, and a serene atmosphere designed for
            relaxation.
          </p>
          <blockquote className="mt-6 border-l-4 border-brand pl-4 italic text-navy2">
            &ldquo;An unforgettable stay — the views and service were absolutely perfect. We will be
            back next year.&rdquo;
          </blockquote>
          <p className="mt-2 text-sm font-medium text-mist">— Michael Williams, Client</p>
          <div className="mt-6 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-brand text-brand" aria-hidden="true" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
