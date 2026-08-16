import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { describe, expect, it } from 'vitest'

const expectedTitles = [
  'Residential Cleaning',
  'Commercial Cleaning',
  'Office & Deep Cleaning',
  'Move-In/Out Cleaning',
  'Carpet & Upholstery',
  'Post-Construction',
]

describe('Services', () => {
  it('renders the section title and six service cards', () => {
    render(<Services />)
    expect(screen.getByText('Our services')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Better life for everyone' }),
    ).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(6)
    for (const title of expectedTitles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('shows price and Book now on every card', () => {
    render(<Services />)
    expect(screen.getAllByText('Starting from $50.00')).toHaveLength(6)
    expect(screen.getAllByRole('link', { name: 'Book now' })).toHaveLength(6)
  })
})
