import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Port')).toBeInTheDocument()
    expect(screen.getByText('light')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders useful links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Amenities' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Gift Card' })).toBeInTheDocument()
  })

  it('renders privacy links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Career' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St/i)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('renders contact section heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /have a questions/i })).toBeInTheDocument()
  })
})
