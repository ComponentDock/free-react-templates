import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroBanner } from './HeroBanner'

describe('HeroBanner', () => {
  it('renders the main heading', () => {
    render(<HeroBanner />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Making Health Care Better Together',
    )
  })

  it('renders both CTA buttons', () => {
    render(<HeroBanner />)

    expect(screen.getByRole('link', { name: /make an appointment/i })).toHaveAttribute(
      'href',
      '#appointment',
    )
    expect(screen.getByRole('link', { name: /view department/i })).toHaveAttribute(
      'href',
      '#services',
    )
  })

  it('has the hero banner aria label', () => {
    render(<HeroBanner />)

    expect(screen.getByRole('region', { name: /hero banner/i })).toBeInTheDocument()
  })
})
