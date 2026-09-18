import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading and subscription form', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe To Get Our Newsletter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Your Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('allows typing email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText('Enter Your Email')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('submits form', () => {
    render(<Newsletter />)
    const form = screen.getByPlaceholderText('Enter Your Email').closest('form')!
    fireEvent.submit(form)
  })
})
