import { outlineWhite } from './buttons'

export function CtaBand() {
  return (
    <section className="bg-brand py-12">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h3 className="font-display text-3xl font-normal text-white lg:text-4xl">
          Let's do more together
        </h3>
        <p className="mt-3 text-white/90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore.
        </p>
        <a href="#contact" className={`${outlineWhite} mt-6`}>
          Get In Touch!
        </a>
      </div>
    </section>
  )
}
