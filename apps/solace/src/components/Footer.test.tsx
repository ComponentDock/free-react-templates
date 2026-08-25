import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand heading', () => {
    render(<Footer />)
    expect(screen.getByText('Solace Hotel Booking')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('+1 234 567 8901')).toBeInTheDocument()
    expect(screen.getByText('info@solace.com')).toBeInTheDocument()
  })

  it('renders services list', () => {
    render(<Footer />)
    expect(screen.getByText('Free Wifi')).toBeInTheDocument()
    expect(screen.getByText('Swimming Pool')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Rooms')).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
  })

  it('has contact section id', () => {
    const { container } = render(<Footer />)
    expect(container.querySelector('#contact')).toBeInTheDocument()
  })

  it('does not mention ColorLib', () => {
    const { container } = render(<Footer />)
    expect(container.innerHTML).not.toMatch(/colorlib/i)
  })
})
