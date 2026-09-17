import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactInfo } from './ContactInfo'

describe('ContactInfo', () => {
  it('renders dark background panel', () => {
    const { container } = render(<ContactInfo />)
    const panel = container.firstElementChild
    expect(panel).toHaveClass('bg-[#1a1a2e]')
  })

  it('renders address section with MapPin icon and heading and address text', () => {
    render(<ContactInfo />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText(/media center 8th floor/i)).toBeInTheDocument()
  })

  it('renders phone section with Phone icon and heading and green phone link', () => {
    render(<ContactInfo />)
    expect(screen.getByText('Lets Talk')).toBeInTheDocument()
    const phoneLink = screen.getByRole('link', { name: '+1 800 1236879' })
    expect(phoneLink).toBeInTheDocument()
    expect(phoneLink).toHaveAttribute('href', 'tel:+18001236879')
  })

  it('renders email section with Mail icon and heading and green email link', () => {
    render(<ContactInfo />)
    expect(screen.getByText('General Support')).toBeInTheDocument()
    const emailLink = screen.getByRole('link', { name: 'contact@example.com' })
    expect(emailLink).toBeInTheDocument()
    expect(emailLink).toHaveAttribute('href', 'mailto:contact@example.com')
  })
})
