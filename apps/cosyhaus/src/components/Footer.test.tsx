import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name, navigation links, social links and addresses', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Cosyhaus/i })).toBeInTheDocument()
    for (const link of ['Home', 'About', 'Services', 'Gallery', 'Blog']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const social of ['Twitter', 'Facebook', 'Instagram']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByText('Japan')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('rejects an invalid email and confirms a valid subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('Your email')
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
