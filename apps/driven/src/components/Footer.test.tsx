import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About Us, Contact Info, Important Link, and Newsletter columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Important Link' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()

    expect(screen.getByText('+8880 44338899')).toBeInTheDocument()
    expect(screen.getByText('info@driven.dev')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Search Domain' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'My Account' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('submits the newsletter form and clears the email input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByRole('textbox', { name: /email address/i })
    await user.type(input, 'hello@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))

    expect(input).toHaveValue('')
  })

  it('shows the current year in the copyright line', () => {
    render(<Footer />)

    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Driven`))).toBeInTheDocument()
  })
})
