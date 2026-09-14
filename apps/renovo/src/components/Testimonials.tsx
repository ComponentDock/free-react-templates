const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    role: 'IT Manager, TechCorp',
    quote:
      'Renovo fixed our entire fleet of laptops in record time. Their turnaround is incredible and the quality of work is outstanding.',
    avatar: 'renovo-avatar-1',
  },
  {
    name: 'James Rodriguez',
    role: 'Small Business Owner',
    quote:
      'My phone was completely dead after water damage. Renovo brought it back to life the same day. Highly recommend their services.',
    avatar: 'renovo-avatar-2',
  },
  {
    name: 'Emily Chen',
    role: 'Freelance Designer',
    quote:
      'Professional, fast, and affordable. They recovered all my project files from a corrupted drive. Lifesavers!',
    avatar: 'renovo-avatar-3',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-[#888fff] to-[#ce90ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white mb-3">Feedback from our real clients</h2>
          <p className="text-white/80">
            See what our customers have to say about their repair experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <img
                src={`https://picsum.photos/seed/${t.avatar}/80/80`}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                loading="lazy"
              />
              <p className="text-[#777] text-sm mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <h5 className="font-semibold text-[#222] uppercase text-sm">{t.name}</h5>
              <p className="text-xs text-[#777] mt-1">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
