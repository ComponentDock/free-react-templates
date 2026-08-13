import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the Top Products and Contact Us columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Top Products' })).toBeInTheDocument()
    for (const link of [
      'Managed Website',
      'Manage Reputation',
      'Power Tools',
      'Marketing Service',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByText(/012-6532-568-97468/)).toBeInTheDocument()
    expect(screen.getByText(/emergency@sana.health/)).toBeInTheDocument()
  })

  it('shows the newsletter signup and links to Component Dock', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'jane@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/subscribed/i)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('rejects an invalid email with an error message', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByText(/valid email/i)).toBeInTheDocument()
  })
})
