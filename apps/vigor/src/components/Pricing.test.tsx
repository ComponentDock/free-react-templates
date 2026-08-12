import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders three pricing cards with price, title, features, and enroll buttons', () => {
    render(<Pricing />)

    const cards = [
      { price: '$50/ Month', title: 'Woman Fitness Class' },
      { price: '$70/ Month', title: 'Spinning Class + BONUS' },
      { price: '$90/ Month', title: 'All Inclusive Gym' },
    ]

    for (const { price, title } of cards) {
      const priceHeading = screen.getByRole('heading', { name: price })
      const card = priceHeading.closest('article')!
      expect(within(card).getByRole('heading', { name: title })).toBeInTheDocument()
      expect(within(card).getAllByRole('listitem')).toHaveLength(3)
      expect(within(card).getByRole('link', { name: 'Enroll Now' })).toBeInTheDocument()
    }

    expect(screen.getByText(/Unlimited spinning and cardio classes/)).toBeInTheDocument()
  })
})
