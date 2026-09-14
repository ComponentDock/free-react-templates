import { cn } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/cabspot-cta/1920/600"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-taxi/90" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
          Experience Great Support
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-gray-800">
          Our support team is available 24/7 to assist you with bookings, inquiries, and any issues
          you may have. We are here to make your experience seamless.
        </p>
        <a
          href="#contact"
          className={cn(
            'inline-block border-2 border-gray-900 bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-wide text-gray-900 transition-colors hover:bg-gray-900 hover:text-white',
          )}
        >
          Reach Our Support Team
        </a>
      </div>
    </section>
  )
}
