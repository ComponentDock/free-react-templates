import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { name: /Subscribe to our Newsletter/i }),
    ).toBeInTheDocument()
  })

  it('renders the email input and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('textbox', { name: /Email address/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument()
  })

  it('shows confirmation after subscribing with valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByRole('textbox', { name: /Email address/i })
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(screen.getByText(/Thank you for subscribing/i)).toBeInTheDocument()
  })

  it('does not show confirmation when submitting empty email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    // Submit without typing anything
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(screen.queryByText(/Thank you for subscribing/i)).not.toBeInTheDocument()
  })

  it('renders the background image', () => {
    render(<Newsletter />)
    const img = document.querySelector('img[src*="picsum.photos"]')
    expect(img).toBeInTheDocument()
  })
})
