export function CTA() {
  return (
    <section className="bg-primary-500 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row">
        <div>
          <h2 className="mb-2 text-2xl font-bold text-white">
            Let&apos;s get started. Create your account
          </h2>
          <p className="text-primary-100">
            Join thousands of users discovering the best local places every day.
          </p>
        </div>
        <a
          href="#"
          className="shrink-0 rounded border-2 border-white px-8 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-primary-500"
        >
          Sign Up
        </a>
      </div>
    </section>
  )
}
