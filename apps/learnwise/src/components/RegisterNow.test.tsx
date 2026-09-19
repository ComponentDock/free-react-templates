import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegisterNow } from './RegisterNow'

describe('RegisterNow', () => {
  it('renders the heading and form', () => {
    render(<RegisterNow />)
    expect(screen.getByRole('heading', { name: 'Register Now' })).toBeInTheDocument()
    expect(screen.getByRole('form', { name: 'Registration form' })).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<RegisterNow />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Site')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<RegisterNow />)
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('allows typing in all form fields', async () => {
    const user = userEvent.setup()
    render(<RegisterNow />)
    await user.type(screen.getByPlaceholderText('Name'), 'John')
    expect(screen.getByPlaceholderText('Name')).toHaveValue('John')
    await user.type(screen.getByPlaceholderText('Email'), 'john@test.com')
    expect(screen.getByPlaceholderText('Email')).toHaveValue('john@test.com')
    await user.type(screen.getByPlaceholderText('Phone'), '123456')
    expect(screen.getByPlaceholderText('Phone')).toHaveValue('123456')
    await user.type(screen.getByPlaceholderText('Site'), 'example.com')
    expect(screen.getByPlaceholderText('Site')).toHaveValue('example.com')
  })

  it('handles form submission', () => {
    render(<RegisterNow />)
    const form = screen.getByRole('form', { name: 'Registration form' })
    fireEvent.submit(form)
    // Form should not navigate (preventDefault)
    expect(form).toBeInTheDocument()
  })

  it('renders CTA stats', () => {
    render(<RegisterNow />)
    expect(screen.getByText('120+')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('10K+')).toBeInTheDocument()
  })
})
