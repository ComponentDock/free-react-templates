import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the hotel name', () => {
    render(<Footer />)
    expect(screen.getByText('Hotelbreeze')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Rooms')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(/Hotelbreeze\. All rights reserved/)).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Footer className="custom-class" />)
    expect(screen.getByText('Hotelbreeze').closest('footer')).toHaveClass('custom-class')
  })
})
