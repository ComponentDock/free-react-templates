import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders section heading and form fields', () => {
    render(<Contact />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders Send Message button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Name'), 'John')
    await user.type(screen.getByLabelText('Email'), 'john@test.com')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'Test message')
    expect(screen.getByLabelText('Name')).toHaveValue('John')
    expect(screen.getByLabelText('Email')).toHaveValue('john@test.com')
    expect(screen.getByLabelText('Subject')).toHaveValue('Hello')
    expect(screen.getByLabelText('Message')).toHaveValue('Test message')
  })

  it('clears form on submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Name'), 'John')
    await user.type(screen.getByLabelText('Email'), 'john@test.com')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'Test message')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByLabelText('Name')).toHaveValue('')
    expect(screen.getByLabelText('Email')).toHaveValue('')
    expect(screen.getByLabelText('Subject')).toHaveValue('')
    expect(screen.getByLabelText('Message')).toHaveValue('')
  })
})
