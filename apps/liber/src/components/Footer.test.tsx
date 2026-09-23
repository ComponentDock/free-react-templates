import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name, navigation links, and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Liber/i })).toBeInTheDocument()
    for (const link of ['Home', 'About', 'Features', 'Pricing', 'Courses']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('rejects an invalid email and confirms a valid subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(/Email Address/i)
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
