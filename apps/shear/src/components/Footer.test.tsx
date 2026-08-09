import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders about text, quick links, and the newsletter field', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })

  it('renders the social links', () => {
    render(<Footer />)
    for (const label of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('submits the newsletter form without reloading', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(input).toHaveValue('ada@example.com')
  })

  it('shows the copyright bar with the current year', () => {
    render(<Footer />)
    expect(
      screen.getByText(
        new RegExp(`Copyright © ${new Date().getFullYear()} All rights reserved \\| Shear`),
      ),
    ).toBeInTheDocument()
  })
})
