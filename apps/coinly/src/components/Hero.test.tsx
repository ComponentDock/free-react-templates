import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, sub-copy, email input and Get Started CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Invest in Bitcoin/i })).toBeInTheDocument()
    expect(
      screen.getByText('Use modern progressive technologies of Bitcoin to earn money'),
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('renders the laptop mockup trading chart', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: 'Trading dashboard chart' })).toBeInTheDocument()
  })

  it('validates the email before accepting the lead', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const input = screen.getByPlaceholderText('Enter your email')

    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Get Started' }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
    expect(input).toHaveAttribute('aria-invalid', 'true')

    await user.clear(input)
    await user.type(input, 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Get Started' }))
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(input).toHaveAttribute('aria-invalid', 'false')
  })
})
