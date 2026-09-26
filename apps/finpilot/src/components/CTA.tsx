import { cn } from '@free-react-templates/ui'

export default function CTA() {
  return (
    <section id="contact" className="bg-brand py-16">
      <div className="mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">Do you Have any Project?</h2>
        <p className="mb-8 text-white/80 max-w-2xl mx-auto">
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
          ut et voluptates repudiandae sint et molestiae.
        </p>
        <a
          href="#"
          className={cn(
            'inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-semibold text-brand transition-colors hover:bg-gray-100',
          )}
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}
