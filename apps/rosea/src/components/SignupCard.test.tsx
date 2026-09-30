import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SignupCard } from './SignupCard'

describe('SignupCard', () => {
  it('renders the avatar image', () => {
    render(<SignupCard />)
    const avatar = screen.getByRole('img', { name: /user avatar/i })
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveAttribute('src', expect.stringContaining('picsum'))
  })

  it('renders the Create Your Account heading', () => {
    render(<SignupCard />)
    expect(screen.getByRole('heading', { name: /create your account/i })).toBeInTheDocument()
  })

  it('composes the signup form', () => {
    render(<SignupCard />)
    expect(screen.getByLabelText(/^full name$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
  })

  it('renders the sign-in link', () => {
    render(<SignupCard />)
    expect(screen.getByRole('link', { name: /sign in/i })).toHaveAttribute('href', '#signin')
  })
})
