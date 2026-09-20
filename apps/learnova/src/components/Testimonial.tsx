export function Testimonial() {
  return (
    <section id="testimonial" aria-label="Testimonial" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <blockquote className="border-l-4 border-primary-blue pl-6">
            <p className="text-lg leading-relaxed text-body-gray">
              I highly recommend this platform to anyone looking to advance their skills. The
              courses are well-structured, the instructors are knowledgeable, and the community
              support is outstanding. It transformed my career.
            </p>
            <footer className="mt-6">
              <cite className="not-italic">
                <span className="text-lg font-bold text-heading-black">Sarah Johnson</span>
                <br />
                <span className="text-sm text-body-gray">Web Developer</span>
              </cite>
            </footer>
          </blockquote>
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/learnova-person/400/500"
              alt="Sarah Johnson"
              className="w-80 rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
