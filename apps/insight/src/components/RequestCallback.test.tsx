import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RequestCallback } from './RequestCallback'

describe('RequestCallback', () => {
  it('renders heading and form inputs', () => {
    render(<RequestCallback />)
    expect(screen.getByText('Request for Call Back')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<RequestCallback />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('allows typing in inputs', async () => {
    const user = userEvent.setup()
    render(<RequestCallback />)
    const nameInput = screen.getByPlaceholderText('Your Name')
    const phoneInput = screen.getByPlaceholderText('Phone Number')
    await user.type(nameInput, 'John')
    await user.type(phoneInput, '123456')
    expect(nameInput).toHaveValue('John')
    expect(phoneInput).toHaveValue('123456')
  })

  it('submits form without error', async () => {
    const user = userEvent.setup()
    render(<RequestCallback />)
    await user.click(screen.getByRole('button', { name: /submit/i }))
  })
})
