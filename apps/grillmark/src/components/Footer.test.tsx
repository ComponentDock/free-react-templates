import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows footer columns and navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Top Products/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Quick Links/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Features/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Resources/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Newsletter/i })).toBeInTheDocument()
  })

  it('shows product and link items', () => {
    render(<Footer />)
    expect(screen.getByText('Grilled Steak')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Fresh Ingredients')).toBeInTheDocument()
    expect(screen.getByText('Menu')).toBeInTheDocument()
  })

  it('contains the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows social icons', () => {
    render(<Footer />)
    for (const social of ['Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('rejects an invalid email and confirms a valid subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText(/Your email/i)
    const submit = screen.getByRole('button', { name: /Subscribe/i })

    await user.type(input, 'not-an-email')
    await user.click(submit)
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)

    await user.clear(input)
    await user.type(input, 'jane@example.com')
    await user.click(submit)
    expect(screen.getByText(/Thanks for subscribing/i)).toBeInTheDocument()
  })
})
