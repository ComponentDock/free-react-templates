import { Star } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold">Testimonial</h2>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex justify-center text-accent">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <blockquote className="mb-6 text-lg italic leading-relaxed text-text-dark">
            &ldquo;Far far away, behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
            the coast of the Semantics, a large language ocean.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://picsum.photos/seed/warehaus-avatar/80/80"
              alt="Customer avatar"
              className="h-14 w-14 rounded-full object-cover"
              loading="lazy"
            />
            <div className="text-left">
              <p className="font-bold">John Doe</p>
              <p className="text-sm text-text-muted">Marketing Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
