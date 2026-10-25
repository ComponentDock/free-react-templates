import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Calendar } from '../components/Calendar'
import { Maintenance } from '../components/Maintenance'
import { Planting } from '../components/Planting'
import { Work } from '../components/Work'
import { calendar, plans, planting, work } from '../content'

describe('Work', () => {
  it('renders three cases on the stone ground in DOM order', () => {
    const { container } = render(<Work />)

    const band = container.querySelector('#work')
    expect(band).toHaveClass('bg-accent-50', 'py-20', 'sm:py-28')
    expect(screen.getByText(work.chip)).toHaveClass('bg-primary-700', 'uppercase')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(work.title)

    const articles = container.querySelectorAll('article')
    expect(articles).toHaveLength(3)
    expect(articles[0]).toHaveTextContent('Widcombe, Bath')
    expect(articles[1]).toHaveTextContent('Oldfield Park')
    expect(articles[2]).toHaveTextContent('Combe Down')
  })

  it('flips only the second figure and budgets every case', () => {
    const { container } = render(<Work />)
    const figures = container.querySelectorAll('article > figure')

    expect(figures[0]).not.toHaveClass('lg:order-2')
    expect(figures[1]).toHaveClass('lg:order-2')
    expect(figures[2]).not.toHaveClass('lg:order-2')

    work.items.forEach((project) => {
      expect(screen.getByText(project.plot)).toHaveClass('font-semibold')
      expect(screen.getByText(project.budget)).toHaveClass('text-primary-700')
      expect(screen.getByAltText(`${project.title} — before`)).toHaveAttribute(
        'src',
        project.before,
      )
      expect(screen.getByAltText(`${project.title} — after`)).toHaveAttribute('src', project.after)
    })

    expect(screen.getAllByText('Before')).toHaveLength(3)
    expect(screen.getAllByText('Before')[0]).toHaveClass('bg-accent-900/85')
    expect(screen.getAllByText('After')[0]).toHaveClass('bg-primary-700')
  })
})

describe('Planting', () => {
  it('renders six plant cards with the tag, latin name and three-row list', () => {
    const { container } = render(<Planting />)

    expect(container.querySelector('#planting')).toHaveClass('bg-white')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(planting.title)
    expect(container.querySelectorAll('ul > li')).toHaveLength(6)
    expect(container.querySelector('ul')).toHaveClass('lg:grid-cols-3')

    const cards = Array.from(container.querySelectorAll('ul > li'))
    planting.items.forEach((plant, index) => {
      const card = within(cards[index] as HTMLElement)
      expect(card.getByRole('heading', { level: 3, name: plant.name })).toHaveClass('font-serif')
      expect(card.getByText(plant.tag)).toHaveClass('bg-primary-50', 'text-primary-800')
      expect(card.getByText(plant.latin)).toHaveClass('italic', 'text-gray-500')
      expect(card.getByText(plant.aspect)).toBeInTheDocument()
      expect(card.getByText(plant.height)).toHaveClass('tabular-nums')
      expect(card.getByText(plant.interest)).toBeInTheDocument()
    })

    expect(screen.getAllByText('Aspect')).toHaveLength(6)
  })

  it('closes on the green-ruled callout', () => {
    render(<Planting />)

    expect(screen.getByText(planting.callout)).toHaveClass(
      'border-l-4',
      'border-primary-600',
      'bg-primary-50',
    )
  })
})

describe('Calendar', () => {
  it('renders four season cards whose header tints escalate', () => {
    const { container } = render(<Calendar />)
    const cards = container.querySelectorAll('ol > li')

    expect(cards).toHaveLength(4)
    expect(container.querySelector('#calendar')).toHaveClass('bg-white')
    expect(calendar.seasons.map((season) => season.header)).toEqual([
      'bg-primary-100 text-primary-900',
      'bg-accent-100 text-accent-900',
      'bg-primary-700 text-white',
      'bg-accent-800 text-white',
    ])

    calendar.seasons.forEach((season, index) => {
      expect(screen.getByRole('heading', { level: 3, name: season.name })).toBeInTheDocument()
      expect(screen.getByText(season.months)).toHaveClass('uppercase')
      expect(screen.getByText(season.summary)).toHaveClass('italic', 'text-gray-600')
      expect(cards[index]?.querySelectorAll('li li')).toHaveLength(4)
      expect(cards[index]?.querySelector('.bg-primary-500')).not.toBeNull()
    })
  })

  it('closes on the pruning note', () => {
    render(<Calendar />)

    expect(screen.getByText(calendar.note)).toHaveClass('max-w-3xl', 'text-center')
  })
})

describe('Maintenance', () => {
  it('puts three equal-height tiers on the near-black band', () => {
    const { container } = render(<Maintenance />)
    const band = container.querySelector('#maintenance')

    expect(band).toHaveClass('bg-accent-900', 'text-white')
    expect(screen.getByText(plans.chip)).toHaveClass('bg-primary-600')

    const grid = container.querySelector('#maintenance ul.grid') as HTMLElement
    const cards = Array.from(grid.children)
    expect(cards).toHaveLength(3)
    expect(cards[0]).toHaveClass('bg-white/5', 'ring-1', 'rounded-3xl')
    expect(cards[1]).toHaveClass('bg-primary-600', 'ring-2', 'ring-primary-400')
    expect(cards[2]).toHaveClass('bg-white/5')

    plans.items.forEach((plan) => {
      expect(screen.getByRole('heading', { level: 3, name: plan.name })).toHaveClass('font-serif')
      expect(screen.getByText(plan.visits)).toHaveClass('text-accent-300')
      expect(screen.getByText(plan.price)).toHaveClass('text-4xl', 'tabular-nums')
      expect(screen.getByRole('link', { name: `Enquire about ${plan.name}` })).toHaveAttribute(
        'href',
        '#contact',
      )
      plan.features.forEach((feature) => {
        expect(screen.getByText(feature)).toBeInTheDocument()
      })
    })

    expect(cards[1]?.querySelector('.flex-1')).not.toBeNull()
    expect(screen.getByText(plans.note)).toHaveClass('text-accent-300')
  })
})
