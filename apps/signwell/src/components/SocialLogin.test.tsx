import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialLogin } from './SocialLogin'

describe('SocialLogin', () => {
  it('renders the "or sign in with" label', () => {
    render(<SocialLogin />)
    expect(screen.getByText(/or sign in with/i)).toBeInTheDocument()
  })

  it('renders three social login buttons', () => {
    render(<SocialLogin />)
    expect(screen.getByRole('button', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /google/i })).toBeInTheDocument()
  })
})
