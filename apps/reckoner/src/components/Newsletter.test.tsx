import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)

    expect(screen.getByRole('heading', { name: 'Subscribe to Our Newsletter' })).toBeInTheDocument()
    expect(screen.getByText('Stay Updated')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Newsletter />)

    expect(screen.getByText(/Get the latest updates, financial tips/)).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Newsletter />)

    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
  })

  it('renders the subscribe button', () => {
    render(<Newsletter />)

    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('submits the form and clears the email input', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByRole('textbox', { name: /email address/i })
    await user.type(input, 'hello@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(input).toHaveValue('')
  })

  it('has proper ARIA attributes', () => {
    render(<Newsletter />)

    const section = screen
      .getByRole('heading', { name: 'Subscribe to Our Newsletter' })
      .closest('section')
    expect(section).toHaveAttribute('id', 'contact')
  })
})
