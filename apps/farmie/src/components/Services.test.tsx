import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

const categories = ['Fruit & Vegetable', 'Meat & Eggs', 'Milk & Cheese', 'Rice & Corn'] as const

describe('Services', () => {
  it('shows the heading and the four category cards', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', { name: 'Our Produce Is Mainstay For Us' }),
    ).toBeInTheDocument()
    for (const category of categories) {
      expect(screen.getByRole('heading', { name: category })).toBeInTheDocument()
    }
  })

  it('renders a card for every category', () => {
    render(<Services />)

    expect(screen.getAllByRole('article')).toHaveLength(4)
  })
})
