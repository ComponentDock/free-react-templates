import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and four pricing cards with prices and Get Offer buttons', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2, name: /our prices/i })).toBeInTheDocument()
    const cards = screen
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.closest('li'))
    expect(cards).toHaveLength(4)

    const expectations: Array<[string, string]> = [
      ['Hair Style', '$50.00'],
      ['Manicure Pedicure', '$34.50'],
      ['Makeup', '$54.50'],
      ['Body Treatment', '$89.50'],
    ]
    for (const [name, price] of expectations) {
      const card = screen.getByRole('heading', { level: 3, name }).closest('li')
      expect(card).not.toBeNull()
      const scope = within(card as HTMLElement)
      expect(scope.getByText(price)).toBeInTheDocument()
      expect(scope.getByRole('link', { name: /get offer/i })).toHaveAttribute('href', '#booking')
    }
    const firstCard = cards[0] as HTMLElement
    const lastCard = cards[3] as HTMLElement
    expect(within(firstCard).getByText('Hair Dryer')).toBeInTheDocument()
    expect(within(lastCard).getByText('Facial Massage')).toBeInTheDocument()
  })
})
