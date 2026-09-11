import { cn } from '@free-react-templates/ui'

interface AboutProps {
  className?: string
}

export function About({ className }: AboutProps) {
  return (
    <section id="about" className={cn('bg-white py-20', className)}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            About <span className="text-brand">DigiView</span>
          </h2>
          <p className="mt-4 leading-relaxed text-gray-500">
            We are a passionate team of designers, developers, and strategists dedicated to helping
            businesses succeed in the digital landscape. With over a decade of experience, we bring
            creativity and technical expertise to every project.
          </p>
          <p className="mt-4 leading-relaxed text-gray-500">
            Our approach combines data-driven insights with innovative design to create digital
            experiences that engage audiences and deliver measurable results.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block rounded bg-brand px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-brand-dark"
          >
            Learn more
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/digiview-about/600/400"
            alt="About DigiView team"
            className="rounded-2xl object-cover shadow-lg"
            width={600}
            height={400}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
