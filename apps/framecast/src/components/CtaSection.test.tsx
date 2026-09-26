import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CtaSection } from './CtaSection'

describe('CtaSection', () => {
  it('renders the call-to-action heading', () => {
    render(<CtaSection />)
    expect(screen.getByText(/Let's Discuss Your Projects/)).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<CtaSection />)
    expect(screen.getByText(/Ready to bring your vision to life/)).toBeInTheDocument()
  })

  it('renders the Start Talking button', () => {
    render(<CtaSection />)
    expect(screen.getByRole('link', { name: 'Start Talking' })).toBeInTheDocument()
  })

  it('has a brand-colored background', () => {
    const { container } = render(<CtaSection />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-brand')
  })
})
