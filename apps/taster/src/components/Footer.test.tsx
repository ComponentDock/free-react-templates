import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders about section, hours, and social links', () => {
    render(<Footer />)
    expect(screen.getByText('About Taster')).toBeInTheDocument()
    expect(screen.getByText('Lunch Service')).toBeInTheDocument()
    expect(screen.getByText('Dinner Service')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })

  it('has a Component Dock link in the copyright', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('rejects invalid email and accepts valid subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText(/enter email/i)
    const submit = screen.getByRole('button', { name: /subscribe/i })

    await user.type(input, 'bad-email')
    await user.click(submit)
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)

    await user.clear(input)
    await user.type(input, 'test@example.com')
    await user.click(submit)
    expect(screen.getByText(/thanks for subscribing/i)).toBeInTheDocument()
  })
})
