import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Component Dock attribution', () => {
    render(<Footer />)
    expect(screen.getByText(/component dock/i)).toBeInTheDocument()
  })

  it('renders Verdant logo', () => {
    render(<Footer />)
    expect(screen.getByText('Verdant')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Link')).toBeInTheDocument()
    expect(screen.getByText('Purchase')).toBeInTheDocument()
    expect(screen.getByText('FAQs')).toBeInTheDocument()
  })

  it('renders best sellers', () => {
    render(<Footer />)
    expect(screen.getByText('Best Seller')).toBeInTheDocument()
    expect(screen.getByText('Cactus Flower')).toBeInTheDocument()
    expect(screen.getByText('Tulip Flower')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/505 Silk Rd/i)).toBeInTheDocument()
    expect(screen.getByText(/address:/i)).toBeInTheDocument()
    expect(screen.getByText(/phone:/i)).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/twitter/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/instagram/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument()
  })

  it('renders footer bottom nav', () => {
    render(<Footer />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })
})
