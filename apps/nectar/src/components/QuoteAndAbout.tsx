import { Button } from '@free-react-templates/ui'

export function QuoteAndAbout() {
  return (
    <section id="about" className="bg-paper py-16">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2">
        {/* Quote Form */}
        <div>
          <div className="rounded-sm bg-brand px-6 py-3">
            <h2 className="font-heading text-lg font-bold text-white">Request A Quote</h2>
          </div>
          <form
            className="space-y-4 border border-muted p-6"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Request a quote form"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-muted bg-light px-4 py-3 text-sm text-body outline-none transition-colors focus:border-brand"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-muted bg-light px-4 py-3 text-sm text-body outline-none transition-colors focus:border-brand"
                />
              </div>
            </div>
            <div>
              <label htmlFor="service" className="sr-only">
                Service
              </label>
              <select
                id="service"
                className="w-full border border-muted bg-light px-4 py-3 text-sm text-body outline-none transition-colors focus:border-brand"
              >
                <option value="">Select a Service</option>
                <option value="building">Building Construction</option>
                <option value="renovation">Home Renovation</option>
                <option value="interior">Interior Design</option>
              </select>
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone"
                className="w-full border border-muted bg-light px-4 py-3 text-sm text-body outline-none transition-colors focus:border-brand"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Message"
                className="w-full resize-none border border-muted bg-light px-4 py-3 text-sm text-body outline-none transition-colors focus:border-brand"
              />
            </div>
            <Button
              type="submit"
              className="bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Submit
            </Button>
          </form>
        </div>

        {/* About Text */}
        <div className="flex flex-col justify-center">
          <h2 className="font-heading text-2xl font-bold leading-tight text-heading md:text-3xl">
            We Are Highly Recommendable Construction Firm
          </h2>
          <p className="mt-4 text-body">
            With decades of experience in the construction industry, we have built a reputation for
            delivering exceptional quality and unparalleled service. Our team of skilled
            professionals is dedicated to transforming your vision into reality, ensuring every
            project meets the highest standards of craftsmanship and durability.
          </p>
          <Button
            className="mt-6 inline-flex w-fit bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
            aria-label="Read more about us"
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  )
}
