import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the Contact section', () => {
    render(<Contact />)
    expect(screen.getByTestId('contact')).toBeInTheDocument()
  })

  it('displays the Contact Me heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Me' })).toBeInTheDocument()
  })

  it('has a name input field', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
  })

  it('has an email input field', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  })

  it('has a subject input field', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
  })

  it('has a message textarea', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('has a Send Message button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('form can be filled and submitted', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByPlaceholderText('Name'), 'John')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Hello')
    await user.type(screen.getByPlaceholderText('Message'), 'Test message')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
  })
})
