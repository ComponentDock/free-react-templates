import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Why Choose Mechbot' })).toBeInTheDocument()
  })

  it('renders all six feature tiles', () => {
    render(<Features />)
    for (const title of [
      'Expert Support',
      'Secure Platform',
      'Easy Setup',
      'Blazing Fast',
      'Premium Quality',
      'Community',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/24\/7 technical assistance/i)).toBeInTheDocument()
    expect(screen.getByText(/Enterprise-grade encryption/i)).toBeInTheDocument()
  })
})
