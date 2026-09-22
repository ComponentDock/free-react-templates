import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo and tagline', () => {
    render(<Footer />)
    expect(screen.getAllByText('Praxis').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Plastic Surgery')).toBeInTheDocument()
    expect(screen.getByText(/leading plastic surgery clinic/)).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('+34 586 778 8892')).toBeInTheDocument()
    expect(screen.getByText('info@praxisclinic.com')).toBeInTheDocument()
  })

  it('renders locations', () => {
    render(<Footer />)
    expect(screen.getByText('Miami')).toBeInTheDocument()
    expect(screen.getByText('45 Creekside Av, FL 931')).toBeInTheDocument()
    expect(screen.getByText('Los Angeles')).toBeInTheDocument()
  })

  it('renders opening hours', () => {
    render(<Footer />)
    expect(screen.getByText('Monday:')).toBeInTheDocument()
    expect(screen.getAllByText('8:00am – 9:00pm').length).toBe(4)
    expect(screen.getByText('Friday:')).toBeInTheDocument()
    expect(screen.getByText('8:00am – 7:00pm')).toBeInTheDocument()
  })

  it('renders Component Dock link in copyright', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders footer nav links', () => {
    render(<Footer />)
    for (const link of ['Home', 'About', 'Services', 'News', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders social icons', () => {
    render(<Footer />)
    for (const label of ['Instagram', 'Facebook', 'Twitter']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
