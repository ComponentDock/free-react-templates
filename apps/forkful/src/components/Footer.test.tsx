import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand name, contact info, and opening hours', () => {
    render(<Footer />)

    expect(screen.getAllByText('Forkful').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Opening Hours' })).toBeInTheDocument()

    expect(screen.getByText(/203 Fake St/)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@example.com')).toBeInTheDocument()
  })

  it('renders opening hours for all days', () => {
    render(<Footer />)

    expect(screen.getByText(/Monday: 9:00 - 24:00/)).toBeInTheDocument()
    expect(screen.getByText(/Tuesday: 9:00 - 24:00/)).toBeInTheDocument()
    expect(screen.getByText(/Wednesday: 9:00 - 24:00/)).toBeInTheDocument()
    expect(screen.getByText(/Thursday: 9:00 - 24:00/)).toBeInTheDocument()
    expect(screen.getByText(/Friday: 9:00 - 24:00/)).toBeInTheDocument()
    expect(screen.getByText(/Saturday: 9:00 - 24:00/)).toBeInTheDocument()
    expect(screen.getByText(/Sunday: 9:00 - 24:00/)).toBeInTheDocument()
  })

  it('includes a Component Dock link in the copyright bar', () => {
    render(<Footer />)

    expect(screen.getByText(/Copyright ©/)).toBeInTheDocument()
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
