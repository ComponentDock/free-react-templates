import { useState } from 'react'
import { ChevronDown, HelpCircle, Layers, ShieldCheck, Zap } from 'lucide-react'

interface AccordionItem {
  id: string
  title: string
  content: string
  category: string
}

const faqs: AccordionItem[] = [
  {
    id: '1',
    title: 'What is Jade Accordion Showcase?',
    content:
      'Jade is a modern, highly polished, accessible accordion component library and FAQ template built with React 19, TypeScript, and Tailwind CSS 4. It provides fluid expand/collapse transitions, clean typography, and robust keyboard navigation.',
    category: 'General',
  },
  {
    id: '2',
    title: 'How do I integrate Jade into my existing React application?',
    content:
      'You can import the accordion components directly from your workspace or copy the standalone component module. It relies on standard Tailwind CSS classes and Lucide React icons for lightweight rendering.',
    category: 'Integration',
  },
  {
    id: '3',
    title: 'Is Jade fully responsive across mobile and desktop viewports?',
    content:
      'Yes! Jade is engineered with mobile-first CSS grids and flexbox layouts. Every accordion container adapts smoothly to mobile screens, tablets, and wide desktop displays without layout shift.',
    category: 'Design',
  },
  {
    id: '4',
    title: 'Can I customize the color palette and typography tokens?',
    content:
      'Absolutely. Jade uses Tailwind CSS 4 theme variables and CSS custom properties. You can override primary brand colors, borders, and spacing in your global CSS or tailwind configuration.',
    category: 'Customization',
  },
  {
    id: '5',
    title: 'What accessibility standards are built into the accordion?',
    content:
      'All accordion items include proper ARIA attributes such as aria-expanded, aria-controls, and focus-visible rings for seamless screen reader and keyboard navigation.',
    category: 'Accessibility',
  },
  {
    id: '6',
    title: 'How is test coverage maintained at 100%?',
    content:
      'Every component, state toggle, and edge case is thoroughly tested using Vitest and Testing Library. Strict coverage thresholds ensure high reliability and zero regressions.',
    category: 'Engineering',
  },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
            J
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">Jade</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-emerald-600 transition-colors">
            Features
          </a>
          <a href="#accordion" className="hover:text-emerald-600 transition-colors">
            Showcase
          </a>
          <a href="#faq" className="hover:text-emerald-600 transition-colors">
            FAQ
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="#accordion"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium text-sm shadow-sm hover:bg-emerald-700 transition-all focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Explore Accordion
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
          <Zap className="w-3.5 h-3.5 text-emerald-600" />
          <span>Interactive UI Showcase</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
          Elegant & Responsive Accordion Components for Modern Web Apps
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Discover Jade — a beautifully crafted collapsible showcase inspired by premium accordion
          patterns, built with React 19 and Tailwind CSS 4.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#accordion"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 transition-all transform hover:-translate-y-0.5"
          >
            Browse Accordion Items
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-slate-700 font-semibold border border-slate-200 hover:bg-slate-50 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    {
      icon: Layers,
      title: 'Modular Architecture',
      description:
        'Clean, isolated components designed for maximum reusability and effortless integration into any project.',
    },
    {
      icon: ShieldCheck,
      title: 'Fully Accessible',
      description:
        'Built with ARIA standards, keyboard navigation, and screen reader support out of the box.',
    },
    {
      icon: HelpCircle,
      title: 'Interactive States',
      description:
        'Smooth expand and collapse transitions with intuitive indicator arrows and active highlights.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Designed for Excellence
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Every feature is engineered to provide an exceptional user experience with pristine code
            quality.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((feat, idx) => {
            const Icon = feat.icon
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-xs border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Accordion() {
  const [openId, setOpenId] = useState<string | null>('1')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    'General',
    'Integration',
    'Design',
    'Customization',
    'Accessibility',
    'Engineering',
  ]

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="accordion" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Interactive Accordion Showcase
          </h2>
          <p className="mt-3 text-slate-600 text-lg">
            Click any question to expand its detailed answer or search through topics below.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="w-full sm:w-72">
            <input
              type="text"
              placeholder="Search accordion..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search accordion"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-2xs"
            />
          </div>
          <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-start sm:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-slate-500">No matching accordion items found.</p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-emerald-500 shadow-md bg-emerald-50/10'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-content-${faq.id}`}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-hidden focus:ring-2 focus:ring-inset focus:ring-emerald-500"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800">
                        {faq.category}
                      </span>
                      <span className="font-semibold text-slate-900 text-lg">{faq.title}</span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${isOpen ? 'bg-emerald-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'}`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <div
                      id={`accordion-content-${faq.id}`}
                      className="px-6 pb-6 pt-1 text-slate-600 leading-relaxed border-t border-slate-100"
                    >
                      <p>{faq.content}</p>
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-900 font-bold">
            J
          </div>
          <span className="font-bold text-white text-lg tracking-tight">Jade Accordion</span>
        </div>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Jade Showcase. All rights reserved.
        </p>
        <div className="flex items-center space-x-6 text-sm">
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            More templates at Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />
        <Features />
        <Accordion />
      </div>
      <Footer />
    </div>
  )
}
