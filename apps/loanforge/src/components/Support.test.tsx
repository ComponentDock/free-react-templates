import { render, screen } from '@testing-library/react'
import { Support } from './Support'

describe('Support', () => {
  it('renders heading and checklist', () => {
    render(<Support />)

    expect(screen.getByText(/Why Choose Our Company/i)).toBeInTheDocument()
    expect(screen.getByText(/We Promise Sustainable Future/i)).toBeInTheDocument()
    expect(screen.getByText(/Trusted by over 10,000/i)).toBeInTheDocument()
    expect(screen.getByText(/Competitive interest rates/i)).toBeInTheDocument()
    expect(screen.getByText(/Quick approval within/i)).toBeInTheDocument()
    expect(screen.getByText(/Dedicated relationship manager/i)).toBeInTheDocument()
  })

  it('has the support image with badge', () => {
    render(<Support />)

    expect(screen.getByAltText('Loanforge team')).toBeInTheDocument()
    expect(screen.getByText(/Since 1992/)).toBeInTheDocument()
  })
})
