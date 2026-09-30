import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FloatingInput } from './FloatingInput'

describe('FloatingInput', () => {
  it('renders an input with placeholder', () => {
    render(<FloatingInput label="Full Name" placeholder="John Doe" type="text" />)
    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument()
  })

  it('renders a label', () => {
    render(<FloatingInput label="Email" placeholder="test@email.com" type="email" />)
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('floats label on focus', async () => {
    const user = userEvent.setup()
    render(<FloatingInput label="Password" placeholder="Password" type="password" />)
    const input = screen.getByPlaceholderText('Password')
    await user.click(input)
    const label = screen.getByText('Password')
    expect(label).toHaveClass('top-1.5')
  })

  it('floats label when value is present', () => {
    render(
      <FloatingInput
        label="Name"
        placeholder="Name"
        type="text"
        value="John"
        onChange={() => {}}
      />,
    )
    const label = screen.getByText('Name')
    expect(label).toHaveClass('top-1.5')
  })

  it('calls onChange when typing', async () => {
    const handleChange = vi.fn()
    const user = userEvent.setup()
    render(<FloatingInput label="Name" placeholder="Name" type="text" onChange={handleChange} />)
    await user.type(screen.getByPlaceholderText('Name'), 'A')
    expect(handleChange).toHaveBeenCalled()
  })

  it('manages internal state when no onChange provided', async () => {
    const user = userEvent.setup()
    render(<FloatingInput label="Name" placeholder="Name" type="text" />)
    const input = screen.getByPlaceholderText('Name')
    await user.type(input, 'John')
    expect(input).toHaveValue('John')
  })

  it('unfloats label on blur when empty', async () => {
    const user = userEvent.setup()
    render(<FloatingInput label="Password" placeholder="Password" type="password" />)
    const input = screen.getByPlaceholderText('Password')
    await user.click(input)
    const label = screen.getByText('Password')
    expect(label).toHaveClass('top-1.5')
    await user.tab()
    expect(label).toHaveClass('top-3.5')
  })

  it('supports password type', () => {
    render(<FloatingInput label="Password" placeholder="Password" type="password" />)
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute('type', 'password')
  })

  it('has correct input name derived from label', () => {
    render(<FloatingInput label="Full Name" placeholder="John Doe" type="text" />)
    expect(screen.getByPlaceholderText('John Doe')).toHaveAttribute('name', 'fullname')
  })

  it('applies red focus border on focus', async () => {
    const user = userEvent.setup()
    render(<FloatingInput label="Email" placeholder="Email" type="email" />)
    const input = screen.getByPlaceholderText('Email')
    await user.click(input)
    expect(input).toHaveClass('focus:border-brand')
  })
})
