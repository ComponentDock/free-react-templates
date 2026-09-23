import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-[#221C5A] to-[#26276d] px-6 pt-20 text-center text-white"
    >
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          We Craft Awesome Web And Graphic Design Solutions
        </h1>
        <p className="mt-6 text-lg text-white/70">
          Creative agency crafting digital experiences that stand out.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded bg-[#32DB8A] px-8 py-3 font-medium text-[#221C5A] transition-colors hover:bg-[#28b872]"
        >
          Get Started
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}
