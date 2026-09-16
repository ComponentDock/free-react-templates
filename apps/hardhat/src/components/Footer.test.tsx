import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Quick Links, Contact Info, Newsletter, and Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()

    expect(screen.getByText('+123 456-7890')).toBeInTheDocument()
    expect(screen.getByText('info@hardhat.com')).toBeInTheDocument()

    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dockLink).toHaveAttribute('target', '_blank')
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

    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()} Hardhat`)),
    ).toBeInTheDocument()
  })
})
