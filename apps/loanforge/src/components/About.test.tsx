import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders about section with heading and text', () => {
    render(<About />)

    expect(screen.getByText(/About Our Company/i)).toBeInTheDocument()
    expect(screen.getByText(/Building a Brighter Financial Future/i)).toBeInTheDocument()
    expect(screen.getByText(/financial solutions that empower/i)).toBeInTheDocument()
    expect(screen.getByText(/transparent process/i)).toBeInTheDocument()
  })

  it('renders the Apply for Loan button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /apply for loan/i })).toBeInTheDocument()
  })

  it('has about images with alt text', () => {
    render(<About />)
    expect(screen.getByAltText('About Loanforge')).toBeInTheDocument()
    expect(screen.getByAltText('Loanforge office')).toBeInTheDocument()
  })
})
