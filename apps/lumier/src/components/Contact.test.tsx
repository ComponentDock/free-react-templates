import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the contact heading', () => {
    render(<Contact />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Contact />)
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('First Name'), 'John')
    expect(screen.getByLabelText('First Name')).toHaveValue('John')
  })

  it('allows typing in all fields', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Email'), 'test@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'Test message')
    expect(screen.getByLabelText('Last Name')).toHaveValue('Doe')
    expect(screen.getByLabelText('Email')).toHaveValue('test@example.com')
    expect(screen.getByLabelText('Subject')).toHaveValue('Hello')
    expect(screen.getByLabelText('Message')).toHaveValue('Test message')
  })

  it('submits the form without error', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Email'), 'test@example.com')
    await user.click(screen.getByText('Send Message'))
  })
})
