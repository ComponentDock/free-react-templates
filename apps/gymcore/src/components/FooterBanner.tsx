import { Button } from '@free-react-templates/ui'

export function FooterBanner() {
  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="flex min-h-[300px] flex-col items-start justify-center p-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://picsum.photos/seed/gymcore-fb1/960/400)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <span className="mb-1 text-sm font-semibold uppercase tracking-widest text-brand">
            New member
          </span>
          <h2 className="mb-3 text-3xl font-bold text-white">7 days for free</h2>
          <p className="mb-5 max-w-sm text-sm text-gray-200">
            Complete the training sessions with us and you will surely be happy with the results.
          </p>
          <Button variant="primary" className="rounded-full px-6 py-2 text-sm font-semibold">
            Get Started
          </Button>
        </div>
        <div
          className="flex min-h-[300px] flex-col items-start justify-center p-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://picsum.photos/seed/gymcore-fb2/960/400)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <span className="mb-1 text-sm font-semibold uppercase tracking-widest text-brand">
            Contact us
          </span>
          <h2 className="mb-3 text-3xl font-bold text-white">09 746 204</h2>
          <p className="mb-5 max-w-sm text-sm text-gray-200">
            If you trust us on your fitness journey, we will not disappoint you. Reach out to get
            started today.
          </p>
          <Button variant="primary" className="rounded-full px-6 py-2 text-sm font-semibold">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}
