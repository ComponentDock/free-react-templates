import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading and email input', () => {
    render(<Newsletter />)
    expect(screen.getByText('Stay in touch with us')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders View Project button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /view project/i })).toBeInTheDocument()
  })

  it('allows typing in email field', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('clears email on form submit', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /view project/i }))
    // The button is outside the form, so submit is via Enter in the input
    await user.type(input, '{Enter}')
    expect(input).toHaveValue('')
  })
})
