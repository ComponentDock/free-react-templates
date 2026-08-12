import { Quote } from 'lucide-react'

/* Testimonials (source: .testimonials-area — quote icon + quote text,
   author "Fanny Spencer" / "Chief Executive, Amazon", photo on the right;
   the owl-carousel is recreated as a single slide). */
export function Testimonials() {
  return (
    <section className="bg-white py-[120px]">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-12 px-[15px] lg:flex-row">
        <div className="lg:w-2/5">
          <Quote className="h-10 w-10 text-brand" aria-hidden="true" />
          <blockquote className="mt-10">
            <p className="text-[15px] leading-7 text-ink">
              &ldquo;As conscious travelers on the path of learning we must always care for our
              curious minds — Corona made that journey effortless with inspiring mentors and
              beautifully crafted courses.&rdquo;
            </p>
            <div className="mt-6">
              <h3 className="text-[18px] font-bold text-ink">Fanny Spencer</h3>
              <p className="text-[14px] text-smoke">Chief Executive, Amazon</p>
            </div>
          </blockquote>
        </div>
        <div className="lg:w-2/5 lg:ml-auto">
          <img
            src="https://picsum.photos/seed/corona-testimonial/400/400"
            alt="Fanny Spencer"
            className="w-full max-w-[380px] rounded-md object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
