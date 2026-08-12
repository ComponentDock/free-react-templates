import { FileText, Headphones, MousePointerClick, Quote } from 'lucide-react'

/* Three satisfaction bullets + a testimonial quote. */
const BULLETS = [
  {
    icon: MousePointerClick,
    title: 'Easy To Use',
    text: 'A clean interface that anyone can pick up in seconds.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    text: 'Our team is here around the clock whenever you need help.',
  },
  {
    icon: FileText,
    title: 'Well Documentation',
    text: 'Clear guides and examples for every part of the product.',
  },
]

export function Satisfaction() {
  return (
    <section id="about" className="bg-white px-[15px] pb-[100px] pt-[100px]">
      <div className="mx-auto max-w-[1140px] text-center">
        <h2 className="font-display text-[30px] font-bold uppercase text-ink">
          Aim Client Satisfaction
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-[14px] text-body">
          We measure success by the happiness of the people who use our app every day.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-[1140px] grid-cols-1 gap-8 sm:grid-cols-3">
        {BULLETS.map((b) => (
          <div key={b.title} className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f2ecfe]">
              <b.icon className="h-9 w-9 text-[#7c5cfc]" aria-hidden="true" />
            </div>
            <h4 className="mt-5 text-[18px] font-medium text-ink">{b.title}</h4>
            <p className="mt-3 text-[13px] leading-relaxed text-body">{b.text}</p>
          </div>
        ))}
      </div>
      <figure className="mx-auto mt-14 max-w-[760px] text-center">
        <Quote className="mx-auto h-10 w-10 text-[#7c5cfc]" aria-hidden="true" />
        <blockquote className="mt-4 text-[16px] italic leading-relaxed text-body">
          Ripply helped us launch faster than we ever expected. The design is gorgeous and our
          conversion rate jumped within the first week.
        </blockquote>
        <figcaption className="mt-5">
          <span className="block font-medium text-ink">Mr. Jonathon Smith</span>
          <span className="block text-[14px] text-body">CEO, Hazrat Group</span>
        </figcaption>
      </figure>
    </section>
  )
}
