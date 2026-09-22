import { Heart, Shield } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="w-full lg:w-7/12">
            <img
              src="https://picsum.photos/seed/vitalblend-about/800/600"
              alt="Wellness lifestyle"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-5/12">
            <h2 className="mb-6 text-3xl font-medium text-brand-heading lg:text-4xl">
              Create a healthy life you love!
            </h2>
            <p className="mb-4 text-brand-body">Almost before we knew it, we had left the ground</p>
            <p className="mb-8 text-brand-body">
              Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium
              mi sem ut ipsum. Fusce fermentum. Pellentesque libero tortor, tincidunt et.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-brand">
                <Heart size={28} />
                <span className="text-sm font-medium text-brand-heading">Caring</span>
              </div>
              <div className="flex items-center gap-2 text-brand">
                <Shield size={28} />
                <span className="text-sm font-medium text-brand-heading">Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
