import { Landmark, Handshake } from 'lucide-react'

const features = [
  {
    icon: Landmark,
    title: 'Bank Loan',
    desc: 'Flexible loan options with competitive interest rates for personal and business needs.',
  },
  {
    icon: Handshake,
    title: 'Banking Consultation',
    desc: 'Expert financial advisors to help you plan and achieve your financial goals.',
  },
]

export function AboutFeatures() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="flex justify-center">
            <div className="h-72 w-72 overflow-hidden rounded-full border-4 border-brand/20">
              <img
                src="https://picsum.photos/seed/banknote-about3/400/400"
                alt="Banknote services"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-6">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-brand/10">
                  <f.icon className="h-7 w-7 text-brand" />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold">{f.title}</h4>
                  <p className="text-gray-600">{f.desc}</p>
                  <a
                    href="#"
                    className="mt-2 inline-block text-sm font-semibold text-brand transition hover:underline"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
