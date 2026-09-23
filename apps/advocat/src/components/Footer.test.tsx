import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand and tagline', () => {
    render(<Footer />)
    expect(screen.getByText('Advocat')).toBeInTheDocument()
    expect(screen.getByText('Lawfirm Agency')).toBeInTheDocument()
  })

  it('renders practice area links', () => {
    render(<Footer />)
    expect(screen.getByText('Bank & Financial')).toBeInTheDocument()
    expect(screen.getByText('Personal Injury')).toBeInTheDocument()
    expect(screen.getByText('Family Law')).toBeInTheDocument()
    expect(screen.getByText('Criminal Law')).toBeInTheDocument()
    expect(screen.getByText('Business Law')).toBeInTheDocument()
  })

  it('renders business hours', () => {
    render(<Footer />)
    expect(screen.getByText('Monday – Friday')).toBeInTheDocument()
    expect(screen.getByText('9:00 AM – 6:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Saturday')).toBeInTheDocument()
    expect(screen.getByText('Sunday')).toBeInTheDocument()
    expect(screen.getByText('Closed')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St/)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@advocat.com')).toBeInTheDocument()
  })

  it('renders Component Dock link in copyright', () => {
    render(<Footer />)
    const dockLink = screen.getByRole('link', { name: /component dock/i })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })
})
