import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'

describe('About', () => {
  it('renders the about text and heading', () => {
    render(<About />)
    expect(screen.getByText(/we've built a legacy/i)).toBeInTheDocument()
    expect(screen.getByText(/we listen to your needs/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /get started now/i })).toBeInTheDocument()
  })

  it('renders the quote form', () => {
    render(<About />)
    expect(screen.getByText('Request a Quote')).toBeInTheDocument()
    expect(screen.getByLabelText('Select service')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('allows filling the form', async () => {
    const user = userEvent.setup()
    render(<About />)
    await user.type(screen.getByPlaceholderText('Name'), 'John Doe')
    expect(screen.getByPlaceholderText('Name')).toHaveValue('John Doe')
    await user.type(screen.getByPlaceholderText('Phone Number'), '555-1234')
    expect(screen.getByPlaceholderText('Phone Number')).toHaveValue('555-1234')
    await user.type(screen.getByPlaceholderText('Email Address'), 'john@example.com')
    expect(screen.getByPlaceholderText('Email Address')).toHaveValue('john@example.com')
    await user.type(screen.getByPlaceholderText('Message'), 'Hello')
    expect(screen.getByPlaceholderText('Message')).toHaveValue('Hello')
  })

  it('allows changing the service select', async () => {
    const user = userEvent.setup()
    render(<About />)
    await user.selectOptions(screen.getByLabelText('Select service'), 'Service Two')
    expect(screen.getByLabelText('Select service')).toHaveValue('Service Two')
  })

  it('submits the form without error', async () => {
    const user = userEvent.setup()
    render(<About />)
    await user.click(screen.getByRole('button', { name: /request free quote/i }))
  })
})
