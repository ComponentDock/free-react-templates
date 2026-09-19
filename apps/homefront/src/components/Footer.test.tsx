import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Homefront')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Footer />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
  })

  it('renders Buy section links', () => {
    render(<Footer />)
    expect(screen.getByText('Home For Sale')).toBeInTheDocument()
    expect(screen.getByText('Open Houses')).toBeInTheDocument()
    expect(screen.getByText('New Listing')).toBeInTheDocument()
    expect(screen.getByText('Recently Reduced')).toBeInTheDocument()
  })

  it('renders Sell section links', () => {
    render(<Footer />)
    expect(screen.getByText('Sell Your Home')).toBeInTheDocument()
    expect(screen.getByText('Get A Home Valuation')).toBeInTheDocument()
    expect(screen.getByText('Local Home Prices')).toBeInTheDocument()
    expect(screen.getByText('Guides & Rules')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St. Mountain View/)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('links to componentdock.com', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders current year in copyright', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
