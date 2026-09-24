import {
  HeartPulse,
  Stethoscope,
  FlaskConical,
  Smile,
  Scissors,
  Brain,
  Bone,
  Baby,
  Eye,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface DepartmentsProps {
  className?: string
}

interface Department {
  name: string
  icon: LucideIcon
  description: string
}

const departments: Department[] = [
  {
    name: 'Cardiology',
    icon: HeartPulse,
    description: 'Comprehensive heart care with advanced diagnostic and treatment options.',
  },
  {
    name: 'Gastroenterology',
    icon: Stethoscope,
    description: 'Expert care for digestive system disorders and gastrointestinal health.',
  },
  {
    name: 'Medical Lab',
    icon: FlaskConical,
    description: 'State-of-the-art laboratory services for accurate and timely diagnostics.',
  },
  {
    name: 'Dental Care',
    icon: Smile,
    description: 'Complete dental services from routine check-ups to advanced procedures.',
  },
  {
    name: 'Surgery',
    icon: Scissors,
    description: 'Expert surgical teams using the latest minimally invasive techniques.',
  },
  {
    name: 'Neurology',
    icon: Brain,
    description: 'Specialized care for neurological conditions and brain health.',
  },
  {
    name: 'Orthopaedy',
    icon: Bone,
    description: 'Advanced orthopaedic treatments for bones, joints, and muscles.',
  },
  {
    name: 'Pediatry',
    icon: Baby,
    description: 'Dedicated healthcare services for infants, children, and adolescents.',
  },
  {
    name: 'Ophthalmology',
    icon: Eye,
    description: 'Complete eye care services from routine exams to surgical treatments.',
  },
]

export function Departments({ className }: DepartmentsProps) {
  return (
    <section className={cn('py-16 bg-section-dept', className)} aria-label="Our departments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-body text-center mb-12">Our Departments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => {
            const Icon = dept.icon
            return (
              <div
                key={dept.name}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="text-brand-accent mb-4" size={36} aria-hidden="true" />
                <h3 className="text-lg font-bold text-body mb-2">{dept.name}</h3>
                <p className="text-sm text-body-light mb-4">{dept.description}</p>
                <a
                  href={`#${dept.name.toLowerCase()}`}
                  className="text-brand-accent text-sm font-medium hover:underline"
                >
                  read more
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
