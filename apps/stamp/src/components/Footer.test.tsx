import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/ })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('+02 - 32 365 2654')).toBeInTheDocument()
    expect(screen.getByText('ariclaw@law.com')).toBeInTheDocument()
    expect(screen.getByText('stamp.com')).toBeInTheDocument()
  })

  it('renders services links', () => {
    render(<Footer />)
    expect(screen.getByText('Car accident')).toBeInTheDocument()
    expect(screen.getByText('Personal injury')).toBeInTheDocument()
    expect(screen.getByText('Family law')).toBeInTheDocument()
  })

  it('renders the Stamp brand', () => {
    render(<Footer />)
    expect(screen.getAllByText('Stamp').length).toBeGreaterThanOrEqual(1)
  })

  it('renders gallery images', () => {
    render(<Footer />)
    const images = screen.getAllByAltText(/Gallery/)
    expect(images.length).toBe(6)
  })
})
