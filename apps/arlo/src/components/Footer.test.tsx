import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns and a copyright line', () => {
    render(<Footer />)
    for (const title of ['Explore', 'Resources', 'Contact']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getByText(/© \d{4} Arlo\. All rights reserved\./)).toBeInTheDocument()
  })

  it('renders social links with accessible labels', () => {
    render(<Footer />)
    for (const label of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })
})
