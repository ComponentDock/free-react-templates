import { TrendingUp } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-white py-16 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black text-brand md:text-4xl">About Us</h2>
            <p className="mt-4 text-lg font-bold text-ink dark:text-white">
              We Solve Your Financial Problem
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Our team of experienced financial advisors is dedicated to helping individuals and
              businesses achieve their financial goals. We provide comprehensive banking solutions,
              investment strategies, and personalized financial planning services.
            </p>
            <a
              href="#services"
              className="mt-6 inline-block rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Learn More
            </a>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://picsum.photos/seed/treasury-about/600/400"
                alt="Financial planning meeting"
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white shadow-lg">
                <TrendingUp className="h-8 w-8" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
