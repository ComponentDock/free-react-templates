import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BankLoan } from './BankLoan'

describe('BankLoan', () => {
  it('renders the bank loan heading and items', () => {
    render(<BankLoan />)
    const headings = screen.getAllByRole('heading', { name: /Bank Loan/i })
    expect(headings.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Banking Consultation')).toBeInTheDocument()
  })

  it('shows the loan image', () => {
    render(<BankLoan />)
    expect(screen.getByRole('img', { name: /Bank loan consultation/i })).toBeInTheDocument()
  })
})
