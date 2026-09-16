import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the heading', () => {
    render(<CTA />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Want To Work With Us/i)
  })

  it('renders the contact button', () => {
    render(<CTA />)
    expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument()
  })

  it('has a dark background section', () => {
    render(<CTA />)
    const section = screen.getByRole('region')
    expect(section.className).toContain('bg-navy')
  })
})
