import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialButton } from './SocialButton'

describe('SocialButton', () => {
  it('renders Facebook button with correct aria-label', () => {
    render(<SocialButton provider="facebook" />)
    expect(screen.getByRole('button', { name: 'Login with Facebook' })).toBeInTheDocument()
  })

  it('renders Google button with correct aria-label', () => {
    render(<SocialButton provider="google" />)
    expect(screen.getByRole('button', { name: 'Login with Google' })).toBeInTheDocument()
  })

  it('renders as a button element', () => {
    render(<SocialButton provider="facebook" />)
    expect(screen.getByRole('button', { name: 'Login with Facebook' })).toHaveAttribute(
      'type',
      'button',
    )
  })
})
