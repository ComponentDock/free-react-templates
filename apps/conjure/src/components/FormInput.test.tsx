import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormInput } from './FormInput'

describe('FormInput', () => {
  it('renders a text input with the placeholder', () => {
    render(<FormInput label="First Name" placeholder="First Name" />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
  })

  it('has a sr-only label', () => {
    render(<FormInput label="Email" placeholder="Your Email" />)
    const input = screen.getByPlaceholderText('Your Email')
    expect(input).toHaveAccessibleName('Email')
  })

  it('accepts user input', async () => {
    const user = userEvent.setup()
    render(<FormInput label="Name" placeholder="Name" />)
    const input = screen.getByPlaceholderText('Name')
    await user.type(input, 'John')
    expect(input).toHaveValue('John')
  })
})
