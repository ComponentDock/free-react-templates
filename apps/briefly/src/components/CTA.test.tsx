import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the heading', () => {
    render(<CTA />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /Get to Know Project Estimate/,
    )
  })

  it('renders the description', () => {
    render(<CTA />)
    expect(screen.getByText(/There is a moment in the life/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<CTA />)
    expect(screen.getByRole('link', { name: 'Get Free Estimate' })).toBeInTheDocument()
  })
})
