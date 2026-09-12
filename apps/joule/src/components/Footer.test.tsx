import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About Us column', () => {
    render(<Footer />)
    const aboutHeadings = screen.getAllByText('About Us')
    expect(aboutHeadings.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Categories column', () => {
    render(<Footer />)
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getByText('Hot Deals')).toBeInTheDocument()
    expect(screen.getByText('Laptops')).toBeInTheDocument()
  })

  it('renders Information column', () => {
    render(<Footer />)
    expect(screen.getByText('Information')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument()
  })

  it('renders Service column', () => {
    render(<Footer />)
    expect(screen.getByText('Service')).toBeInTheDocument()
    expect(screen.getByText('My Account')).toBeInTheDocument()
    expect(screen.getByText('View Cart')).toBeInTheDocument()
    expect(screen.getByText('Track My Order')).toBeInTheDocument()
  })

  it('renders company contact info', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Commerce St/)).toBeInTheDocument()
    expect(screen.getByText(/\+1 \(234\) 567 890/)).toBeInTheDocument()
    expect(screen.getByText(/shop@joule.com/)).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('has dark background', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    const mainFooter = footer?.querySelector('.bg-dark-bg')
    expect(mainFooter).toBeInTheDocument()
  })

  it('bottom footer has darker background', () => {
    const { container } = render(<Footer />)
    const bottom = container.querySelector('.bg-darker-bg')
    expect(bottom).toBeInTheDocument()
  })
})
