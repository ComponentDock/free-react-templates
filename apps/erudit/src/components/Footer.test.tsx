import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText(/291 South 21th Street/)).toBeInTheDocument()
  })

  it('renders programs column', () => {
    render(<Footer />)
    expect(screen.getByText('Programs')).toBeInTheDocument()
    expect(screen.getByText('Diploma Degree')).toBeInTheDocument()
  })

  it('renders useful links column', () => {
    render(<Footer />)
    expect(screen.getByText('Useful Links')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders support column', () => {
    render(<Footer />)
    expect(screen.getByText('Support')).toBeInTheDocument()
    expect(screen.getByText('Documentation')).toBeInTheDocument()
  })

  it('renders recent posts column', () => {
    render(<Footer />)
    expect(screen.getByText('Recent Post')).toBeInTheDocument()
    expect(screen.getByText('Creating Mobile Apps')).toBeInTheDocument()
  })

  it('renders Component Dock link in copyright', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders back to top button', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /back to top/i })).toBeInTheDocument()
  })
})
