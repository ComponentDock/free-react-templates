import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and all six service cards with icon, title, and copy', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()

    for (const title of [
      'Full Grooming',
      'Bath & Brush',
      'Daycare',
      'Overnight Boarding',
      'Nail Trim',
      'Puppy Package',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getByText(/Complete grooming package/)).toBeInTheDocument()
    expect(screen.getByText(/Refreshing bath with premium shampoo/)).toBeInTheDocument()
    expect(screen.getByText(/supervised playtime/)).toBeInTheDocument()
    expect(screen.getByText(/overnight stays/)).toBeInTheDocument()
    expect(screen.getByText(/nail trimming/)).toBeInTheDocument()
    expect(screen.getByText(/first grooming experience/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'View All Services' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
