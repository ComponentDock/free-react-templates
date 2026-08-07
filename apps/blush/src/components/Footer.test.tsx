import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the store buttons, social links, and the copyright line', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /Google Store/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Apple Store/ })).toBeInTheDocument()

    for (const name of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }

    expect(screen.getByText(/© \d{4} Blush\. All rights reserved\./)).toBeInTheDocument()
  })
})
