import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { FOOTER_ADDRESS, FOOTER_PHONES } from '../data'

describe('Footer', () => {
  it('renders About Us, Contact us, Newsletter columns, and social squares', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()

    expect(screen.getByText(FOOTER_ADDRESS)).toBeInTheDocument()
    FOOTER_PHONES.forEach((phone) => {
      expect(screen.getByText(phone)).toBeInTheDocument()
    })

    const socials = ['Facebook', 'Twitter', 'Instagram', 'Skype']
    socials.forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    })

    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )

    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`Copyright © ${year}`))).toBeInTheDocument()
  })

  it('confirms the newsletter subscription without reloading the page', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'member@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))

    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing/i)
    // The form swaps to a confirmation message, so the input unmounts.
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
