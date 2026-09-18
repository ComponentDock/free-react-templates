import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBottom } from './CtaBottom'

describe('CtaBottom', () => {
  it('renders the heading', () => {
    render(<CtaBottom />)
    expect(screen.getByText('Ready to Start Your Journey?')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<CtaBottom />)
    expect(screen.getByText(/Contact us today for a free consultation/)).toBeInTheDocument()
  })

  it('renders the consultation link', () => {
    render(<CtaBottom />)
    const link = screen.getByRole('link', { name: 'Get Free Consultation' })
    expect(link).toHaveAttribute('href', '#contact')
  })
})
