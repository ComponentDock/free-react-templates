import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Brands } from '../components/Brands'
import { ClosingCta } from '../components/ClosingCta'
import { Featured } from '../components/Featured'
import { Hero } from '../components/Hero'
import { Showroom } from '../components/Showroom'
import { Trade } from '../components/Trade'
import { UtilityBar } from '../components/UtilityBar'
import { categories, products } from '../content'

describe('UtilityBar', () => {
  it('carries the counter hours, the collection promise and the phone', () => {
    render(<UtilityBar />)

    expect(screen.getByText(/Counter open Mon - Fri 06:30 - 17:00/)).toBeInTheDocument()
    expect(screen.getByText('Next-day collection on stocked lines')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Trade accounts' })).toHaveAttribute('href', '#trade')
    expect(screen.getByRole('link', { name: '(555) 010-0231' })).toHaveAttribute(
      'href',
      'tel:5550100231',
    )
  })
})

describe('Hero', () => {
  it('has the single page heading, the lede and the trade CTA', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Fixtures, water heaters and fittings, in stock.')
    expect(heading).toHaveClass('text-4xl', 'sm:text-5xl', 'max-w-2xl')
    expect(screen.getByText('Sacramento · Counter and showroom')).toHaveClass('eyebrow')
    expect(screen.getByRole('link', { name: 'Open a trade account' })).toHaveAttribute(
      'href',
      '#trade',
    )
  })

  it('renders four category cards with their stock counts and photography', () => {
    render(<Hero />)

    for (const category of categories) {
      expect(screen.getByText(category.count)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: `${category.name} on the counter at Brassworks` })).toHaveAttribute(
        'src',
        `https://picsum.photos/seed/${category.seed}/800/600`,
      )
    }
  })
})

describe('Featured', () => {
  it('renders the serif headline and one card per product', () => {
    render(<Featured />)

    const heading = screen.getByRole('heading', { level: 2, name: 'Lines we are holding deep' })
    expect(heading).toHaveClass('font-serif', 'text-3xl', 'sm:text-4xl')

    for (const product of products) {
      expect(screen.getByRole('heading', { level: 3, name: product.title })).toHaveClass(
        'font-serif',
      )
      expect(screen.getByRole('img', { name: `${product.title} in the Brassworks catalogue` })).toHaveAttribute(
        'src',
        `https://picsum.photos/seed/${product.seed}/800/800`,
      )
      for (const spec of product.specs) {
        expect(screen.getByText(spec.value)).toBeInTheDocument()
      }
    }
  })

  it('quotes a hire rate on the hire-only card and a trade price line on the rest', () => {
    render(<Featured />)

    expect(screen.getByText('Hire from $95 a day')).toHaveClass('text-primary-700')
    expect(screen.getAllByText('Trade price on account')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Request a quote' })).toHaveLength(4)
    expect(screen.getByText(/Sample products and stock figures/)).toBeInTheDocument()
  })
})

describe('Brands', () => {
  it('lays eight supplier tiles inside one hairline mosaic', () => {
    render(<Brands />)

    expect(screen.getByRole('heading', { level: 2, name: 'What we carry' })).toBeInTheDocument()

    const mosaic = screen.getByRole('list')
    expect(mosaic).toHaveClass('gap-px', 'bg-ink-200', 'overflow-hidden')
    expect(within(mosaic).getAllByRole('listitem')).toHaveLength(8)
    expect(within(mosaic).getByText('Ridgeway')).toBeInTheDocument()
    expect(within(mosaic).getByText('Consumables')).toBeInTheDocument()
    expect(screen.getByText(/Sample brand names/)).toBeInTheDocument()
  })
})

describe('Trade', () => {
  it('argues on graphite and lists the three account terms', () => {
    render(<Trade />)

    const eyebrow = screen.getByText('Trade accounts')
    expect(eyebrow).toHaveClass('eyebrow-dark')

    expect(
      screen.getByRole('heading', { level: 2, name: 'Most of our counter is on account' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Open an account' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByText('Trade pricing')).toBeInTheDocument()
    expect(screen.getByText('Thirty-day terms')).toBeInTheDocument()
    expect(screen.getByText('Collection, not delivery slots')).toBeInTheDocument()
    expect(screen.getByText('Sample terms for template demonstration.')).toBeInTheDocument()
  })
})

describe('Showroom', () => {
  it('carries the address, the counter hours and a 2:1 interior photo', () => {
    render(<Showroom />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Turn the taps on before you specify them' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Brassworks Supply Co.')).toBeInTheDocument()
    expect(screen.getByText('1480 Foundry Row')).toBeInTheDocument()
    expect(screen.getByText('Monday to Friday')).toBeInTheDocument()
    expect(screen.getByText('Closed')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book a showroom visit' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'The Brassworks showroom interior' })).toHaveClass(
      'aspect-[2/1]',
      'rounded-xl',
    )
  })
})

describe('ClosingCta', () => {
  it('offers a quote and a counter call on the deeper clay', () => {
    render(<ClosingCta />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Need something priced?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Request a quote' })).toHaveAttribute(
      'href',
      '#featured',
    )
    expect(screen.getByRole('link', { name: 'Call the counter' })).toHaveAttribute(
      'href',
      'tel:5550100231',
    )
  })
})
