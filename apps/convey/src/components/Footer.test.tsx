import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo, tagline and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Aurora' })).toBeInTheDocument()
    expect(screen.getByText(/Style & fashion, recreated in React/i)).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('target', '_blank')
    }
  })
})
