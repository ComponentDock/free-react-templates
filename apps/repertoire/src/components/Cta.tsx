import { cn } from '@free-react-templates/ui'

interface CtaProps {
  className?: string
}

export function Cta({ className }: CtaProps) {
  return (
    <section id="contact" className={cn('bg-gray-100 py-20', className)}>
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Get in Touch!</h2>
        <p className="mb-8 text-gray-600">
          Have a project in mind? Let&apos;s work together to bring your vision to life. Reach out
          and let&apos;s start a conversation.
        </p>
        <a
          href="#contact"
          className="inline-block rounded-lg bg-primary-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
        >
          Contact me!
        </a>
      </div>
    </section>
  )
}
