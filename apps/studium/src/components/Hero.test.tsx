import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline, CTAs, and registration form', () => {
    render(<Hero />)
    expect(screen.getByText(/We Are Online Platform For Make Learn/i)).toBeInTheDocument()
    expect(screen.getByText('Our Course')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
    expect(screen.getAllByText('Register Now').length).toBe(2)
    expect(screen.getByText('Sign In')).toBeInTheDocument()
  })

  it('has correct input types', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText('Email Address')).toHaveAttribute('type', 'email')
    expect(screen.getByPlaceholderText('Password')).toHaveAttribute('type', 'password')
    expect(screen.getByPlaceholderText('Confirm Password')).toHaveAttribute('type', 'password')
    expect(screen.getByPlaceholderText('Full Name')).toHaveAttribute('type', 'text')
  })

  it('handles form submission', () => {
    render(<Hero />)
    const form = screen.getByPlaceholderText('Full Name').closest('form')!
    fireEvent.submit(form)
  })
})
