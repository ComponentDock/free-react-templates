import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the CTA text', () => {
    render(<Footer />)
    expect(screen.getByText('Discuss your project now')).toBeInTheDocument()
  })

  it('renders the email address', () => {
    render(<Footer />)
    expect(screen.getByText('hello@workfolio.com')).toBeInTheDocument()
  })

  it('renders the download CV button', () => {
    render(<Footer />)
    expect(screen.getByText('Download CV')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Work')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
    expect(screen.getByLabelText('Website')).toBeInTheDocument()
  })

  it('renders the Component Dock copyright link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('has a dark navy-deep background', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('bg-navy-deep')
  })

  it('has the contact section id', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toHaveAttribute('id', 'contact')
  })
})
