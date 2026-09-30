import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignupCard } from './SignupCard'

describe('SignupCard', () => {
  it('renders a heading', () => {
    render(<SignupCard />)
    expect(screen.getByRole('heading', { name: /sign up/i })).toBeInTheDocument()
  })

  it('renders four input fields', () => {
    render(<SignupCard />)
    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('johndoe@gmail.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()
  })

  it('renders a submit button', () => {
    render(<SignupCard />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('renders wave decoration', () => {
    const { container } = render(<SignupCard />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders sign in link', () => {
    render(<SignupCard />)
    expect(screen.getByText('Already have an account?')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
  })

  it('sign in link points to correct destination', () => {
    render(<SignupCard />)
    const link = screen.getByRole('link', { name: /sign in/i })
    expect(link).toHaveAttribute('href', '#signin')
  })

  it('submit button is positioned at bottom-right of card', () => {
    render(<SignupCard />)
    const btn = screen.getByRole('button', { name: /submit/i })
    expect(btn).toHaveClass('absolute')
    expect(btn).toHaveClass('-bottom-7')
    expect(btn).toHaveClass('right-6')
  })

  it('has white card background', () => {
    render(<SignupCard />)
    const card = screen.getByRole('heading', { name: /sign up/i }).parentElement
    expect(card).toHaveClass('bg-white')
  })

  it('has rounded corners', () => {
    render(<SignupCard />)
    const card = screen.getByRole('heading', { name: /sign up/i }).parentElement
    expect(card).toHaveClass('rounded-2xl')
  })

  it('has shadow', () => {
    render(<SignupCard />)
    const card = screen.getByRole('heading', { name: /sign up/i }).parentElement
    expect(card).toHaveClass('shadow-lg')
  })

  it('prevents form submission', async () => {
    const user = userEvent.setup()
    render(<SignupCard />)
    const submitBtn = screen.getByRole('button', { name: /submit/i })
    await user.click(submitBtn)
    // Form should not navigate or reload
    expect(screen.getByRole('heading', { name: /sign up/i })).toBeInTheDocument()
  })
})
