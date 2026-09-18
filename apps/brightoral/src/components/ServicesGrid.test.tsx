import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesGrid } from './ServicesGrid'

describe('ServicesGrid', () => {
  it('renders the heading', () => {
    render(<ServicesGrid />)
    expect(screen.getByRole('heading', { name: /Our.*Services/i })).toBeInTheDocument()
  })

  it('renders 6 service items', () => {
    render(<ServicesGrid />)
    const items = [
      'Tooth Whitening',
      'Dental Checkup',
      'Dentist Chair',
      'Dental Tools',
      'First Aid Kit',
      'Oral Surgery',
    ]
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })
})
