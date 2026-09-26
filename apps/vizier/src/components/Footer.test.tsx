import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer with logo and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByText('Vizier')).toBeInTheDocument()
    const cdLink = screen.getByText('Component Dock')
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('+01-3-8888-6868')).toBeInTheDocument()
    expect(screen.getByText(/40 Baria Street/)).toBeInTheDocument()
  })

  it('renders Our Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Our Links')).toBeInTheDocument()
    expect(screen.getByText('New Faces')).toBeInTheDocument()
    // "Contact" appears in both nav links and section heading — use getAllByText
    const contacts = screen.getAllByText('Contact')
    expect(contacts.length).toBeGreaterThanOrEqual(2)
  })
})
