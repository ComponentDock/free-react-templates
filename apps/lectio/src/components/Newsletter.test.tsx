import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { name: /Stay Updated/i })).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText(/Enter your email/i)).toBeInTheDocument()
  })

  it('renders the Subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /Subscribe/i })).toBeInTheDocument()
  })

  it('has a label for the email input', () => {
    render(<Newsletter />)
    const input = screen.getByPlaceholderText(/Enter your email/i)
    expect(input).toHaveAccessibleName(/email/i)
  })

  it('prevents default form submission', () => {
    render(<Newsletter />)
    const form = screen.getByPlaceholderText(/Enter your email/i).closest('form')!
    const submitEvent = new Event('submit', {
      bubbles: true,
      cancelable: true,
    })
    const preventDefault = vi.fn()
    Object.defineProperty(submitEvent, 'preventDefault', {
      value: preventDefault,
    })
    form.dispatchEvent(submitEvent)
    expect(preventDefault).toHaveBeenCalled()
  })
})
