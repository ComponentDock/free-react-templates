import { Star } from 'lucide-react'

export function Testimonial() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <div className="flex justify-center gap-1 mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="h-5 w-5 fill-brand text-brand" />
          ))}
        </div>

        <blockquote className="mb-8 text-xl italic leading-relaxed text-gray-700 md:text-2xl">
          &ldquo;I am at an age where I just want to be fit and healthy. Our bodies are our
          responsibility! So start caring for your body and it will care for you. Eat clean, work
          out hard, and keep moving forward.&rdquo;
        </blockquote>

        <div className="flex flex-col items-center gap-4">
          <img
            src="https://picsum.photos/seed/jobscout-testimonial/80/80"
            alt="Margaret Lawson"
            className="h-16 w-16 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <p
              className="text-lg font-semibold text-gray-800"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Margaret Lawson
            </p>
            <p className="text-sm text-gray-500">Creative Director</p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <span className="h-3 w-3 rounded-full bg-brand" />
          <span className="h-3 w-3 rounded-full bg-gray-300" />
          <span className="h-3 w-3 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  )
}
