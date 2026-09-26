import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the copyright year', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument()
  })

  it('renders Recent Photos heading', () => {
    render(<Footer />)
    expect(screen.getByText('Recent Photos')).toBeInTheDocument()
  })

  it('renders Archives heading', () => {
    render(<Footer />)
    expect(screen.getByText('Archives')).toBeInTheDocument()
  })

  it('renders the contact section heading', () => {
    render(<Footer />)
    expect(screen.getByText('Have a Questions?')).toBeInTheDocument()
  })

  it('renders the address', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St/)).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<Footer />)
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
  })

  it('renders the email', () => {
    render(<Footer />)
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('renders archive month links', () => {
    render(<Footer />)
    expect(screen.getByText(/November 2024/)).toBeInTheDocument()
    expect(screen.getByText(/October 2024/)).toBeInTheDocument()
  })

  it('renders recent photo thumbnails', () => {
    render(<Footer />)
    const images = screen.getAllByAltText('Recent photo')
    expect(images).toHaveLength(6)
  })
})
