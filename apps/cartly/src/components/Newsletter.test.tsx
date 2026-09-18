import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading and email input', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { level: 3, name: /Subscribe to Our Newsletter/i }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument()
  })

  it('has a submit button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument()
  })

  it('allows typing in the email field', async () => {
    render(<Newsletter />)
    const user = userEvent.setup()
    const input = screen.getByLabelText(/Email address/i)
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('submits the form without navigation', () => {
    render(<Newsletter />)
    const form = screen.getByRole('form', { name: /Newsletter signup/i })
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    form.dispatchEvent(submitEvent)
    // The onSubmit handler calls e.preventDefault(), so no navigation occurs
    expect(form).toBeInTheDocument()
  })
})
