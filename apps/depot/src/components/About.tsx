import { Check } from 'lucide-react'
import { checklist } from '../data'

export function About() {
  return (
    <section id="about-section" aria-label="About" className="py-24">
      <div className="mx-auto grid max-w-[1170px] items-center gap-12 px-4 md:grid-cols-2">
        <img
          src="https://picsum.photos/seed/depot-about/800/600"
          alt="Modern property building"
          loading="lazy"
          className="w-full object-cover"
        />
        <div>
          <h2 className="font-heading text-3xl font-light uppercase text-black md:text-4xl">
            Depot Real Estate Template
          </h2>
          <p className="mt-6 leading-relaxed text-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui eos quasi ratione
            nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit.
          </p>
          <p className="mt-4 leading-relaxed text-body">
            Quo suscipit omnis iste velit maxime. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
          <ul className="mt-8 space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3 text-body">
                <Check className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-10 inline-block rounded bg-brand px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
