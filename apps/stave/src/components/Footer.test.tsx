import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link with correct href', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /more templates at component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the copyright year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('shows the template name', () => {
    render(<Footer />)
    expect(screen.getByText(/Stave —/)).toBeInTheDocument()
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('hello@stave.com')).toBeInTheDocument()
    expect(screen.getByText('123 Music Lane, Soundville')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://facebook.com',
    )
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute(
      'href',
      'https://twitter.com',
    )
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
      'href',
      'https://instagram.com',
    )
  })

  it('renders section headings', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
  })

  it('submits the newsletter form without navigating', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(input).toHaveValue('test@example.com')
  })
})
