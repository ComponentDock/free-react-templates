import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactInfo } from './ContactInfo'

describe('ContactInfo', () => {
  it('renders the Contact information heading', () => {
    render(<ContactInfo />)
    expect(screen.getByRole('heading', { name: /contact information/i })).toBeInTheDocument()
  })

  it('renders the subtext about being open for suggestions', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/we're open for any suggestion/i)).toBeInTheDocument()
  })

  it('renders address with icon', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/1235 2355 98/)).toBeInTheDocument()
  })

  it('renders email address', () => {
    render(<ContactInfo />)
    expect(screen.getByText('info@yoursite.com')).toBeInTheDocument()
  })

  it('renders website', () => {
    render(<ContactInfo />)
    expect(screen.getByText('yoursite.com')).toBeInTheDocument()
  })

  it('renders four icon containers', () => {
    const { container } = render(<ContactInfo />)
    const icons = container.querySelectorAll('.lucide')
    expect(icons.length).toBe(4)
  })

  it('renders contact items with labels', () => {
    render(<ContactInfo />)
    expect(screen.getByText('Address:')).toBeInTheDocument()
    expect(screen.getByText('Phone:')).toBeInTheDocument()
    expect(screen.getByText('Email:')).toBeInTheDocument()
    expect(screen.getByText('Website:')).toBeInTheDocument()
  })
})
