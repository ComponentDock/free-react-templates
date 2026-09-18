import { Wrench, Wind, Thermometer, Droplets, Fan, Settings } from 'lucide-react'

const services = [
  {
    icon: Wind,
    title: 'A/C Installation',
    desc: 'Professional air conditioning installation for homes and businesses.',
    img: 'frostguard-service-1',
  },
  {
    icon: Wrench,
    title: 'Cleaning & Optimization',
    desc: 'Regular maintenance to keep your system running efficiently.',
    img: 'frostguard-service-2',
  },
  {
    icon: Thermometer,
    title: 'Heating Repair',
    desc: 'Expert heating system repair and diagnosis services.',
    img: 'frostguard-service-3',
  },
  {
    icon: Droplets,
    title: 'Duct Cleaning',
    desc: 'Thorough duct cleaning for better air quality.',
    img: 'frostguard-service-4',
  },
  {
    icon: Fan,
    title: 'Ventilation',
    desc: 'Complete ventilation solutions for fresh indoor air.',
    img: 'frostguard-service-5',
  },
  {
    icon: Settings,
    title: 'System Upgrade',
    desc: 'Modernize your HVAC system with the latest technology.',
    img: 'frostguard-service-6',
  },
]

export function Services() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-['Saira_Condensed'] text-3xl md:text-4xl font-bold text-[#142336]">
            What We Can Offer You
          </h2>
          <a
            href="#quote"
            className="hidden md:inline-block border-2 border-[#4586D5] text-[#4586D5] font-['Saira_Condensed'] font-bold px-6 py-2 rounded-[60px] hover:bg-[#4586D5] hover:text-white transition-colors"
          >
            Get a quote
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg overflow-hidden shadow-sm group">
              <div
                className="relative h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(https://picsum.photos/seed/${s.img}/600/400)` }}
              >
                <div className="absolute bottom-0 left-0 bg-[#4586D5] rounded-full p-3 m-4">
                  <s.icon className="text-white" size={20} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-['Saira_Condensed'] text-xl font-bold text-[#142336] mb-2">
                  {s.title}
                </h3>
                <p className="font-['Mulish'] text-sm text-[#444444] mb-3">{s.desc}</p>
                <a
                  href="#"
                  className="text-[#4586D5] font-['Mulish'] text-sm font-semibold hover:underline"
                >
                  More info →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
