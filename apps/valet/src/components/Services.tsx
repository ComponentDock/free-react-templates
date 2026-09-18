import {
  Home,
  Search,
  ClipboardList,
  FolderOpen,
  PenTool,
  Languages,
  Headphones,
  Briefcase,
} from 'lucide-react'

const services = [
  { icon: Home, title: 'Family Task' },
  { icon: Search, title: 'Online Research' },
  { icon: ClipboardList, title: 'Management Task' },
  { icon: FolderOpen, title: 'Project Management' },
  { icon: PenTool, title: 'Writing Editing' },
  { icon: Languages, title: 'Multilingual Services' },
  { icon: Headphones, title: 'Customer Service' },
  { icon: Briefcase, title: 'Executive Admin' },
]

export function Services() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Services
          </p>
          <h2 className="text-3xl font-bold">Our Services &amp; Offers</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <s.icon className="mx-auto mb-4 h-12 w-12 text-blue-600" />
              <h3 className="text-lg font-semibold">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
