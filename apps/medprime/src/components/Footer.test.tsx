import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders logo and description', () => {
    render(<Footer />)

    expect(screen.getByText('Medprime')).toBeInTheDocument()
    expect(screen.getByText(/world-class healthcare services/)).toBeInTheDocument()
  })

  it('renders Services links', () => {
    render(<Footer />)

    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Cardiology')).toBeInTheDocument()
    expect(screen.getByText('Neurology')).toBeInTheDocument()
  })

  it('renders Company links', () => {
    render(<Footer />)

    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Our Doctors')).toBeInTheDocument()
  })

  it('renders Support links', () => {
    render(<Footer />)

    expect(screen.getByText('Support')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)

    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright year', () => {
    render(<Footer />)

    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
