import { cn } from '@free-react-templates/ui'

interface AboutProps {
  className?: string
}

export function About({ className }: AboutProps) {
  return (
    <section id="about" className={cn('py-20 md:py-32 bg-surface', className)}>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-heading mb-6 leading-tight">
            We Are In A Mission To Help The Helpless
          </h2>
          <p className="font-body text-lg text-body mb-4">
            Our organization is dedicated to providing support and care to those who need it most.
            We believe in the power of compassion and community to transform lives.
          </p>
          <p className="font-body text-lg text-body mb-6">
            Through our various programs and initiatives, we aim to create lasting change and bring
            hope to individuals and families around the world.
          </p>
          <a
            href="#causes"
            className="inline-block bg-brand text-white px-8 py-3 rounded-[5px] font-heading font-medium hover:bg-brand-hover transition-colors"
          >
            Discover More
          </a>
        </div>
        <div className="relative">
          <img
            src="https://picsum.photos/seed/givecause-about/600/450"
            alt="About our mission"
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
