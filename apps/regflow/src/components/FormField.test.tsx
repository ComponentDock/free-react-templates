import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FormField } from './FormField'

describe('FormField', () => {
  it('renders a text input with label', () => {
    render(<FormField label="Your Name" name="name" />)
    const input = screen.getByLabelText('Your Name')
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
  })

  it('renders an email input with label', () => {
    render(<FormField label="Your Mail" name="email" type="email" />)
    const input = screen.getByLabelText('Your Mail')
    expect(input).toHaveAttribute('type', 'email')
  })

  it('renders a textarea when type is textarea', () => {
    render(<FormField label="Your Message" name="message" type="textarea" />)
    const textarea = screen.getByLabelText('Your Message')
    expect(textarea.tagName).toBe('TEXTAREA')
  })

  it('sets required attribute when required is true', () => {
    render(<FormField label="Name" name="name" required />)
    expect(screen.getByLabelText('Name')).toHaveAttribute('required')
  })

  it('does not set required attribute by default', () => {
    render(<FormField label="Name" name="name" />)
    expect(screen.getByLabelText('Name')).not.toHaveAttribute('required')
  })

  it('renders the floating label text', () => {
    render(<FormField label="Your Name" name="name" />)
    expect(screen.getByText('Your Name')).toBeInTheDocument()
  })

  it('renders the underline span for animation', () => {
    const { container } = render(<FormField label="Your Name" name="name" />)
    const underline = container.querySelector('.underline')
    expect(underline).toBeInTheDocument()
  })
})
