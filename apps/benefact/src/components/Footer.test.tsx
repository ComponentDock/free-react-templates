import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the About Us text, Features links and social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    for (const label of ['Testimonials', 'Terms of Service', 'Privacy', 'Contact Us']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    for (const social of ['Facebook', 'Twitter', 'Instagram', 'Linkedin']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('links to Component Dock in the copyright bar', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()}`)),
    ).toBeInTheDocument()
  })

  it('rejects an invalid subscribe email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument()
    expect(screen.queryByText('Subscribed successfully!')).not.toBeInTheDocument()
  })

  it('subscribes with a valid email and clears the input', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'jane@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Subscribed successfully!')).toBeInTheDocument()
    expect(screen.queryByText('Enter a valid email address')).not.toBeInTheDocument()
    expect(input).toHaveValue('')
  })
})
