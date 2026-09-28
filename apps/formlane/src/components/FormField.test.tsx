import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FormField } from './FormField'

describe('FormField', () => {
  it('renders with the correct label', () => {
    render(<FormField id="test-field" label="Test Label" />)
    expect(screen.getByLabelText(/test label/i)).toBeInTheDocument()
  })

  it('renders a text input by default', () => {
    render(<FormField id="test-field" label="Test Label" />)
    const input = screen.getByLabelText(/test label/i)
    expect(input).toHaveAttribute('type', 'text')
  })

  it('renders with a custom type', () => {
    render(<FormField id="test-field" label="Email" type="email" />)
    const input = screen.getByLabelText(/email/i)
    expect(input).toHaveAttribute('type', 'email')
  })

  it('sets required attribute when required', () => {
    render(<FormField id="test-field" label="Required" required />)
    expect(screen.getByLabelText(/required/i)).toBeRequired()
  })

  it('sets pattern attribute when provided', () => {
    render(<FormField id="test-field" label="Email" pattern="[^@]+@[^@]+" />)
    expect(screen.getByLabelText(/email/i)).toHaveAttribute('pattern', '[^@]+@[^@]+')
  })

  it('uses custom name when provided', () => {
    render(<FormField id="test-field" label="Test" name="custom-name" />)
    expect(screen.getByLabelText(/test/i)).toHaveAttribute('name', 'custom-name')
  })

  it('defaults name to id when not provided', () => {
    render(<FormField id="test-field" label="Test" />)
    expect(screen.getByLabelText(/test/i)).toHaveAttribute('name', 'test-field')
  })
})
