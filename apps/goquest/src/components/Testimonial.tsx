import { Quote } from 'lucide-react'

export function Testimonial() {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/goquest-testimonial/1920/800)' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-dark/80" />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <Quote size={48} className="text-accent-yellow mx-auto mb-6" />

        <p className="text-white text-xl md:text-2xl italic leading-relaxed mb-8">
          &ldquo;GoQuest made our honeymoon absolutely magical. The guides were incredible, the
          destinations breathtaking, and every detail was taken care of. We couldn&apos;t have asked
          for a better experience!&rdquo;
        </p>

        <div className="flex flex-col items-center gap-4">
          <img
            src="https://picsum.photos/seed/goquest-founder/80/80"
            alt="Jessica Robinson"
            className="w-16 h-16 rounded-full object-cover border-2 border-accent-yellow"
          />
          <div>
            <h4 className="font-heading text-white text-lg font-semibold">Jessica Robinson</h4>
            <p className="text-accent-warm text-sm">Founder & CEO</p>
          </div>
        </div>
      </div>
    </section>
  )
}
