export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 sm:px-6 lg:flex-row">
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/studium-about/600/400"
            alt="About Studium"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h2 className="mb-4 text-3xl font-bold text-brand-text md:text-4xl">
            We Are Studium An Online Learning Center
          </h2>
          <p className="mb-6 text-brand-muted">
            Studium is dedicated to providing world-class education accessible to everyone. Our
            platform hosts expert-led courses across multiple disciplines, helping learners acquire
            new skills and advance their careers.
          </p>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-brand-blue">500+</p>
              <p className="text-sm text-brand-muted">Courses</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-teal">50K+</p>
              <p className="text-sm text-brand-muted">Students</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-magenta">100+</p>
              <p className="text-sm text-brand-muted">Instructors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
