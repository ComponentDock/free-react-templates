import { useEffect } from 'react'
import {
  Brush,
  MessageSquare,
  Activity,
  Users,
  Briefcase,
  UserCheck,
  TrendingUp,
  Tag,
} from 'lucide-react'
import { StatCard } from './components/StatCard'
import { Footer } from './components/Footer'

const whiteLeftCards = [
  {
    number: '275',
    label: 'New Posts',
    icon: <Brush className="h-7 w-7 text-white" />,
    iconColor: 'purple' as const,
  },
  {
    number: '109',
    label: 'New Comment',
    icon: <MessageSquare className="h-7 w-7 text-white" />,
    iconColor: 'teal' as const,
  },
  {
    number: '68 %',
    label: 'Bounce Rate',
    icon: <Activity className="h-7 w-7 text-white" />,
    iconColor: 'pink' as const,
  },
  {
    number: '343',
    label: 'Total Visits',
    icon: <Users className="h-7 w-7 text-white" />,
    iconColor: 'green' as const,
  },
]

const whiteRightCards = [
  {
    number: '275',
    label: 'New Projects',
    icon: <Briefcase className="h-7 w-7 text-white" />,
    iconColor: 'green' as const,
  },
  {
    number: '109',
    label: 'New Clients',
    icon: <UserCheck className="h-7 w-7 text-white" />,
    iconColor: 'purple' as const,
  },
  {
    number: '68 %',
    label: 'Conversion Rate',
    icon: <TrendingUp className="h-7 w-7 text-white" />,
    iconColor: 'teal' as const,
  },
  {
    number: '343',
    label: 'Support Tickets',
    icon: <Tag className="h-7 w-7 text-white" />,
    iconColor: 'pink' as const,
  },
]

const coloredLeftCards = [
  {
    number: '275',
    label: 'New Posts',
    icon: <Brush className="h-7 w-7 text-white" />,
    variant: 'purple' as const,
    iconColor: 'purple' as const,
  },
  {
    number: '109',
    label: 'New Comment',
    icon: <MessageSquare className="h-7 w-7 text-white" />,
    variant: 'teal' as const,
    iconColor: 'teal' as const,
  },
  {
    number: '68 %',
    label: 'Bounce Rate',
    icon: <Activity className="h-7 w-7 text-white" />,
    variant: 'pink' as const,
    iconColor: 'pink' as const,
  },
  {
    number: '343',
    label: 'Total Visits',
    icon: <Users className="h-7 w-7 text-white" />,
    variant: 'green' as const,
    iconColor: 'green' as const,
  },
]

const coloredRightCards = [
  {
    number: '275',
    label: 'New Projects',
    icon: <Briefcase className="h-7 w-7 text-white" />,
    variant: 'green' as const,
    iconColor: 'green' as const,
  },
  {
    number: '109',
    label: 'New Clients',
    icon: <UserCheck className="h-7 w-7 text-white" />,
    variant: 'purple' as const,
    iconColor: 'purple' as const,
  },
  {
    number: '68 %',
    label: 'Conversion Rate',
    icon: <TrendingUp className="h-7 w-7 text-white" />,
    variant: 'teal' as const,
    iconColor: 'teal' as const,
  },
  {
    number: '343',
    label: 'Support Tickets',
    icon: <Tag className="h-7 w-7 text-white" />,
    variant: 'pink' as const,
    iconColor: 'pink' as const,
  },
]

export function App() {
  useEffect(() => {
    document.title = 'BtnFuse — Bootstrap Buttons #09'
  }, [])

  return (
    <div className="min-h-screen bg-white text-btnfuse-heading">
      <main className="mx-auto max-w-5xl px-4 py-20">
        {/* Page Header */}
        <h1 className="mb-12 text-[32px] font-medium text-btnfuse-heading">Button #09</h1>

        {/* Pick Your Color */}
        <section data-testid="pick-color" className="mb-12">
          <h2 className="mb-6 text-base font-medium text-btnfuse-heading">Pick Your Color</h2>
          <div className="flex flex-wrap gap-4">
            <button className="rounded bg-btnfuse-purple px-4 py-3 text-sm font-medium text-white">
              Default Primary
            </button>
            <button className="rounded bg-btnfuse-teal px-4 py-3 text-sm font-medium text-white">
              Default Secondary
            </button>
            <button className="rounded bg-btnfuse-pink px-4 py-3 text-sm font-medium text-white">
              Default Tertiary
            </button>
            <button className="rounded bg-btnfuse-green px-4 py-3 text-sm font-medium text-white">
              Default Gradient
            </button>
          </div>
        </section>

        {/* White Cards — Icon Left */}
        <section data-testid="white-left" className="mb-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {whiteLeftCards.map((card) => (
              <StatCard
                key={`${card.number}-${card.label}-wl`}
                number={card.number}
                label={card.label}
                icon={card.icon}
                iconPosition="left"
                variant="white"
                iconColor={card.iconColor}
              />
            ))}
          </div>
        </section>

        {/* White Cards — Icon Right */}
        <section data-testid="white-right" className="mb-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {whiteRightCards.map((card) => (
              <StatCard
                key={`${card.number}-${card.label}-wr`}
                number={card.number}
                label={card.label}
                icon={card.icon}
                iconPosition="right"
                variant="white"
                iconColor={card.iconColor}
              />
            ))}
          </div>
        </section>

        {/* Colored Cards — Icon Left */}
        <section data-testid="colored-left" className="mb-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {coloredLeftCards.map((card) => (
              <StatCard
                key={`${card.number}-${card.label}-cl`}
                number={card.number}
                label={card.label}
                icon={card.icon}
                iconPosition="left"
                variant={card.variant}
                iconColor={card.iconColor}
              />
            ))}
          </div>
        </section>

        {/* Colored Cards — Icon Right */}
        <section data-testid="colored-right" className="mb-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            {coloredRightCards.map((card) => (
              <StatCard
                key={`${card.number}-${card.label}-cr`}
                number={card.number}
                label={card.label}
                icon={card.icon}
                iconPosition="right"
                variant={card.variant}
                iconColor={card.iconColor}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
