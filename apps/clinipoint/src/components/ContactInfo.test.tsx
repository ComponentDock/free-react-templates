import { render, screen } from '@testing-library/react'
import ContactInfo from './ContactInfo'

describe('ContactInfo', () => {
  it('renders 3 contact cards', () => {
    render(<ContactInfo />)
    expect(screen.getByText('Working Hours')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()
  })

  it('renders hours information', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/Monday - Friday 08:00 - 21:00/)).toBeInTheDocument()
    expect(screen.getByText(/Saturday and Sunday - CLOSED/)).toBeInTheDocument()
  })

  it('renders phone numbers', () => {
    render(<ContactInfo />)
    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
    expect(screen.getByText('+1 234 567 891')).toBeInTheDocument()
  })

  it('renders address', () => {
    render(<ContactInfo />)
    expect(screen.getByText('123 Medical Center Drive')).toBeInTheDocument()
    expect(screen.getByText('New York, NY 10001')).toBeInTheDocument()
  })
})
