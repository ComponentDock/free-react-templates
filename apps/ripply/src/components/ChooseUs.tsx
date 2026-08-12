import { Award, Share2, Smartphone, Star } from 'lucide-react'

/* Four "why choose us" items (source titles kept verbatim). */
const ITEMS = [
  {
    icon: Star,
    title: 'Top Rated',
    text: 'Loved by thousands of users around the world.',
  },
  {
    icon: Smartphone,
    title: 'Fetured App',
    text: 'Featured on leading app directories and blogs.',
  },
  {
    icon: Share2,
    title: 'Easy To Share',
    text: 'Spread the word with one-tap sharing anywhere.',
  },
  {
    icon: Award,
    title: 'Best Apps',
    text: 'Recognized for quality, design and performance.',
  },
]

export function ChooseUs() {
  return (
    <section className="mt-[90px] bg-periwinkle px-[15px] py-[100px]">
      <div className="mx-auto max-w-[1140px] text-center">
        <h2 className="font-display text-[30px] font-bold uppercase text-ink">Why Choose Us ?</h2>
        <p className="mx-auto mt-4 max-w-[600px] text-[14px] text-body">
          We combine thoughtful design with reliable engineering so your app gets the launch it
          deserves.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-[1140px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <div key={item.title} className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white">
              <item.icon className="h-9 w-9 text-[#7c5cfc]" aria-hidden="true" />
            </div>
            <h4 className="mt-5 text-[18px] font-medium text-ink">{item.title}</h4>
            <p className="mt-3 text-[13px] leading-relaxed text-body">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
