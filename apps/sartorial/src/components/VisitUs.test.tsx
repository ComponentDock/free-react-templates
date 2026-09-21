import { render, screen } from '@testing-library/react'
import { VisitUs } from './VisitUs'

describe('VisitUs', () => {
  it('renders section heading', () => {
    render(<VisitUs />)
    expect(screen.getByRole('heading', { level: 2, name: 'Visit Our Tailor' })).toBeInTheDocument()
  })

  it('renders address', () => {
    render(<VisitUs />)
    expect(screen.getByText('71 Madison Ave')).toBeInTheDocument()
    expect(screen.getByText('10013 New York')).toBeInTheDocument()
  })

  it('renders phone numbers', () => {
    render(<VisitUs />)
    expect(screen.getByText('914-309-701')).toBeInTheDocument()
    expect(screen.getByText('914-329-211')).toBeInTheDocument()
  })

  it('renders email addresses', () => {
    render(<VisitUs />)
    expect(screen.getByText('reservations@sartorial.com')).toBeInTheDocument()
    expect(screen.getByText('office@sartorial.com')).toBeInTheDocument()
  })

  it('renders opening hours', () => {
    render(<VisitUs />)
    expect(screen.getByText('Mon – Thu: 10:00 am – 01:00 am')).toBeInTheDocument()
    expect(screen.getByText('Fri – Sun: 10:00 am – 02:00 am')).toBeInTheDocument()
  })

  it('renders map image', () => {
    render(<VisitUs />)
    expect(screen.getByAltText('Map location')).toBeInTheDocument()
  })
})
