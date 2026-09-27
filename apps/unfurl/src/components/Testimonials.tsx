const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    name: 'Eric Ingram',
    role: 'Product Designer @Facebook',
    seed: 'unfurl-eric',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    name: 'Ryan Mullins',
    role: 'Product Designer @Shopify',
    seed: 'unfurl-ryan',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
    name: 'Erica Miller',
    role: 'Product Designer @Twitter',
    seed: 'unfurl-erica',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-dark-section">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          My Happy Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-dark-card p-8 rounded-lg text-center relative shadow-lg shadow-black/20"
            >
              <div className="text-4xl text-brand mb-4">"</div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/50/50`}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="text-left">
                  <p className="font-[family-name:var(--font-heading)] text-sm font-bold text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
