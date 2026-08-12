import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the three feature cards with icon, heading, and blurb', () => {
    const { container } = render(<Features />)
    for (const title of ['Worldwide Support', 'Safe & Secure', 'Cloud Hosting']) {
      expect(screen.getByRole('heading', { level: 4, name: title })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg')).toHaveLength(3)
    expect(screen.getAllByText(/Phasellus vehicula tempus orci/)).toHaveLength(3)
  })
})
