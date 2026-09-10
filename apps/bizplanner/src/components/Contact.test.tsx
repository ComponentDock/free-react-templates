import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders section title', () => {
    render(<Contact />)
    expect(screen.getByText('Contact Us')).toBeDefined()
  })

  it('renders contact info', () => {
    render(<Contact />)
    expect(screen.getByText('Contact Info')).toBeDefined()
    expect(screen.getByText('123 Business Ave, Suite 100')).toBeDefined()
    expect(screen.getByText('+1 (555) 123-4567')).toBeDefined()
    expect(screen.getByText('info@bizplanner.com')).toBeDefined()
  })

  it('renders the map placeholder', () => {
    render(<Contact />)
    expect(screen.getByText('Our Location')).toBeDefined()
  })

  it('renders the contact form inputs', () => {
    render(<Contact />)
    const sendButtons = screen.getAllByRole('button', { name: /send message/i })
    expect(sendButtons.length).toBeGreaterThan(0)
    expect(screen.getByPlaceholderText('First Name')).toBeDefined()
    expect(screen.getByPlaceholderText('Last Name')).toBeDefined()
    expect(screen.getByPlaceholderText('Email')).toBeDefined()
    expect(screen.getByPlaceholderText('Subject')).toBeDefined()
    expect(screen.getByPlaceholderText('Message')).toBeDefined()
  })

  it('has the correct section id', () => {
    const { container } = render(<Contact />)
    expect(container.querySelector('#contact-section')).not.toBeNull()
  })

  it('submits form and shows confirmation', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByPlaceholderText('First Name'), 'John')
    await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
    await user.type(screen.getByPlaceholderText('Email'), 'john@test.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Hello')
    await user.type(screen.getByPlaceholderText('Message'), 'Test message')

    const submitButtons = screen.getAllByRole('button', { name: /send message/i })
    await user.click(submitButtons[submitButtons.length - 1]!)
    expect(screen.getByText('Message Sent!')).toBeDefined()
    expect(screen.getByText(/Thank you for contacting us/)).toBeDefined()
  })
})
