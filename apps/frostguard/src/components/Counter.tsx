import { Users, UserCheck, Package, Building } from 'lucide-react'

const stats = [
  { icon: Users, value: '3589', label: 'Satisfied Customers' },
  { icon: UserCheck, value: '868', label: 'Professional' },
  { icon: Package, value: '5148', label: 'Equipment Sold' },
  { icon: Building, value: '025', label: 'Branches Operating' },
]

export function Counter() {
  return (
    <section className="py-16 bg-[#142336]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="text-[#4586D5] mx-auto mb-3" size={32} />
              <div className="text-4xl md:text-5xl font-bold text-white font-['Saira_Condensed']">
                {s.value}
              </div>
              <div className="text-[#4586D5] font-['Mulish'] text-sm mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
