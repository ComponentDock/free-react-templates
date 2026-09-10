import { render, screen } from '@testing-library/react'
import { BankLoan } from './BankLoan'

describe('BankLoan', () => {
  it('renders heading', () => {
    render(<BankLoan />)
    expect(screen.getByText('Bank Loan')).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<BankLoan />)
    expect(screen.getByText('Banking Consultation')).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<BankLoan />)
    expect(screen.getByText('Apply Now')).toBeInTheDocument()
  })

  it('renders an image', () => {
    render(<BankLoan />)
    expect(screen.getByAltText('Bank loan services')).toBeInTheDocument()
  })
})
