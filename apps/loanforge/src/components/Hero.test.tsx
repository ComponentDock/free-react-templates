import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and CTA button', () => {
    render(<Hero />)

    expect(screen.getByText(/Achieve your financial goal/i)).toBeInTheDocument()
    expect(screen.getByText(/Small Business Loans/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /apply for loan/i })).toBeInTheDocument()
  })

  it('displays highlight items in the slider footer', () => {
    render(<Hero />)

    expect(screen.getByText(/Quick & Easy Loan Approvals/i)).toBeInTheDocument()
    expect(screen.getByText(/Dedicated Support Team/i)).toBeInTheDocument()
    expect(screen.getByText(/Flexible Repayment Options/i)).toBeInTheDocument()
  })

  it('has a hero illustration image', () => {
    render(<Hero />)

    const heroImg = screen.getByAltText('Finance illustration')
    expect(heroImg).toBeInTheDocument()
  })
})
