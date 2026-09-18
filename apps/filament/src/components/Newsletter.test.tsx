import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the newsletter heading', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { name: /Subscribe for our Newsletter/i }),
    ).toBeInTheDocument()
  })

  it('renders the spam notice', () => {
    render(<Newsletter />)
    expect(screen.getByText(/won't send any kind of spam/i)).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
  })

  it('renders Get Started button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })

  it('submits the form without errors', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByRole('textbox', { name: /email address/i })
    const button = screen.getByRole('button', { name: /get started/i })
    await user.type(input, 'test@example.com')
    await user.click(button)
    expect(input).toHaveValue('test@example.com')
  })

  it('applies custom className', () => {
    render(<Newsletter className="custom-class" />)
    expect(screen.getByRole('region', { name: /newsletter/i })).toHaveClass('custom-class')
  })
})
