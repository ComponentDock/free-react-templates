import { Phone, Mail } from 'lucide-react'

export function AgentSection() {
  return (
    <section id="about" className="flex flex-col bg-[#f5f7f9] md:flex-row">
      {/* Image side */}
      <div className="md:w-1/2">
        <img
          src="https://picsum.photos/seed/sundale-agent/800/600"
          alt="Real estate agent"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content side */}
      <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-16">
        <h2 className="mb-2 text-3xl font-bold text-gray-800">Jeremy Scott</h2>
        <p className="mb-6 text-tan-500">Realtor</p>
        <p className="mb-6 leading-relaxed text-gray-500">
          Etiam nec odio vestibulum est mattis efficiturut magna. Pellentesque sit amet tellus
          blandit. Etiam nec odio vestibulum est mattis efficiturut magna. Curabitur rhoncus auctor
          eleifend. Fusce venenatis diam urna, eu pharetra arcu varius ac. Etiam cursus turpis
          lectus, id iaculis risus tempor id.
        </p>
        <div className="space-y-3">
          <p className="flex items-center gap-2 text-sm text-gray-600">
            <Phone className="h-4 w-4 text-tan-500" />
            +1 555 123 4567
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-600">
            <Mail className="h-4 w-4 text-tan-500" />
            office@sundale.com
          </p>
        </div>
      </div>
    </section>
  )
}
