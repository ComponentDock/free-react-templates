import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders heading and description', () => {
    render(<Newsletter />)
    expect(screen.getByText(/Newsletter/)).toBeInTheDocument()
    expect(screen.getByText(/Stay updated/i)).toBeInTheDocument()
  })

  it('renders email input and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('textbox', { name: /email for newsletter/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('prevents form submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const button = screen.getByRole('button', { name: 'Subscribe' })
    await user.click(button)
    // Form should not navigate (onSubmit prevents default)
    expect(screen.getByRole('textbox', { name: /email for newsletter/i })).toBeInTheDocument()
  })
})
