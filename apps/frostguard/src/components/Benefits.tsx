import { CreditCard, ShieldCheck, Siren, Calendar } from 'lucide-react'

const benefits = [
  { icon: CreditCard, title: 'No Upfront Payments' },
  { icon: ShieldCheck, title: 'Satisfaction Guarantee' },
  { icon: Siren, title: 'Emergency Service' },
  { icon: Calendar, title: '8 Years Experience' },
]

export function Benefits() {
  return (
    <section className="py-16 bg-[#F3F8FC]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white p-6 text-center rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#4586D5]/10 mb-4">
                <b.icon className="text-[#4586D5]" size={28} />
              </div>
              <h3 className="font-['Saira_Condensed'] text-lg font-bold text-[#142336]">
                {b.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
