import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders section heading', () => {
    render(<Contact />)
    expect(screen.getByText('Contact')).toBeDefined()
  })

  it('renders contact info', () => {
    render(<Contact />)
    expect(screen.getByText('info@domain.com')).toBeDefined()
    expect(screen.getByText(/198 West 21th Street/)).toBeDefined()
    expect(screen.getByText('+123 456 7890')).toBeDefined()
  })

  it('renders form fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Name')).toBeDefined()
    expect(screen.getByPlaceholderText('Email')).toBeDefined()
    expect(screen.getByPlaceholderText('Subject')).toBeDefined()
    expect(screen.getByPlaceholderText('Message')).toBeDefined()
  })

  it('renders send message button', () => {
    render(<Contact />)
    expect(screen.getByText('Send Message')).toBeDefined()
  })

  it('updates form fields on input', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('Name'), 'John')
    expect(screen.getByPlaceholderText('Name')).toHaveValue('John')
  })

  it('renders get in touch label', () => {
    render(<Contact />)
    expect(screen.getByText('Get in Touch')).toBeDefined()
  })

  it('submits form without error', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('Name'), 'Test')
    await user.type(screen.getByPlaceholderText('Email'), 'test@example.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Hello')
    await user.type(screen.getByPlaceholderText('Message'), 'Test message')
    await user.click(screen.getByText('Send Message'))
  })
})
