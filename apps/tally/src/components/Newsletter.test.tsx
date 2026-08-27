import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the newsletter heading', () => {
    render(<Newsletter />)
    expect(screen.getByText(/subscribe to our newsletter/i)).toBeInTheDocument()
  })

  it('renders email input field', () => {
    render(<Newsletter />)
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('has dark background styling', () => {
    render(<Newsletter />)
    const section = screen.getByRole('region', { name: /newsletter/i })
    expect(section).toHaveClass('bg-dark')
  })

  it('submits newsletter form and clears email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const emailInput = screen.getByRole('textbox', { name: /email/i })
    await user.type(emailInput, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(emailInput).toHaveValue('')
  })
})
