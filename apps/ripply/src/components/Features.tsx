import { Layers, Palette, ShieldCheck, Smartphone, Zap } from 'lucide-react'

/* Five icon cards (source: 5 × .app_feature_item — the DOM repeats the same
   placeholder copy; titles varied for realism). */
const FEATURES = [
  {
    icon: Palette,
    title: 'Unique Design',
    text: 'A fresh, modern look that makes your app stand out from the crowd.',
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    text: 'Lightweight and optimized so your landing page loads in an instant.',
  },
  {
    icon: Layers,
    title: 'Pixel Perfect',
    text: 'Carefully crafted layouts that stay sharp on every screen size.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Safe',
    text: 'Built with clean, audited code that keeps your content protected.',
  },
  {
    icon: Smartphone,
    title: 'Easy Customize',
    text: 'Simple, well-structured sections you can adapt in minutes.',
  },
]

export function Features() {
  return (
    <section id="feature" className="bg-white px-[15px] py-[100px]">
      <div className="mx-auto max-w-[1140px] text-center">
        <h2 className="font-display text-[30px] font-bold uppercase text-ink">
          Powerful Apps Features
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-[14px] text-body">
          Everything you need to showcase your mobile app and turn visitors into loyal users.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-[1140px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {FEATURES.map((f) => (
          <div key={f.title} className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f2ecfe]">
              <f.icon className="h-9 w-9 text-[#7c5cfc]" aria-hidden="true" />
            </div>
            <h4 className="mt-5 text-[18px] font-medium text-ink">{f.title}</h4>
            <p className="mt-3 text-[13px] leading-relaxed text-body">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
