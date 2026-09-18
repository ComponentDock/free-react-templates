import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders subscriber count and tagline', () => {
    render(<Newsletter />)
    expect(screen.getByText('5039')).toBeInTheDocument()
    expect(screen.getByText('Subscribers')).toBeInTheDocument()
    expect(screen.getByText(/Get all latest content/)).toBeInTheDocument()
  })

  it('renders email input and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('shows thank you message and changes button text on submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByLabelText('Email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Thank you for subscribing!')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribed!' })).toBeInTheDocument()
  })

  it('does not submit with empty email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.queryByText('Thank you for subscribing!')).not.toBeInTheDocument()
  })
})
