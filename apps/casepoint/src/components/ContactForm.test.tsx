import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders heading', () => {
    render(<ContactForm />)
    expect(
      screen.getByRole('heading', { level: 2, name: /leading law consultancy/i }),
    ).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<ContactForm />)
    expect(screen.getByText('Fill up to get a quote')).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Select Practice Area')).toBeInTheDocument()
  })

  it('renders Submit Now button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /submit now/i })).toBeInTheDocument()
  })

  it('submitting empty form does not show confirmation', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.click(screen.getByRole('button', { name: /submit now/i }))
    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument()
  })

  it('submitting empty form via fireEvent hits early return', () => {
    render(<ContactForm />)
    const form = screen.getByRole('button', { name: /submit now/i }).closest('form')!
    fireEvent.submit(form)
    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument()
  })

  it('submitting partial form hits early return', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.type(screen.getByPlaceholderText('Name'), 'John')
    fireEvent.submit(screen.getByRole('button', { name: /submit now/i }).closest('form')!)
    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument()
  })

  it('filling all fields and submitting shows confirmation', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByPlaceholderText('Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Phone'), '555-1234')
    await user.selectOptions(screen.getByDisplayValue('Select Practice Area'), 'health')
    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Message'), 'Need legal help')
    await user.click(screen.getByRole('button', { name: /submit now/i }))

    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    expect(screen.queryByPlaceholderText('Name')).not.toBeInTheDocument()
  })
})
