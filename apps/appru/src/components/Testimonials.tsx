import { Quote, Star } from 'lucide-react'

const avatars = [1, 2, 3, 4] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Quote className="mx-auto h-10 w-10 text-azure" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-ink dark:text-white">
          Fanny Spencer
        </h3>
        <p className="mt-2 text-sm font-medium text-muted dark:text-gray-400">
          <span className="sr-only">Rated 5 out of 5</span>
          <span className="inline-flex gap-1" aria-hidden="true">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </span>
        </p>
        <blockquote className="mt-6 text-lg leading-relaxed text-muted dark:text-gray-300">
          As conscious travelers we must always be concerned about our planet. If you think about
          it, you travel across her face — and she is the host to your journey.
        </blockquote>

        <ul aria-label="Customer avatars" className="mt-10 flex justify-center gap-4">
          {avatars.map((avatar) => (
            <li key={avatar}>
              <img
                src={`https://picsum.photos/seed/appru-customer-${avatar}/80/80`}
                alt={`Customer avatar ${avatar}`}
                className="h-14 w-14 rounded-full border-2 border-azure object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
