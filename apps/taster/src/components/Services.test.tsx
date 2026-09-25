import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: /other services/i })).toBeInTheDocument()
  })

  it('renders 6 service cards', () => {
    render(<Services />)
    const titles = [
      'Quality Cuisine',
      'Fresh Food',
      'Bread & Pancake',
      'Reserve Now',
      'Fresh Vegies Salad',
      'Whole Chicken',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
