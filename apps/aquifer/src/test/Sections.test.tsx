import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AreasBand } from '../components/AreasBand'
import { InstrumentsBand } from '../components/InstrumentsBand'
import { ServicesGrid } from '../components/ServicesGrid'
import { SignsList } from '../components/SignsList'
import { INSTRUMENTS, SERVICES, SIGNS, TOWNS } from '../data'

describe('SignsList', () => {
  it('renders the six symptoms in order under a mono numeral and a rule', () => {
    render(<SignsList />)

    expect(screen.getByText('What you are seeing')).toHaveClass('text-primary-700')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Six signs, and what each one usually means' }),
    ).toBeInTheDocument()

    const list = screen.getByRole('list')
    expect(within(list).getAllByRole('listitem')).toHaveLength(SIGNS.length)
    expect(within(list).getAllByRole('heading', { level: 3 })).toHaveLength(SIGNS.length)

    SIGNS.forEach((sign) => {
      expect(screen.getByText(sign.n)).toHaveClass('font-mono', 'tabular-nums', 'text-primary-600')
      expect(screen.getByText(sign.title)).toBeInTheDocument()
      expect(screen.getByText(sign.label)).toHaveClass('text-primary-700')
    })

    expect(screen.getByText('01').closest('li')?.parentElement).toHaveClass('sm:grid-cols-3')
  })
})

describe('InstrumentsBand', () => {
  it('renders the four instruments as left-ruled definitions', () => {
    render(<InstrumentsBand />)

    expect(document.getElementById('why-us')).toHaveClass('bg-ink-50')
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Four instruments, and none of them is a jackhammer',
      }),
    ).toBeInTheDocument()

    INSTRUMENTS.forEach((instrument) => {
      expect(screen.getByText(instrument.title).closest('div')).toHaveClass(
        'border-l-2',
        'border-primary-600',
      )
      expect(screen.getByText(instrument.body)).toBeInTheDocument()
    })
  })

  it('draws the located-slab panel as a named, redrawn figure', () => {
    render(<InstrumentsBand />)

    const figure = screen.getByRole('img', {
      name: /Cross-section of a floor slab with the leak marked/,
    })
    expect(figure.tagName.toLowerCase()).toBe('svg')
    expect(figure.closest('figure')?.parentElement).toHaveClass('order-last', 'lg:order-first')
    expect(
      screen.getByText(
        'Replace with a photograph of your own equipment and a marked floor before launch.',
      ),
    ).toHaveClass('text-ink-400')
  })
})

describe('ServicesGrid', () => {
  it('renders six cells with their price lines over a hairline gutter', () => {
    render(<ServicesGrid />)

    expect(screen.getByText('What we do')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Location, and the repair if you want it' }),
    ).toBeInTheDocument()

    SERVICES.forEach((service) => {
      const cell = screen.getByRole('heading', { level: 3, name: service.title }).parentElement
      expect(cell).toHaveClass('bg-white')
      expect(within(cell as HTMLElement).getByText(service.price)).toHaveClass('text-primary-700')
    })

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(SERVICES.length)
    expect(screen.getByText(SERVICES[0]!.body).parentElement?.parentElement).toHaveClass(
      'gap-px',
      'bg-ink-100',
    )
    expect(
      screen.getByText(/Starting prices are sample data for demonstration/),
    ).toBeInTheDocument()
  })
})

describe('AreasBand', () => {
  it('renders the twelve towns as hairline rows beside the heading', () => {
    render(<AreasBand />)

    expect(screen.getByRole('heading', { level: 2, name: 'Where we work' })).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(TOWNS.length)
    expect(screen.getByText('Louisville').closest('li')).toHaveClass('border-b', 'border-ink-100')
    expect(screen.getByText('Louisville').closest('ul')?.parentElement?.parentElement).toHaveClass(
      'lg:col-span-7',
    )
    expect(screen.getByText('La Grange')).toBeInTheDocument()
    expect(screen.getByText(/Replace this list with your own towns/)).toBeInTheDocument()
  })
})
