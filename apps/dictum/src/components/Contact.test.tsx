import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section subtitle and heading', () => {
    render(<Contact />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Contact Form')).toBeInTheDocument()
  })

  it('renders the services sidebar list', () => {
    render(<Contact />)
    const services = [
      'Business Consulting',
      'Market Analysis',
      'User Monitoring',
      'Insurance Consulting',
      'Financial Investment',
      'Financial Management',
    ]
    for (const s of services) {
      expect(screen.getByText(s)).toBeInTheDocument()
    }
  })

  it('renders contact info', () => {
    render(<Contact />)
    expect(screen.getByText('233 Salonica, Suite 130, FL 32807')).toBeInTheDocument()
    expect(screen.getByText('+1 (123) 456-7890')).toBeInTheDocument()
    expect(screen.getByText('info@dictum.com')).toBeInTheDocument()
    expect(screen.getByText('Mon - Fri: 9am - 5pm')).toBeInTheDocument()
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
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'Test message')

    expect(screen.getByLabelText('First Name')).toHaveValue('John')
    expect(screen.getByLabelText('Last Name')).toHaveValue('Doe')
    expect(screen.getByLabelText('Email')).toHaveValue('john@example.com')
    expect(screen.getByLabelText('Subject')).toHaveValue('Hello')
    expect(screen.getByLabelText('Message')).toHaveValue('Test message')
  })

  it('submits the form without errors', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByText('Send Message'))
  })
})
