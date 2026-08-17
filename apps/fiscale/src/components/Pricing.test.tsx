import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and three plan cards', () => {
    render(<Pricing />)
    const section = screen.getByRole('region', { name: 'Pricing' })
    expect(
      within(section).getByRole('heading', { level: 2, name: 'Pricing plans' }),
    ).toBeInTheDocument()

    const cards = within(section).getAllByTestId('pricing-card')
    expect(cards).toHaveLength(3)
    const names = ['Basic', 'Standard', 'Advanced']
    for (const [index, name] of names.entries()) {
      expect(within(cards[index]!).getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
  })

  it('shows the price, three checkmark features, and a Get started pill per card', () => {
    render(<Pricing />)
    const cards = screen.getAllByTestId('pricing-card')
    const prices = ['$19.99', '$299.99', '$799.99']
    for (const [index, card] of cards.entries()) {
      expect(within(card).getByText(prices[index]!)).toBeInTheDocument()
      expect(within(card).getByText('/ month')).toBeInTheDocument()
      expect(within(card).getAllByRole('listitem')).toHaveLength(3)
      expect(within(card).getByRole('link', { name: 'Get started' })).toBeInTheDocument()
    }
  })

  it('styles Standard with the green primary variant and Basic/Advanced with the blue variant', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('link', { name: 'Get started' })
    expect(buttons[0]!.className).toContain('bg-accent/20')
    expect(buttons[1]!.className).toContain('bg-brand/20')
    expect(buttons[2]!.className).toContain('bg-accent/20')
  })
})
