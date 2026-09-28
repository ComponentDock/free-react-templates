import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the Contact Us subtitle', () => {
    render(<Contact />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders the Get In Touch heading', () => {
    render(<Contact />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Contact />)
    expect(screen.getByText(/We would love to hear from you/)).toBeInTheDocument()
  })

  it('renders phone number as link', () => {
    render(<Contact />)
    const phone = screen.getByRole('link', { name: '045-548-14-97' })
    expect(phone).toHaveAttribute('href', 'tel:+10455481497')
  })

  it('renders address', () => {
    render(<Contact />)
    expect(screen.getByText('3685 Granville Lane')).toBeInTheDocument()
  })

  it('renders email link', () => {
    render(<Contact />)
    const email = screen.getByRole('link', { name: 'polenta@email.com' })
    expect(email).toHaveAttribute('href', 'mailto:polenta@email.com')
  })

  it('renders social follow links', () => {
    render(<Contact />)
    expect(screen.getByText('Follow Us:')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })
})
