import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FormField } from './FormField'

describe('FormField', () => {
  it('renders a label and input', () => {
    render(<FormField label="Email" name="email" value="" onChange={() => {}} />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  it('renders with the correct input type', () => {
    render(
      <FormField label="Password" name="password" type="password" value="" onChange={() => {}} />,
    )
    expect(screen.getByLabelText(/password/i)).toHaveAttribute('type', 'password')
  })

  it('renders with placeholder text', () => {
    render(
      <FormField label="Name" name="name" value="" onChange={() => {}} placeholder="Enter name" />,
    )
    expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument()
  })

  it('displays the current value', () => {
    render(<FormField label="Name" name="name" value="John" onChange={() => {}} />)
    expect(screen.getByLabelText(/name/i)).toHaveValue('John')
  })

  it('calls onChange when typing', async () => {
    let changed = false
    const handleChange = () => {
      changed = true
    }
    render(<FormField label="Name" name="name" value="" onChange={handleChange} />)
    const input = screen.getByLabelText(/name/i)
    await input.click()
    // Simulate change via native input setter
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value',
    )?.set
    nativeInputValueSetter?.call(input, 'test')
    input.dispatchEvent(new Event('input', { bubbles: true }))
    expect(changed).toBe(true)
  })
})
