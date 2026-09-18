const TESTIMONIALS = [
  {
    name: 'John Smith',
    role: 'Businessman',
    quote:
      'Greenplate delivers the freshest organic produce I have ever tasted. Their service is outstanding and delivery is always on time.',
    avatar: 'https://picsum.photos/seed/greenplate-avatar1/80/80',
  },
  {
    name: 'Sarah Johnson',
    role: 'Housewife',
    quote:
      'I love how easy it is to order fresh vegetables and fruits for my family. The quality is always consistent and the prices are fair.',
    avatar: 'https://picsum.photos/seed/greenplate-avatar2/80/80',
  },
  {
    name: 'Mike Anderson',
    role: 'Chef',
    quote:
      'As a professional chef, I demand the best ingredients. Greenplate never disappoints with their superior quality produce.',
    avatar: 'https://picsum.photos/seed/greenplate-avatar3/80/80',
  },
  {
    name: 'Emily Davis',
    role: 'Nutritionist',
    quote:
      'I recommend Greenplate to all my clients. Their organic selection is extensive and the freshness is guaranteed every time.',
    avatar: 'https://picsum.photos/seed/greenplate-avatar4/80/80',
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-paper" data-testid="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-ink text-center mb-10 font-serif">
          Our satisfied customer says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-ink font-semibold text-sm">{t.name}</h4>
                  <p className="text-mist text-xs">{t.role}</p>
                </div>
              </div>
              <p className="text-body text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
