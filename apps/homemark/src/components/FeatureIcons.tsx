import {
  Banknote,
  Home,
  MapPin,
  Users,
  TreePine,
  Sun,
  Building,
  Car,
  Warehouse,
} from 'lucide-react'
import { featureIcons } from '../data'

const iconMap: Record<string, React.ElementType> = {
  'Easy Buying': Banknote,
  'Ready to Move': Home,
  'Great Location': MapPin,
  'Community Pool': Users,
  '30% Park': TreePine,
  'Sunny Location': Sun,
  'Modern Design': Building,
  'Parking Spaces': Car,
  'Garage Included': Warehouse,
}

/** Horizontal row of 9 feature icon items. */
export function FeatureIcons() {
  return (
    <section className="bg-white py-10" data-testid="feature-icons">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-6 px-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 lg:px-8">
        {featureIcons.map((label) => {
          const Icon = iconMap[label] as React.ElementType
          return (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <Icon size={32} className="text-subtle" aria-hidden="true" />
              <span className="text-xs text-subtle">{label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
