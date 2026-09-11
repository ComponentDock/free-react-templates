import { Button } from '@free-react-templates/ui'

export function Investments() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-ink lg:text-4xl">
            Need to Take Care of Your Currency Investments?
          </h2>
          <p className="mt-4 text-mist">
            Our team of experts is ready to help you navigate the complex world of cryptocurrency
            investments. From portfolio management to risk assessment, we provide comprehensive
            solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              View Services
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-ink text-ink hover:bg-ink hover:text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://picsum.photos/seed/coincast-invest/600/400"
            alt="Currency investment management"
            className="w-full rounded-lg object-cover shadow-md"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
