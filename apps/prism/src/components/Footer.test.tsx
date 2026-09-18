import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the subscription form, footer columns, and Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Subscribe now/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'About Agency' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: 'Navigation Links' })).toHaveLength(2)
    expect(screen.getByRole('heading', { name: 'Instafeed' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('submits the subscription form and clears the email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByRole('textbox', { name: /email address/i })
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe now/i }))

    expect(input).toHaveValue('')
  })

  it('renders the copyright line with current year', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Prism`))).toBeInTheDocument()
  })

  it('renders footer navigation links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Managed Website' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Home' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('link', { name: 'Works & Builders' })).toBeInTheDocument()
  })
})
