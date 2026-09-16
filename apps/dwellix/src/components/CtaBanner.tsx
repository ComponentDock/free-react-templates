import { Button } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/dwellix-cta/1600/600)' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-6xl px-8">
        <div className="max-w-lg">
          <h2 className="mb-4 text-3xl font-bold text-white">Download app &amp; join now!</h2>
          <p className="mb-6 text-white/80">
            Download and sign up to receive all the latest real estate news and exclusive property
            listings.
          </p>
          <div className="flex gap-3">
            <Button className="rounded bg-white px-6 py-3 text-sm font-semibold text-heading hover:bg-gray-100">
              App Store
            </Button>
            <Button className="rounded bg-white px-6 py-3 text-sm font-semibold text-heading hover:bg-gray-100">
              Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
