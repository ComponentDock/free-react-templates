export function CTA() {
  return (
    <section className="relative py-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/jobquest-cta/1920/400')" }}
      />
      <div className="absolute inset-0 bg-brand opacity-85" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div>
          <h2 className="text-3xl font-bold text-white">Looking For A Job?</h2>
          <p className="mt-2 text-white/80">
            Join thousands of job seekers who found their dream careers through JobQuest.
          </p>
        </div>
        <a
          href="#"
          className="rounded bg-warning px-8 py-3 font-bold text-text-primary transition-colors hover:brightness-110"
        >
          Sign Up
        </a>
      </div>
    </section>
  )
}
