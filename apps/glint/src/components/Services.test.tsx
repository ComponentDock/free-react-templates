import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and all 6 service cards', () => {
    render(<Services />)

    expect(screen.getByText('Our Services')).toBeInTheDocument()

    const serviceNames = [
      'Crowns & Bridges',
      'Dental Implants',
      'Teeth Whitening',
      'Root Canals',
      'Wisdom Teeth',
      'Braces',
    ]

    for (const name of serviceNames) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders 6 service card elements', () => {
    const { container } = render(<Services />)
    const cards = container.querySelectorAll('.rounded-lg')
    expect(cards.length).toBe(6)
  })
})
