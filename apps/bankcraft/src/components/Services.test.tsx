import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders 6 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Business Consulting')).toBeInTheDocument()
    expect(screen.getByText('Credit Card Services')).toBeInTheDocument()
    expect(screen.getByText('Income Monitoring')).toBeInTheDocument()
    expect(screen.getByText('Insurance Consulting')).toBeInTheDocument()
    expect(screen.getByText('Financial Investment')).toBeInTheDocument()
    expect(screen.getByText('Financial Management')).toBeInTheDocument()
  })
})
