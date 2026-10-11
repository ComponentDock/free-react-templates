import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { FormsShowcase } from './FormsShowcase'

describe('FormsShowcase', () => {
  it('renders the plain and shadowed input groups', () => {
    const { container } = render(<FormsShowcase />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Forms')
    expect(screen.getByRole('heading', { level: 4, name: 'Input' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Input Shadow' })).toBeInTheDocument()

    expect(screen.getByPlaceholderText('Full name')).toHaveAttribute('type', 'text')
    expect(screen.getByPlaceholderText('you@example.com')).toHaveAttribute('type', 'email')

    const datetime = container.querySelector('input[name="datetime"]')!
    expect(datetime.getAttribute('type')).toBe('datetime-local')

    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute('type', 'email')

    const password = screen.getByPlaceholderText('Password')
    expect(password.getAttribute('type')).toBe('password')
    expect(password.className).toContain('shadow-kit-input')
    expect(password.className).toContain('focus:border-kit-primary')

    expect(screen.getAllByLabelText('Name')).toHaveLength(2)
  })

  it('prevents submission in both demo groups', () => {
    const { container } = render(<FormsShowcase />)

    const forms = Array.from(container.querySelectorAll('form'))
    expect(forms).toHaveLength(2)

    forms.forEach((form) => {
      const notCancelled = fireEvent.submit(form)
      expect(notCancelled).toBe(false)
    })
  })
})
