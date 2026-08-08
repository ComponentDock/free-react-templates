import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns and a copyright line', () => {
    render(<Footer />)
    expect(screen.getByRole('navigation', { name: 'Quick links' })).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders social links with accessible labels', () => {
    render(<Footer />)
    for (const label of ['X', 'Facebook', 'LinkedIn', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('href')
    }
  })
})
