import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the discount heading', () => {
    render(<Newsletter />)
    expect(screen.getByText(/sign up for discount/i)).toBeInTheDocument()
  })

  it('has an email input', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
  })

  it('has a sign up button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
  })

  it('prevents default form submission', () => {
    render(<Newsletter />)
    const form = screen.getByRole('textbox', { name: /email address/i }).closest('form')!
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    const preventDefault = vi.fn()
    Object.defineProperty(submitEvent, 'preventDefault', { value: preventDefault })
    form.dispatchEvent(submitEvent)
    expect(preventDefault).toHaveBeenCalled()
  })
})
