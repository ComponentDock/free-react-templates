import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name and copyright', () => {
    render(<Footer />)

    expect(screen.getByText('Turfly')).toBeInTheDocument()
    expect(screen.getByText(new RegExp(`${new Date().getFullYear()} Turfly`))).toBeInTheDocument()
  })

  it('renders the Component Dock attribution link', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders service links', () => {
    render(<Footer />)

    expect(screen.getByText('Garden Care')).toBeInTheDocument()
    expect(screen.getByText('Lawn Mowing')).toBeInTheDocument()
    expect(screen.getByText('Lawn Treatment')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)

    expect(screen.getByText(/123 Greenway Blvd/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '(800) 555-1234' })).toHaveAttribute(
      'href',
      'tel:+18005551234',
    )
    expect(screen.getByRole('link', { name: 'info@turfly.com' })).toHaveAttribute(
      'href',
      'mailto:info@turfly.com',
    )
  })

  it('renders the newsletter form', () => {
    render(<Footer />)

    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('clears the newsletter email on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('')
  })
})
