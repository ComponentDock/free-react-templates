import { render, screen } from '@testing-library/react'
import { AboutFeatures } from './AboutFeatures'

describe('AboutFeatures', () => {
  it('renders the two feature items', () => {
    render(<AboutFeatures />)
    expect(screen.getByText('Bank Loan')).toBeInTheDocument()
    expect(screen.getByText('Banking Consultation')).toBeInTheDocument()
  })

  it('renders Learn More links', () => {
    render(<AboutFeatures />)
    const links = screen.getAllByText('Learn More →')
    expect(links.length).toBe(2)
  })
})
