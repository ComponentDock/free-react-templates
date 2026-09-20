export function BannerCTA() {
  return (
    <section className="bg-secondary py-24">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-ink">Join Our Community Now!</h2>
        <p className="mx-auto mb-8 max-w-2xl text-body">
          Be part of a thriving community of learners and educators. Access exclusive courses,
          connect with instructors, and advance your career.
        </p>
        <a
          href="#register"
          className="inline-block bg-brand px-10 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Register Now
        </a>
      </div>
    </section>
  )
}
