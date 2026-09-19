import { render, screen } from '@testing-library/react'
import { Footer } from './components/Footer'

describe('Footer', () => {
  it('renders "Our Mission" column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /our mission/i })).toBeInTheDocument()
  })

  it('renders "Quick Links" column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /quick links/i })).toBeInTheDocument()
  })

  it('renders all quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Product')).toBeInTheDocument()
    expect(screen.getByText('Brand')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders "Gallery" column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /gallery/i })).toBeInTheDocument()
  })

  it('renders "Contact Us" column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
  })

  it('renders contact details', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Fashion Ave/)).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('hello@fragrance.style')).toBeInTheDocument()
  })

  it('renders footer bottom with Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/Fragrance\. All rights reserved/)).toBeInTheDocument()
  })

  it('renders 6 gallery thumbnails', () => {
    render(<Footer />)
    const images = screen.getAllByAltText('Gallery thumbnail')
    expect(images).toHaveLength(6)
  })
})
