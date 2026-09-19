import { Button } from '@free-react-templates/ui'

export function Register() {
  return (
    <section className="px-4 py-16" aria-labelledby="register-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left — promo */}
        <div className="flex flex-col justify-center">
          <h2
            id="register-heading"
            className="font-heading text-2xl font-bold text-ink sm:text-3xl"
          >
            Register now and get a discount <span className="text-brand">50% discount</span> until 1
            January
          </h2>
          <p className="mt-4 text-body">
            Join thousands of students who have already taken advantage of our special offer.
            Don&apos;t miss out on this incredible opportunity to advance your education.
          </p>
          <div className="mt-6">
            <Button className="rounded bg-brand px-8 py-3 text-sm font-bold text-ink transition-colors hover:bg-brand-dark">
              Register Now
            </Button>
          </div>
        </div>

        {/* Right — search form */}
        <div
          className="relative flex items-center justify-center rounded-lg bg-cover bg-center p-8"
          style={{ backgroundImage: 'url(https://picsum.photos/600/400?random=20)' }}
        >
          <div className="absolute inset-0 rounded-lg bg-black/30" />
          <form
            className="relative z-10 w-full max-w-sm space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Course Name"
              className="w-full rounded bg-white px-4 py-3 text-sm text-ink placeholder-body"
              aria-label="Course name"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full rounded bg-white px-4 py-3 text-sm text-ink placeholder-body"
              aria-label="Location"
            />
            <input
              type="text"
              placeholder="Category"
              className="w-full rounded bg-white px-4 py-3 text-sm text-ink placeholder-body"
              aria-label="Category"
            />
            <button
              type="submit"
              className="w-full rounded bg-brand px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-brand-dark"
            >
              Search Course
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
