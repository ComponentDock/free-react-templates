import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Head Office section', () => {
    render(<Footer />)
    expect(screen.getByText('Head Office')).toBeInTheDocument()
    expect(screen.getByText('123 Health Avenue, Medical City, MC 10001')).toBeInTheDocument()
    expect(screen.getByText('+1 (800) 254-9876')).toBeInTheDocument()
    expect(screen.getByText('info@curenova.com')).toBeInTheDocument()
  })

  it('renders Departments column', () => {
    render(<Footer />)
    expect(screen.getByText('Departments')).toBeInTheDocument()
    expect(screen.getByText('Cardiology')).toBeInTheDocument()
    expect(screen.getByText('Neurology')).toBeInTheDocument()
    expect(screen.getByText('Pediatrics')).toBeInTheDocument()
    expect(screen.getByText('Orthopedics')).toBeInTheDocument()
    expect(screen.getByText('Ophthalmology')).toBeInTheDocument()
  })

  it('renders Useful Links column', () => {
    render(<Footer />)
    expect(screen.getByText('Useful Links')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()
  })

  it('renders Support column', () => {
    render(<Footer />)
    expect(screen.getByText('Support')).toBeInTheDocument()
    expect(screen.getByText('Help Center')).toBeInTheDocument()
    expect(screen.getByText('Contact Support')).toBeInTheDocument()
  })

  it('has appointment form fields', () => {
    render(<Footer />)
    expect(screen.getByText('Appointment')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /request appointment/i })).toBeInTheDocument()
  })

  it('has a Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows error for invalid form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByPlaceholderText('Name'), 'Test')
    await user.type(screen.getByPlaceholderText('E-mail'), 'not-an-email')
    await user.type(screen.getByPlaceholderText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: /request appointment/i }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('submits valid appointment form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByPlaceholderText('Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('E-mail'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Message'), 'I need an appointment')
    await user.click(screen.getByRole('button', { name: /request appointment/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/appointment request sent/i)
  })

  it('clears form after successful submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByPlaceholderText('Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('E-mail'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: /request appointment/i }))
    expect(screen.getByPlaceholderText('Name')).toHaveValue('')
    expect(screen.getByPlaceholderText('E-mail')).toHaveValue('')
    expect(screen.getByPlaceholderText('Message')).toHaveValue('')
  })

  it('shows error when name is empty', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByPlaceholderText('E-mail'), 'test@test.com')
    await user.type(screen.getByPlaceholderText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: /request appointment/i }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('shows error when message is empty', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByPlaceholderText('Name'), 'Test')
    await user.type(screen.getByPlaceholderText('E-mail'), 'test@test.com')
    await user.click(screen.getByRole('button', { name: /request appointment/i }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
})
