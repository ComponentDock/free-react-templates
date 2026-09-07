import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormField } from './FormField'

describe('FormField', () => {
  it('renders input with label', () => {
    render(<FormField id="test" label="Test Label" />)
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
  })

  it('renders with correct id and name', () => {
    render(<FormField id="myfield" label="My Field" />)
    const input = screen.getByLabelText('My Field')
    expect(input).toHaveAttribute('id', 'myfield')
    expect(input).toHaveAttribute('name', 'myfield')
  })

  it('renders as text type by default', () => {
    render(<FormField id="test" label="Test" />)
    expect(screen.getByLabelText('Test')).toHaveAttribute('type', 'text')
  })

  it('renders as password type when specified', () => {
    render(<FormField id="pass" label="Password" type="password" />)
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password')
  })

  it('does not show toggle button when showToggle is false', () => {
    render(<FormField id="test" label="Test" />)
    expect(screen.queryByRole('button', { name: /show password/i })).not.toBeInTheDocument()
  })

  it('shows toggle button when showToggle is true', () => {
    render(<FormField id="pass" label="Password" type="password" showToggle />)
    expect(screen.getByRole('button', { name: /show password/i })).toBeInTheDocument()
  })

  it('toggles password visibility when toggle is clicked', async () => {
    const user = userEvent.setup()
    render(<FormField id="pass" label="Password" type="password" showToggle />)
    const input = screen.getByLabelText('Password')
    expect(input).toHaveAttribute('type', 'password')
    await user.click(screen.getByRole('button', { name: /show password/i }))
    expect(input).toHaveAttribute('type', 'text')
    expect(screen.getByRole('button', { name: /hide password/i })).toBeInTheDocument()
  })

  it('toggles back to password when clicked again', async () => {
    const user = userEvent.setup()
    render(<FormField id="pass" label="Password" type="password" showToggle />)
    const input = screen.getByLabelText('Password')
    await user.click(screen.getByRole('button', { name: /show password/i }))
    await user.click(screen.getByRole('button', { name: /hide password/i }))
    expect(input).toHaveAttribute('type', 'password')
  })

  it('input is required', () => {
    render(<FormField id="test" label="Test" />)
    expect(screen.getByLabelText('Test')).toBeRequired()
  })
})
