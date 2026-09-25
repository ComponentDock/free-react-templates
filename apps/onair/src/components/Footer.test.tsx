import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand logo', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /OnAir/ })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/Amazing Valley/)).toBeInTheDocument()
    expect(screen.getByText('+11 123 4567890')).toBeInTheDocument()
    expect(screen.getByText('info@onair.com')).toBeInTheDocument()
  })

  it('renders Twitter Feed heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: /Twitter Feed/ })).toBeInTheDocument()
  })

  it('renders Instagram heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: /Instagram/ })).toBeInTheDocument()
  })

  it('credits Component Dock in the copyright bar', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
  })
})
