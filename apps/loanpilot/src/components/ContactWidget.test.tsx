import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactWidget } from './ContactWidget'

describe('ContactWidget', () => {
  it('renders both office city headings', () => {
    render(<ContactWidget />)
    expect(screen.getByRole('heading', { level: 3, name: 'New York' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'New Jersey' })).toBeInTheDocument()
  })

  it('renders both office addresses', () => {
    render(<ContactWidget />)
    expect(screen.getByText(/203 Fake St./i)).toBeInTheDocument()
    expect(screen.getByText(/198 West 21th Street/i)).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<ContactWidget />)
    expect(screen.getByText('+1235 235 598')).toBeInTheDocument()
  })

  it('renders the phone link with correct href', () => {
    render(<ContactWidget />)
    const phoneLink = screen.getByText('+1235 235 598')
    expect(phoneLink).toHaveAttribute('href', 'tel:+1235235598')
  })

  it('renders the Phone heading', () => {
    render(<ContactWidget />)
    expect(screen.getByRole('heading', { level: 3, name: 'Phone' })).toBeInTheDocument()
  })

  it('renders the background image', () => {
    render(<ContactWidget />)
    const section = document.querySelector('section')
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })
  })
})
