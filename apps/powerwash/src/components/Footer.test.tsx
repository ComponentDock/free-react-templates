import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByText('PowerWash')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders quick links', () => {
    render(<Footer />)
    const links = ['Home', 'About', 'Services', 'Works', 'Blog', 'Contact']
    links.forEach((l) => {
      expect(screen.getAllByText(l).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('renders latest news section', () => {
    render(<Footer />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders copyright', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
