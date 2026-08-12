/**
 * AdStrip — two promo banners between the hero and the about section: a blue
 * "25% Discount" block with a CTA, and a trainer photo with a green
 * "Fitness Class" tag and a "View classes" link.
 */
export function AdStrip() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-20 lg:px-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex items-center justify-between gap-6 bg-blue-700 px-10 py-8">
          <div>
            <h3 className="text-3xl font-bold text-white">25% Discount</h3>
            <p className="mt-2 text-sm font-semibold text-white/85">
              on your first month of any membership plan.
            </p>
          </div>
          <a
            href="#pricing"
            className="shrink-0 rounded-[10px] border-[3px] border-white px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-blue-700"
          >
            Join today
          </a>
        </div>

        <div className="relative overflow-hidden rounded-[10px]">
          <img
            src="https://picsum.photos/seed/vigor-add-2/800/400"
            alt="Trainer leading a group fitness class"
            className="h-full w-full object-cover"
          />
          <span className="absolute left-6 top-6 rounded-[10px] bg-gradient-to-r from-brand-light to-brand px-5 py-2 text-sm font-bold uppercase tracking-wide text-ink">
            Fitness Class
          </span>
          <a
            href="#services"
            className="absolute bottom-6 left-6 rounded-[10px] bg-night/80 px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-night"
          >
            View classes
          </a>
        </div>
      </div>
    </div>
  )
}
