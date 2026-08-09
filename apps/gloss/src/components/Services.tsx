import { Quote } from 'lucide-react'
import { Card, CardContent } from '@free-react-templates/ui'

const testimonials = [
  {
    name: 'Danielle Benton',
    role: 'Blogger/Client',
    quote:
      'Rachel you are so amazing at what you do! Thank you so much for everything! I felt so beautiful on our wedding day. Not only are you superwoman with a makeup brush, you are so lovely and such a delight to have around the morning of the wedding!! Any bride would be very lucky to have you part of her big day, I am very grateful that you were part of mine',
    avatar: 'https://picsum.photos/seed/gloss-client-1/96/96',
  },
  {
    name: 'Dani Alves',
    role: 'Blogger/Client',
    quote:
      'Rachel you are so amazing at what you do! Thank you so much for everything! I felt so beautiful on our wedding day. Not only are you superwoman with a makeup brush, you are so lovely and such a delight to have around the morning of the wedding!! Any bride would be very lucky to have you part of her big day, I am very grateful that you were part of mine',
    avatar: 'https://picsum.photos/seed/gloss-client-2/96/96',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-ink py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Client love</p>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            What clients say about my work
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map((client) => (
            <Card key={client.name} className="border-white/10 bg-maroon">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-brand" aria-hidden="true" />
                <p className="mt-5 text-sm leading-relaxed text-white/80">"{client.quote}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={client.avatar}
                    alt={`${client.name} avatar`}
                    className="h-12 w-12 rounded-full border-2 border-brand object-cover"
                  />
                  <div>
                    <h3 className="font-display text-base text-white">{client.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-brand">{client.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
