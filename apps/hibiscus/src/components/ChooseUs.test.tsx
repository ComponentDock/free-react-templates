import { render, screen } from '@testing-library/react'
import { ChooseUs } from './ChooseUs'

describe('ChooseUs', () => {
  it('renders section heading', () => {
    render(<ChooseUs />)
    expect(screen.getByText(/Why You Should Choose Hibiscus Hotel/)).toBeInTheDocument()
  })

  it('renders the Why Choose Us subheading', () => {
    render(<ChooseUs />)
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
  })

  it('renders all 4 feature highlights', () => {
    render(<ChooseUs />)
    expect(screen.getByText('24/7 Reception')).toBeInTheDocument()
    expect(screen.getByText('Security')).toBeInTheDocument()
    expect(screen.getByText('Free Wi-Fi')).toBeInTheDocument()
    expect(screen.getByText('Premium Service')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<ChooseUs />)
    expect(screen.getByText(/luxury hospitality/)).toBeInTheDocument()
  })

  it('renders the parallax background image', () => {
    render(<ChooseUs />)
    const container = screen.getByText(/Why You Should Choose/).closest('section')
    expect(container).toBeInTheDocument()
  })

  it('renders the feature image', () => {
    render(<ChooseUs />)
    const img = screen.getByAltText('Hibiscus Hotel')
    expect(img).toBeInTheDocument()
  })
})
