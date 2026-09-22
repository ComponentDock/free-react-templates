import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroBanner } from './HeroBanner'

describe('HeroBanner', () => {
  beforeEach(() => {
    render(<HeroBanner />)
  })

  it('renders the main heading', () => {
    expect(
      screen.getByRole('heading', { level: 1, name: /we care for your health/i }),
    ).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    expect(
      screen.getByText(/providing compassionate and comprehensive healthcare/i),
    ).toBeInTheDocument()
  })

  it('renders the Get Started CTA button', () => {
    const cta = screen.getByRole('link', { name: /get started/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '#appointment')
  })

  it('has an aria-label on the section', () => {
    expect(screen.getByRole('region', { name: /hero banner/i })).toBeInTheDocument()
  })

  it('contains the ArrowRight icon (aria-hidden)', () => {
    const cta = screen.getByRole('link', { name: /get started/i })
    const icon = cta.querySelector('[aria-hidden="true"]')
    expect(icon).toBeInTheDocument()
  })
})
