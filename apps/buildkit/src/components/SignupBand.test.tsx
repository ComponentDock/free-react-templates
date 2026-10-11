import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { SignupBand } from './SignupBand'

describe('SignupBand', () => {
  it('renders the gradient login card with its social line', () => {
    const { container } = render(<SignupBand />)

    expect(container.querySelector('section')!.id).toBe('signup')
    const form = container.querySelector('form')!
    expect(form.className).toContain('card-login-gradient')
    expect(screen.getByRole('heading', { level: 3, name: 'Card Login' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Sign in with Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign in with Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign in with Google' })).toBeInTheDocument()

    expect(screen.getByLabelText('First name')).toHaveAttribute('type', 'text')
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password')
    expect(screen.getByRole('button', { name: 'Get Started' })).toHaveAttribute('type', 'submit')
  })

  it('renders the three feature cards, one with a footer', () => {
    render(<SignupBand />)

    expect(screen.getByRole('heading', { name: 'Default Featured' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Featured' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: 'Special title treatment' })).toHaveLength(3)
    expect(screen.getByRole('heading', { name: 'Card with footer' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Go somewhere' })).toHaveLength(3)
    expect(screen.getByText('2 days ago')).toBeInTheDocument()
  })

  it('prevents the login submission', () => {
    const { container } = render(<SignupBand />)

    expect(fireEvent.submit(container.querySelector('form')!)).toBe(false)
  })
})
