import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo text', () => {
    render(<Footer />)
    expect(screen.getByText('Care')).toBeInTheDocument()
    expect(screen.getByText('Point')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<Footer />)
    expect(screen.getByText('Health Care Center')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('+45 677 8993000 223')).toBeInTheDocument()
    expect(screen.getByText('office@carepoint.com')).toBeInTheDocument()
    expect(screen.getByText(/Main Str. no 45-46/)).toBeInTheDocument()
  })

  it('renders Useful Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Useful Links')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('renders Recent News section', () => {
    render(<Footer />)
    expect(screen.getByText('Recent News')).toBeInTheDocument()
    expect(screen.getByText('Advances in modern healthcare technology')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
