import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe to our newsletter')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<Newsletter />)
    expect(screen.getByText(/Cursus, enim a ultrices/)).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('allows typing email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByRole('textbox', { name: /email address/i })
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    await user.type(screen.getByRole('textbox', { name: /email address/i }), 'test@test.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
  })
})
