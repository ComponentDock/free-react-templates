import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, social links, and the copyright line', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Chroma Studio' })).toBeInTheDocument()

    for (const name of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }

    expect(screen.getByText(/© \d{4} Chroma Studio\. All rights reserved\./)).toBeInTheDocument()
  })
})
