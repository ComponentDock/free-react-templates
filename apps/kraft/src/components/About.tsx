import { outlineBlack } from './buttons'

export function About() {
  return (
    <section id="about" className="py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="lg:order-2">
          <span className="text-sm uppercase tracking-[0.2em] text-brand">Who We Are</span>
          <h2 className="mt-3 font-display text-4xl font-light leading-tight text-black lg:text-5xl">
            Do Things That Matters. Plan. Create. Grow.
          </h2>
          <p className="mt-6 text-mist">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id autem temporibus blanditiis
            accusamus perferendis libero accusantium nisi itaque tempore, harum aliquid aut,
            sapiente dolor tenetur.
          </p>
          <p className="mt-4 text-mist">
            Tempora corrupti suscipit delectus perspiciatis! Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <a href="#contact" className={`${outlineBlack} mt-8`}>
            Learn More
          </a>
        </div>

        <div className="relative lg:order-1">
          <div
            className="absolute -left-12 -top-12 h-[400px] w-[200px]"
            style={{
              backgroundImage: 'radial-gradient(circle, #ced4da 1.5px, transparent 1.5px)',
              backgroundSize: '12px 12px',
            }}
            aria-hidden="true"
          />
          <img
            src="https://picsum.photos/seed/kraft-about/600/800"
            alt="The Kraft studio at work"
            className="relative block w-full object-cover"
            loading="lazy"
          />
          <img
            src="https://picsum.photos/seed/kraft-work/400/300"
            alt="A recent Kraft project"
            className="absolute -bottom-5 -right-5 max-w-[55%] border-4 border-white shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
