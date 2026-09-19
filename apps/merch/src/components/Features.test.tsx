import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three feature items', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Worldwide Delivery' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Secure Payments' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Simple Returns' })).toBeInTheDocument()
  })

  it('renders descriptions for each feature', () => {
    render(<Features />)
    expect(screen.getByText(/deliver to over 200 countries/i)).toBeInTheDocument()
    expect(screen.getByText(/encrypted and never stored/i)).toBeInTheDocument()
    expect(screen.getByText(/return any item within 45 days/i)).toBeInTheDocument()
  })

  it('renders icons for each feature', () => {
    render(<Features />)
    // All three icons are rendered with aria-hidden
    const icons = document.querySelectorAll('[aria-hidden="true"]')
    expect(icons.length).toBeGreaterThanOrEqual(3)
  })
})
