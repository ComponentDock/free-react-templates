import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name, navigation links and instafeed', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Brushwork/i })).toBeInTheDocument()
    for (const link of ['Home', 'About', 'Services', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('img', { name: /Instagram post/i })).toHaveLength(6)
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

  it('links to Component Dock in the copyright bar', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('prevents default navigation on instafeed links', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const images = screen.getAllByRole('img', { name: /Instagram post/i })
    await user.click(images[0]!.closest('a')!)
    expect(images[0]).toBeInTheDocument()
  })
})
