import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name, contact info, and newsletter', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Krypton' })).toBeInTheDocument()
    expect(screen.getByText(/San Francisco, CA/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /hello@krypton/ })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
  })

  it('clears newsletter email on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByPlaceholderText('Email Address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(input).toHaveValue('')
  })

  it('links to Component Dock', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the copyright year', () => {
    render(<Footer />)

    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
