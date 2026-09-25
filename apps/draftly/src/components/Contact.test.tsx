import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders heading', () => {
    render(<Contact />)
    expect(screen.getByText('Have a Project?')).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('allows typing in all form fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Full Name'), 'John Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'Test message')
    expect(screen.getByLabelText('Full Name')).toHaveValue('John Doe')
    expect(screen.getByLabelText('Email')).toHaveValue('john@example.com')
    expect(screen.getByLabelText('Subject')).toHaveValue('Hello')
    expect(screen.getByLabelText('Message')).toHaveValue('Test message')
  })

  it('submits form without error', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const submitBtn = screen.getByRole('button', { name: /send message/i })
    const form = submitBtn.closest('form')
    expect(form).not.toBeNull()
    const preventDefault = vi.fn()
    form!.addEventListener('submit', (e) => {
      e.preventDefault = preventDefault
    })
    await user.click(submitBtn)
    expect(preventDefault).toHaveBeenCalled()
  })

  it('renders Get In Touch subheading', () => {
    render(<Contact />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })
})
