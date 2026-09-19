import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline text', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { name: /the new way to display product/i }),
    ).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /explore now/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '#new')
  })

  it('renders the collection subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/spring \/ summer collection/i)).toBeInTheDocument()
  })

  it('CTA button has primary green styling', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /explore now/i })
    expect(cta.className).toContain('bg-primary-400')
  })
})
