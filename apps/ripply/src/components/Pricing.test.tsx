import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Pricing } from './Pricing'

const FEATURES = [
  'Free Useable',
  'Easily Can Useable 10GB',
  'Free Secuirity Service',
  'Dedicated Useable Account',
]

describe('Pricing', () => {
  it('renders the title and three pricing cards', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: 'Pricing Table' })).toBeInTheDocument()

    const basic = screen.getByRole('heading', { level: 3, name: 'BASIC' }).closest('div')!
    expect(within(basic).getByText('$00')).toBeInTheDocument()
    expect(within(basic).getByText('/month')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'PREMIUM' })).toBeInTheDocument()
    expect(screen.getByText('$50')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'EXCLUSIVE' })).toBeInTheDocument()
    expect(screen.getByText('$90')).toBeInTheDocument()

    // Each card lists the four features and a purchase pill.
    const cards = screen.getAllByRole('link', { name: 'Purchase Now' })
    expect(cards).toHaveLength(3)
    for (const feature of FEATURES) {
      expect(screen.getAllByText(feature)).toHaveLength(3)
    }
  })

  it('styles the featured middle card with the gradient header and shadow', () => {
    render(<Pricing />)

    const featured = screen
      .getByRole('heading', { level: 3, name: 'PREMIUM' })
      .closest('div')!.parentElement!
    expect(featured.className).toContain('shadow-[0_0_20px_rgba(0,0,0,0.14)]')

    const side = screen
      .getByRole('heading', { level: 3, name: 'BASIC' })
      .closest('div')!.parentElement!
    expect(side.className).not.toContain('shadow-[0_0_20px_rgba(0,0,0,0.14)]')
  })
})
