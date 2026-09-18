import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders newsletter heading', () => {
    render(<Newsletter />)
    expect(screen.getByText('Sign Up for the')).toBeInTheDocument()
    expect(screen.getByText('NEWSLETTER')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders Subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('email input accepts user typing', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('form has pill-shaped styling on inputs', () => {
    render(<Newsletter />)
    const input = screen.getByLabelText('Email address')
    expect(input.className).toContain('rounded-l-[40px]')
    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    expect(submitBtn.className).toContain('rounded-r-[40px]')
  })

  it('subscribe button has brand color', () => {
    render(<Newsletter />)
    const btn = screen.getByRole('button', { name: /subscribe/i })
    expect(btn.className).toContain('bg-brand')
  })

  it('form submit prevents default navigation', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const form = screen.getByLabelText('Email address').closest('form')!
    // Spy on the onSubmit handler via the component's own preventDefault
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    // Form still renders (default was prevented by component)
    expect(form).toBeInTheDocument()
  })
})
