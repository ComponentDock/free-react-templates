import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Acquire } from '../components/Acquire'
import { Exhibitions } from '../components/Exhibitions'
import { Statement } from '../components/Statement'
import { Works } from '../components/Works'
import { paintings } from '../content'
import { installMedia } from './helpers'

describe('Works', () => {
  it('shows six paintings with the tabulated data', () => {
    installMedia({ reduce: false })
    render(<Works />)

    expect(screen.getByRole('heading', { level: 2, name: 'Recent paintings' })).toBeInTheDocument()
    expect(screen.getByText('Selected works')).toHaveClass('text-accent-700')

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(6)
    expect(screen.getByRole('img', {
      name: 'Kitchen, four in the afternoon, 2032, Oil on linen',
    })).toBeInTheDocument()
    expect(screen.getByText('120 × 90 cm')).toBeInTheDocument()
    expect(screen.getByText('40 × 30 cm')).toBeInTheDocument()
  })

  it('marks exactly three works as available, and prices four', () => {
    installMedia({ reduce: false })
    render(<Works />)

    expect(document.querySelectorAll('.bg-accent-600')).toHaveLength(3)
    expect(screen.getAllByText('Available').length).toBeGreaterThanOrEqual(3)
    expect(screen.getByText('Reserved')).toBeInTheDocument()
    expect(screen.getByText('Sold')).toBeInTheDocument()
    expect(screen.getByText('Private collection')).toBeInTheDocument()

    expect(screen.getByText('DKK 46,000')).toBeInTheDocument()
    expect(screen.getByText('DKK 12,500')).toBeInTheDocument()
    expect(screen.getByText('DKK 38,000')).toBeInTheDocument()
    // Three available works plus one reserved; sold and privately held have no price.
    expect(screen.getAllByText(/^DKK/)).toHaveLength(4)
  })

  it('carries the three available works the closing band promises', () => {
    installMedia({ reduce: false })
    expect(paintings.filter((painting) => painting.status === 'Available')).toHaveLength(3)
  })
})

describe('Statement', () => {
  it('sets four paragraphs around one pull quote', () => {
    installMedia({ reduce: false })
    const { container } = render(<Statement />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'On painting rooms nobody is looking at' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'A room is at its most honest in the twenty minutes before someone turns a lamp on.',
      ),
    ).toBeInTheDocument()

    expect(container.querySelectorAll('p.leading-\\[1\\.85\\]')).toHaveLength(4)
    expect(container.querySelector('blockquote')).toHaveClass(
      'border-l-2',
      'border-accent-600',
      'pl-6',
      'italic',
    )
    expect(screen.getByText('Studio, Refshaleøen, February 2032')).toBeInTheDocument()
    expect(container.querySelector('figure')).toHaveClass('lg:sticky', 'lg:top-28')
    expect(container.querySelector('img')).toHaveAttribute('alt', '')
  })
})

describe('Exhibitions', () => {
  it('lists seven dated rows on the dark band', () => {
    installMedia({ reduce: false })
    const { container } = render(<Exhibitions />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Where the work has been' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(7)
    expect(container.querySelector('section')).toHaveClass('bg-primary-900')
    expect(screen.getByText('The Long Room')).toBeInTheDocument()
    expect(screen.getByText('First Rooms')).toBeInTheDocument()
    expect(screen.getAllByText('Galleri Nordhavn · Copenhagen').length).toBeGreaterThanOrEqual(1)
  })

  it('fills the Solo tag, outlines Forthcoming and leaves the rest on the mid ground', () => {
    installMedia({ reduce: false })
    const { container } = render(<Exhibitions />)

    const tags = Array.from(container.querySelectorAll('li span'))
    const solo = tags.filter((tag) => tag.textContent === 'Solo')
    expect(solo).toHaveLength(3)
    expect(solo[0]).toHaveClass('bg-accent-600', 'text-white')

    const forthcoming = tags.find((tag) => tag.textContent === 'Forthcoming')
    expect(forthcoming).toHaveClass('text-accent-400')
    expect(forthcoming).not.toHaveClass('bg-accent-600')

    const group = tags.filter((tag) => tag.textContent === 'Group')
    expect(group[0]).toHaveClass('bg-primary-700', 'text-primary-200')

    expect(screen.getByText(/Full CV and high-resolution images/)).toBeInTheDocument()
  })
})

describe('Acquire', () => {
  it('prints the three routes with their rules underneath', () => {
    installMedia({ reduce: false })
    render(<Acquire />)

    expect(screen.getByRole('heading', { level: 2, name: 'Three ways to buy' })).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(2 + 3)

    expect(screen.getByText('Directly from the studio')).toBeInTheDocument()
    expect(screen.getByText('Through a gallery')).toBeInTheDocument()
    expect(screen.getByText('Commission')).toBeInTheDocument()

    expect(
      screen.getByText('Payment in two instalments. Nothing leaves the studio until the second clears.'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Gallery prices include their commission and are not negotiable by me.'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Twelve to eighteen months from agreement. Fifty percent on commencement.'),
    ).toBeInTheDocument()

    expect(screen.getByText(/I will say no to most requests and it is nothing personal/)).toBeInTheDocument()
  })

  it('names the two galleries and closes with the only square action', () => {
    installMedia({ reduce: false })
    render(<Acquire />)

    expect(screen.getByText('Represented by')).toBeInTheDocument()
    expect(screen.getByText('Galleri Nordhavn')).toBeInTheDocument()
    expect(screen.getByText('Kunstverein Hamburg')).toBeInTheDocument()
    expect(screen.getByText('Hamburg (group exhibitions)')).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'Enquire about a work' })
    expect(cta).toHaveAttribute('href', '#contact')
    expect(cta).toHaveClass('rounded-none', 'border-primary-900')
  })
})
