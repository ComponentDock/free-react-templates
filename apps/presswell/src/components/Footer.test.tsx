import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText(/Presswell/)).toBeInTheDocument()
  })

  it('renders service links', () => {
    render(<Footer />)
    expect(screen.getByText('— Dry Cleaning')).toBeInTheDocument()
    expect(screen.getByText('— Wash & Fold')).toBeInTheDocument()
    expect(screen.getByText('— Ironing Services')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('(90) 898 789-8957')).toBeInTheDocument()
    expect(screen.getByText('presswell@laundry.com')).toBeInTheDocument()
  })

  it('links to componentdock.com', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the Component Dock copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Made with/)).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })
})
