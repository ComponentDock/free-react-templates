import { cn } from '@free-react-templates/ui'

export function About() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#18181c] md:text-4xl">
          About the Event
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className={cn('text-base leading-relaxed text-[#838383]')}>
            <p className="mb-4">
              Gathr is the premier conference for innovators, entrepreneurs, and industry leaders.
              Join us for three days of inspiring talks, hands-on workshops, and unparalleled
              networking opportunities in the heart of San Francisco.
            </p>
            <p>
              Our carefully curated agenda features the brightest minds in technology, business, and
              creative industries. Whether you're a startup founder, seasoned executive, or aspiring
              professional, Gathr has something for everyone.
            </p>
          </div>
          <div className={cn('text-base leading-relaxed text-[#838383]')}>
            <p className="mb-4">
              From keynotes that challenge conventional thinking to breakout sessions that dive deep
              into emerging trends, every moment at Gathr is designed to inspire action and foster
              meaningful connections.
            </p>
            <p>
              Don't miss this opportunity to be part of the conversation that shapes the future.
              Early bird tickets are available now, and space is limited. Secure your spot today and
              join a community of forward thinkers committed to making a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
