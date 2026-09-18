import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactInfo } from './ContactInfo'

describe('ContactInfo', () => {
  it('renders the Contact Info heading', () => {
    render(<ContactInfo />)
    expect(screen.getByRole('heading', { level: 2, name: /contact info/i })).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders London city heading', () => {
    render(<ContactInfo />)
    expect(screen.getByRole('heading', { level: 3, name: /london/i })).toBeInTheDocument()
  })

  it('renders New York city heading', () => {
    render(<ContactInfo />)
    expect(screen.getByRole('heading', { level: 3, name: /new york/i })).toBeInTheDocument()
  })

  it('renders address for London', () => {
    render(<ContactInfo />)
    const addresses = screen.getAllByText(/34 Street Name/)
    expect(addresses.length).toBeGreaterThanOrEqual(1)
  })

  it('renders phone for London', () => {
    render(<ContactInfo />)
    const phones = screen.getAllByText(/\+1 \(222\) 345 6789/)
    expect(phones.length).toBeGreaterThanOrEqual(1)
  })

  it('renders email for London', () => {
    render(<ContactInfo />)
    const emails = screen.getAllByText(/info@mywebsite\.com/)
    expect(emails.length).toBeGreaterThanOrEqual(1)
  })

  it('renders two cities side by side', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/london/i)).toBeInTheDocument()
    expect(screen.getByText(/new york/i)).toBeInTheDocument()
  })
})
