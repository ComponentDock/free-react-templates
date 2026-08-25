import { Quote } from 'lucide-react'

export function Testimonial() {
  return (
    <section
      className="relative py-32"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/crest-parallax/1920/800)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <Quote size={48} className="mb-6 text-brand opacity-60" />
        <blockquote className="mb-8 text-xl leading-relaxed text-white italic">
          &ldquo;I love that I was able to open a café and transform it into a place that makes
          people happy. A small business loan from Prospa was a big part of making that
          possible.&rdquo;
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-brand" />
          <div>
            <p className="font-semibold text-white">- Barb Dwyer</p>
            <p className="text-sm text-white/70">CEO of Crest</p>
          </div>
        </div>
      </div>
    </section>
  )
}
