export function Testimonials() {
  return (
    <section className="bg-gray-50 py-20" data-testid="testimonials">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-heading">Client Feedback</h2>
            <blockquote className="mb-6 border-l-4 border-primary pl-6 text-lg italic text-gray-600">
              "Working with this agency has been an incredible experience. They truly understand the
              modeling industry and provide exceptional talent for every project."
            </blockquote>
            <div className="flex items-center gap-4">
              <img
                src="https://picsum.photos/seed/vizier-client1/80/80"
                alt="Sarah Johnson"
                className="h-14 w-14 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-bold text-heading">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Creative Director, Vogue</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/vizier-testimonial/500/400"
              alt="Client testimonial"
              className="rounded-lg object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
