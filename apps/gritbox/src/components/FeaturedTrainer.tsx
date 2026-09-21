import { cn } from '@free-react-templates/ui'

export function FeaturedTrainer() {
  return (
    <section
      id="trainer"
      className="relative bg-cover bg-fixed bg-center py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/gritbox-bg/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <img
            src="https://picsum.photos/seed/gritbox-trainer/400/400"
            alt="Featured trainer Shane Green"
            className="mx-auto mb-6 h-40 w-40 rounded-full border-4 border-brand object-cover"
            loading="lazy"
          />
          <h3 className="text-2xl font-bold text-white">Shane Green</h3>
          <p className="mb-6 text-sm uppercase tracking-widest text-white/60">Head Coach</p>
          <blockquote className="mb-8 text-lg italic leading-relaxed text-white/90">
            &ldquo;Fitness is not about being better than someone else. It is about being better
            than you used to be. At GritBox, we help you unlock your true potential every single
            day.&rdquo;
          </blockquote>
          <a
            href="#footer"
            className={cn(
              'inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark',
            )}
          >
            Make Me Your Trainer
          </a>
        </div>
      </div>
    </section>
  )
}
