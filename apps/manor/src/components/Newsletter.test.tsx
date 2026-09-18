import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders newsletter heading and form', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { name: 'subscribe to our newsletter' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your email here')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders weekly offer card', () => {
    render(<Newsletter />)
    expect(screen.getByText('weekly offer')).toBeInTheDocument()
  })

  it('has a required email field', () => {
    render(<Newsletter />)
    const emailInput = screen.getByPlaceholderText('Your email here')
    expect(emailInput).toBeRequired()
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('submits newsletter form without error', () => {
    render(<Newsletter />)
    const form = document.querySelector('form')
    if (form) fireEvent.submit(form)
  })
})
