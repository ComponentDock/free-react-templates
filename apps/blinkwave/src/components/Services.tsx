import { Wifi, Headphones, ShieldCheck, Zap } from 'lucide-react'

const services = [
  {
    icon: Wifi,
    title: 'Perfect in Coverage',
    description:
      'Blanket coverage across urban and suburban areas with our expanding fiber network.',
  },
  {
    icon: Headphones,
    title: 'Live Call Support',
    description: 'Real people, real answers. Our support team is available around the clock.',
  },
  {
    icon: ShieldCheck,
    title: 'Secured Payment',
    description: 'Pay with confidence using our encrypted, PCI-compliant payment system.',
  },
  {
    icon: Zap,
    title: '1 Gbps Data Rate',
    description: 'Blazing-fast speeds for streaming, gaming, and heavy bandwidth usage.',
  },
]

export function Services() {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          {/* Left: mission text */}
          <div className="w-full lg:w-5/12">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-signal-400">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">
              Our mission is to bring all the power of every business online.
            </h2>
            <p className="mt-6 text-gray-500 leading-relaxed">
              We believe every community deserves fast, affordable internet. Our infrastructure
              investments mean lower latency, higher throughput, and a connection you can count on.
            </p>
            <a
              href="#pricing"
              className="mt-8 inline-block rounded-[0_10px] bg-signal-400 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-signal-500"
            >
              View Packages
            </a>
          </div>

          {/* Right: 2x2 grid of service cards */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-2 gap-6">
              {services.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-[0_10px] bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-signal-50">
                    <Icon className="h-7 w-7 text-signal-400" />
                  </div>
                  <h3 className="mb-2 text-sm font-bold text-navy-800">{title}</h3>
                  <p className="text-xs leading-relaxed text-gray-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
