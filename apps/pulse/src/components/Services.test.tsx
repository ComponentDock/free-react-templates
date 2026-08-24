import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Exclusive Services/i })).toBeInTheDocument()
  })

  it('renders all 8 service cards', () => {
    render(<Services />)
    const cards = [
      'Creative Design',
      'Digital Marketing',
      'Application Design',
      'Web Development',
      'Branding',
      'Graphic Design',
      'Email Marketing',
      'Web Design',
    ]
    for (const name of cards) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Stunning visual designs/i)).toBeInTheDocument()
    expect(screen.getByText(/Data-driven marketing strategies/i)).toBeInTheDocument()
  })
})
