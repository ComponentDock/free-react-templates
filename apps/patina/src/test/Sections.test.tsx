import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Compare } from '../components/Compare'
import { Owner } from '../components/Owner'
import { Portfolio } from '../components/Portfolio'
import { Process } from '../components/Process'
import { compare, owner, portfolio, process } from '../content'

describe('Portfolio', () => {
  it('renders three portrait cards as one row at lg', () => {
    const { container } = render(<Portfolio />)

    expect(screen.getByText(portfolio.eyebrow)).toHaveClass('text-primary-400')
    expect(screen.getByRole('heading', { level: 2, name: portfolio.title })).toHaveClass('font-serif')
    expect(screen.getByText(portfolio.lead)).toHaveClass('text-ink-200')

    const grid = container.querySelector('ul') as HTMLElement
    expect(grid).toHaveClass('grid-cols-2', 'lg:grid-cols-3')

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(3)
    items.forEach((_, index) => {
      const entry = portfolio.items[index]!
      expect(screen.getByAltText(`${entry.name} in ${entry.city}`)).toHaveClass('aspect-[4/5]')
      expect(screen.getByText(entry.city)).toHaveClass('text-primary-400')
    })
  })

  it('lets the last card span both columns below lg instead of leaving a hole', () => {
    render(<Portfolio />)

    const items = screen.getAllByRole('listitem')
    expect(items[0]).not.toHaveClass('col-span-2')
    expect(items[2]).toHaveClass('col-span-2', 'lg:col-span-1')
  })

  it('names every card for assistive tech and links nowhere dead', () => {
    render(<Portfolio />)

    portfolio.items.forEach((entry) => {
      const link = screen.getByRole('link', {
        name: `${entry.name}, ${entry.city} — enquire about this room`,
      })
      expect(link).toHaveAttribute('href', '#contact')
      expect(link).toHaveClass('group')
    })
  })
})

describe('Compare', () => {
  it('stacks a before and an after behind one divider at the midpoint', () => {
    render(<Compare />)

    expect(screen.getByRole('heading', { level: 2, name: compare.title })).toHaveClass('font-serif')
    expect(screen.getByText(compare.lead)).toBeInTheDocument()
    expect(screen.getByAltText(compare.beforeAlt)).toHaveClass('block', 'w-full')
    expect(screen.getByAltText(compare.afterAlt)).toHaveStyle({ clipPath: 'inset(0 0 0 50%)' })
    expect(screen.getByTestId('before-after')).toHaveClass('rounded-2xl', 'overflow-hidden')
    expect(screen.getByText('Before')).toBeInTheDocument()
    expect(screen.getByText('After')).toBeInTheDocument()
  })

  it('moves the clip and the divider together when the range is dragged', () => {
    const { container } = render(<Compare />)
    const range = screen.getByLabelText(compare.label)

    expect(range).toHaveAttribute('type', 'range')
    expect(range).toHaveClass('w-[85%]')

    fireEvent.change(range, { target: { value: '20' } })

    expect(screen.getByAltText(compare.afterAlt)).toHaveStyle({ clipPath: 'inset(0 0 0 20%)' })
    expect(container.querySelector('[data-divider]')).toHaveStyle({ left: '20%' })
    expect(range).toHaveAttribute('aria-valuetext', '20% of the finished room revealed')
  })
})

describe('Process', () => {
  it('renders three stages with numerals, hairlines and uneven meta lines', () => {
    const { container } = render(<Process />)

    expect(screen.getByText(process.eyebrow)).toHaveClass('text-sm', 'tracking-wide')
    expect(screen.getByRole('heading', { level: 2, name: process.title })).toHaveClass(
      'font-bold',
      'tracking-[-0.9px]',
    )
    expect(screen.getByText(process.lead)).toHaveClass('text-white/70')

    const list = screen.getByRole('list')
    expect(list.tagName).toBe('OL')
    expect(list).toHaveClass('sm:grid-cols-3')
    expect(screen.getAllByRole('listitem')).toHaveLength(3)

    process.steps.forEach((step) => {
      expect(screen.getByText(step.numeral)).toHaveClass('tabular-nums', 'text-primary-400')
      expect(screen.getByText(step.title)).toBeInTheDocument()
      expect(screen.getByText(step.body)).toBeInTheDocument()
      expect(screen.getByText(step.meta)).toHaveClass('text-primary-400')
    })

    expect(container.querySelectorAll('.h-px.flex-1')).toHaveLength(3)
  })
})

describe('Owner', () => {
  it('centres the studio statement on a 112 px portrait', () => {
    render(<Owner />)

    const portrait = screen.getByAltText(owner.portraitAlt)
    expect(portrait).toHaveClass('h-28', 'w-28', 'rounded-full')

    expect(screen.getByText(owner.eyebrow)).toHaveClass('text-primary-400')
    expect(screen.getByText(owner.lead)).toHaveClass('font-serif', 'text-white')

    owner.paragraphs.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toHaveClass('text-ink-200')
    })

    expect(screen.getByText(owner.signature)).toHaveClass('font-serif')
    expect(screen.getByText(owner.cityLine)).toHaveClass('text-ink-300', 'uppercase')
  })

  it('is the page’s only underlined action', () => {
    render(<Owner />)

    const link = screen.getByRole('link', { name: owner.link.label })
    expect(link).toHaveAttribute('href', '#portfolio')
    expect(link).toHaveClass('border-b', 'border-primary-500')
  })
})
