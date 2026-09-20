import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaSection } from './CtaSection'

describe('CtaSection', () => {
  it('renders heading', () => {
    render(<CtaSection />)
    expect(screen.getByText(/get ticket now/i)).toBeInTheDocument()
  })

  it('renders Buy Ticket button', () => {
    render(<CtaSection />)
    expect(screen.getByRole('link', { name: /buy ticket/i })).toBeInTheDocument()
  })

  it('has parallax background', () => {
    const { container } = render(<CtaSection />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-fixed')
  })
})
