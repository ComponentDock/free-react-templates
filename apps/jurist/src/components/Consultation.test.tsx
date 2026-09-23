import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Consultation } from './Consultation'

describe('Consultation', () => {
  it('renders the section heading', () => {
    render(<Consultation />)
    expect(screen.getByText(/International Law Group/)).toBeDefined()
  })

  it('renders the form with all fields', () => {
    render(<Consultation />)
    expect(screen.getByPlaceholderText('Name')).toBeDefined()
    expect(screen.getByPlaceholderText('Phone')).toBeDefined()
    expect(screen.getByPlaceholderText('Case Description')).toBeDefined()
    expect(screen.getByRole('button', { name: /send request/i })).toBeDefined()
  })

  it('accepts input in all form fields', async () => {
    const user = userEvent.setup()
    render(<Consultation />)
    const nameInput = screen.getByPlaceholderText('Name')
    await user.type(nameInput, 'John Doe')
    expect(nameInput).toHaveValue('John Doe')

    const phoneInput = screen.getByPlaceholderText('Phone')
    await user.type(phoneInput, '555-1234')
    expect(phoneInput).toHaveValue('555-1234')

    const descInput = screen.getByPlaceholderText('Case Description')
    await user.type(descInput, 'Need help with a contract dispute')
    expect(descInput).toHaveValue('Need help with a contract dispute')
  })

  it('submits the form without error', async () => {
    const user = userEvent.setup()
    render(<Consultation />)
    const submitBtn = screen.getByRole('button', { name: /send request/i })
    await user.click(submitBtn)
  })

  it('renders the Call Now prompt', () => {
    render(<Consultation />)
    expect(screen.getByText(/Call Now For Immediate Assistance/)).toBeDefined()
  })
})
