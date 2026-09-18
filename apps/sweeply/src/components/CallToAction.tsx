export function CallToAction() {
  return (
    <section
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/sweeply-cta/1600/500)' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-8">Need to clean your house? Just hire us!</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:012304567890"
            className="bg-brand text-white px-8 py-3 rounded-md font-semibold hover:bg-brand-dark transition-colors"
          >
            0-1230-456-7890
          </a>
          <a
            href="mailto:youremail@email.com"
            className="bg-accent text-dark px-8 py-3 rounded-md font-semibold hover:bg-accent-dark transition-colors"
          >
            youremail@email.com
          </a>
        </div>
      </div>
    </section>
  )
}
