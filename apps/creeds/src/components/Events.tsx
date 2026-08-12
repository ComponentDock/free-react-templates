import { Calendar, MapPin } from 'lucide-react'
import { eventPosts } from '../data'

export function Events() {
  return (
    <section className="bg-white py-[100px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-heading">Upcoming Events</h2>
          <p className="mt-4 text-muted">
            Did not find your Package? Feel free to ask us. We&apos;ll make it for you.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {eventPosts.map((post) => (
            <article key={post.title} className="border border-[#eeeeee] p-8">
              <h3 className="text-lg font-semibold text-heading">{post.title}</h3>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                <Calendar className="h-4 w-4 text-brand" aria-hidden="true" />
                {post.date}
              </p>
              <p className="mt-2 flex items-start gap-2 text-sm text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {post.venue}
              </p>
              <a
                href="#"
                className="mt-6 inline-block border border-[#eeeeee] px-7 py-2 text-xs font-medium uppercase text-heading transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                View Details
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
