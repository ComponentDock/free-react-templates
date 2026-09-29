import { Globe, Code, Palette, BookOpen } from 'lucide-react'

interface ContentCard {
  icon: typeof Globe
  title: string
  description: string
}

const CARDS: ContentCard[] = [
  {
    icon: Globe,
    title: 'Responsive Design',
    description:
      'Fully responsive layouts that adapt beautifully to any screen size, from mobile to desktop.',
  },
  {
    icon: Code,
    title: 'Clean Code',
    description:
      'Well-structured, maintainable code built with modern React patterns and TypeScript.',
  },
  {
    icon: Palette,
    title: 'Customizable',
    description:
      'Easily modify colors, fonts, and layouts to match your brand identity and vision.',
  },
  {
    icon: BookOpen,
    title: 'Well Documented',
    description:
      'Comprehensive documentation and comments to help you understand and extend the template.',
  },
]

export function MainContent() {
  return (
    <main className="flex-1 bg-page-bg p-8 lg:p-12">
      <h1 className="mb-2 text-3xl font-semibold text-heading-text">Sidebar Navigation</h1>
      <p className="mb-8 text-body-text">A clean sidebar template</p>

      <div className="mb-8 grid gap-6 sm:grid-cols-2">
        {CARDS.map((card) => {
          const Icon = card.icon
          return (
            <div
              key={card.title}
              className="rounded-lg border border-card-border bg-card-bg p-6 transition-shadow hover:shadow-md"
            >
              <Icon className="mb-3 h-8 w-8 text-accent" />
              <h3 className="mb-2 text-lg font-semibold text-heading-text">{card.title}</h3>
              <p className="text-sm leading-relaxed text-body-text">{card.description}</p>
            </div>
          )
        })}
      </div>

      <div className="space-y-4 text-body-text leading-relaxed">
        <p>
          This sidebar navigation template features a dark navy sidebar with icon-enhanced menu
          items, a newsletter subscription form, and a clean white content area with feature cards.
          Perfect for dashboards, documentation sites, and admin panels.
        </p>
        <p>
          The sidebar includes a logo, navigation links with dropdown support, and a newsletter
          signup section. On mobile devices, the sidebar slides in from the left when toggled via
          the hamburger menu. The active page is highlighted for clear visual feedback.
        </p>
      </div>
    </main>
  )
}
