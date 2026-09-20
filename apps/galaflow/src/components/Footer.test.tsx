import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('GalaFlow')).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders quick links in the Quick Links section', () => {
    render(<Footer />)
    const quickLinksHeading = screen.getByText('Quick Links')
    const list = quickLinksHeading.closest('div')!.querySelector('ul')!
    for (const link of ['Home', 'About', 'Programs', 'Speakers', 'Contact']) {
      expect(list).toHaveTextContent(link)
    }
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)
    const socialLinks = screen.getAllByLabelText(/social link/i)
    expect(socialLinks).toHaveLength(4)
  })

  it('has a footer landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('handles form submission without page reload', () => {
    render(<Footer />)
    const form = screen.getByLabelText(/email/i).closest('form')!
    fireEvent.submit(form)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })
})
