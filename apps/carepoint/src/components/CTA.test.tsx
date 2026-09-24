import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the heading', () => {
    render(<CTA />)
    expect(screen.getByText('Need a personal health plan?')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<CTA />)
    expect(screen.getByText(/personalized health plan/)).toBeInTheDocument()
  })

  it('renders the Request a Plan button', () => {
    render(<CTA />)
    expect(screen.getByText('Request a Plan')).toHaveAttribute('href', '#appointment')
  })
})
