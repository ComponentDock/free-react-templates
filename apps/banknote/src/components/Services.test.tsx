import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section title', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders 6 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Business Consulting')).toBeInTheDocument()
    expect(screen.getByText('Credit Card')).toBeInTheDocument()
    expect(screen.getByText('Income Monitoring')).toBeInTheDocument()
    expect(screen.getByText('Insurance Consulting')).toBeInTheDocument()
    expect(screen.getByText('Financial Investment')).toBeInTheDocument()
    expect(screen.getByText('Financial Management')).toBeInTheDocument()
  })

  it('has Learn More links', () => {
    render(<Services />)
    const links = screen.getAllByText('Learn More →')
    expect(links.length).toBe(6)
  })
})
