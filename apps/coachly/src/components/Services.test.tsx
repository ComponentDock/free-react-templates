import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all 6 services', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Business Consulting')).toBeInTheDocument()
    expect(screen.getByText('Market Analysis')).toBeInTheDocument()
    expect(screen.getByText('User Monitoring')).toBeInTheDocument()
    expect(screen.getByText('Insurance Consulting')).toBeInTheDocument()
    expect(screen.getByText('Financial Investment')).toBeInTheDocument()
    expect(screen.getByText('Financial Management')).toBeInTheDocument()
  })
})
