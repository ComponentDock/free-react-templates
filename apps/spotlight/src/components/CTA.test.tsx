import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the heading', () => {
    render(<CTA />)
    expect(screen.getByText("Let's get started. Create your account")).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<CTA />)
    expect(screen.getByText(/Join thousands of businesses/)).toBeInTheDocument()
  })

  it('renders the sign up button', () => {
    render(<CTA />)
    expect(screen.getByText('Sign Up')).toBeInTheDocument()
  })

  it('has correct link on sign up button', () => {
    render(<CTA />)
    const link = screen.getByText('Sign Up')
    expect(link).toHaveAttribute('href', '#')
  })
})
