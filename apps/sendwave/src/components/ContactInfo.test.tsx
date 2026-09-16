import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactInfo } from './ContactInfo'

describe('ContactInfo', () => {
  it('renders address, email, and phone labels', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/address:/i)).toBeInTheDocument()
    expect(screen.getByText(/email:/i)).toBeInTheDocument()
    expect(screen.getByText(/phone:/i)).toBeInTheDocument()
  })

  it('renders address text', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
  })

  it('renders email as a mailto link', () => {
    render(<ContactInfo />)
    const emailLink = screen.getByRole('link', { name: /info@yoursite.com/ })
    expect(emailLink).toHaveAttribute('href', 'mailto:info@yoursite.com')
  })

  it('renders phone as a tel link', () => {
    render(<ContactInfo />)
    const phoneLink = screen.getByRole('link', { name: /\+ 1235 2355 98/ })
    expect(phoneLink).toHaveAttribute('href', 'tel:+123****5598')
  })

  it('renders all three info items in a row', () => {
    const { container } = render(<ContactInfo />)
    const items = container.querySelectorAll('.flex-1')
    expect(items.length).toBe(3)
  })
})
