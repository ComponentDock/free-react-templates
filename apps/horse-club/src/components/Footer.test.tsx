import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand blurb, contact details, newsletter form, and social links', () => {
    render(<Footer />)

    expect(screen.getByText('Horse Club')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()

    expect(screen.getByText('012-6532-568-9746')).toBeInTheDocument()
    expect(screen.getByText('012-6532-569-9748')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://facebook.com',
    )
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute(
      'href',
      'https://twitter.com',
    )
    expect(screen.getByRole('link', { name: 'Dribbble' })).toHaveAttribute(
      'href',
      'https://dribbble.com',
    )
    expect(screen.getByRole('link', { name: 'Behance' })).toHaveAttribute(
      'href',
      'https://behance.net',
    )

    expect(screen.getByText(/Copyright ©/)).toBeInTheDocument()
  })

  it('subscribes a newsletter email and clears the input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'rider@example.com')
    expect(input).toHaveValue('rider@example.com')

    await user.click(screen.getByRole('button', { name: /Subscribe/ }))
    expect(input).toHaveValue('')
  })
})
