import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialButtons } from './SocialButtons'

describe('SocialButtons', () => {
  it('renders three social buttons', () => {
    render(<SocialButtons />)

    expect(screen.getByRole('link', { name: 'Sign up with Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign up with Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign up with Google' })).toBeInTheDocument()
  })

  it('renders "Or Sign Up Using" text', () => {
    render(<SocialButtons />)

    expect(screen.getByText('Or Sign Up Using')).toBeInTheDocument()
  })

  it('renders Facebook button with correct href', () => {
    render(<SocialButtons />)

    expect(screen.getByRole('link', { name: 'Sign up with Facebook' })).toHaveAttribute('href', '#')
  })

  it('renders Twitter button with correct href', () => {
    render(<SocialButtons />)

    expect(screen.getByRole('link', { name: 'Sign up with Twitter' })).toHaveAttribute('href', '#')
  })

  it('renders Google button with correct href', () => {
    render(<SocialButtons />)

    expect(screen.getByRole('link', { name: 'Sign up with Google' })).toHaveAttribute('href', '#')
  })
})
