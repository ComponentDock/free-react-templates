import { TESTIMONIALS } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * Testimonials — photo-background band (fixed attachment) with a dark
 * overlay and five testimonial columns, each with a quote, name, and a
 * small circular avatar.
 */
export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="relative overflow-hidden py-24"
      style={{
        backgroundImage: 'url(https://picsum.photos/id/536/1920/800)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading title="What people says behind their success" light />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {TESTIMONIALS.map((item, index) => (
            <div key={index} className="px-2 py-6">
              <div className="pl-10">
                <blockquote className="text-sm text-white/80">{item.quote}</blockquote>
                <h3 className="mt-4 text-base text-white">{item.name}</h3>
                <img
                  src={item.avatar}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="mt-3 h-[30px] w-[30px] rounded-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
