import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'Request A Quote' })).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Select Guidance')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('shows validation error when names are empty', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /request a quote/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/required/i)
  })

  it('submits successfully with valid data', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.click(screen.getByRole('button', { name: /request a quote/i }))
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
  })

  it('allows filling guidance dropdown', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.selectOptions(screen.getByLabelText('Select Guidance'), 'Finance')
    expect(screen.getByLabelText('Select Guidance')).toHaveValue('Finance')
  })

  it('allows filling phone and message', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Phone'), '555-1234')
    await user.type(screen.getByLabelText('Message'), 'Hello there')
    expect(screen.getByLabelText('Phone')).toHaveValue('555-1234')
    expect(screen.getByLabelText('Message')).toHaveValue('Hello there')
  })
})
