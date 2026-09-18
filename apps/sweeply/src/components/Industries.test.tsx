import { render, screen } from '@testing-library/react'
import { Industries } from './Industries'
import { describe, expect, it } from 'vitest'

describe('Industries', () => {
  it('renders the heading', () => {
    render(<Industries />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Industries We Serve' }),
    ).toBeInTheDocument()
  })

  it('renders all 8 industry items', () => {
    render(<Industries />)
    const items = [
      'Airport & Airlines',
      'House & Offices',
      'Auto Dealerships',
      'Sports & Fitness Centers',
      'Schools & Universities',
      'Commercial Building',
      'Medical Facilities',
      'Entertainment Venues',
    ]
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })
})
