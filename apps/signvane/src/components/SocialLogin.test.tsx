import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialLogin } from './SocialLogin'

describe('SocialLogin', () => {
  it('renders the prompt text', () => {
    render(<SocialLogin />)
    expect(screen.getByText('or Signup with this services below')).toBeInTheDocument()
  })

  it('renders Facebook button with correct styling', () => {
    render(<SocialLogin />)
    const facebook = screen.getByText('Facebook')
    expect(facebook).toBeInTheDocument()
    expect(facebook.closest('a')).toHaveClass('bg-facebook')
  })

  it('renders Twitter button with correct styling', () => {
    render(<SocialLogin />)
    const twitter = screen.getByText('Twitter')
    expect(twitter).toBeInTheDocument()
    expect(twitter.closest('a')).toHaveClass('bg-twitter')
  })

  it('renders the Sign In link', () => {
    render(<SocialLogin />)
    const signIn = screen.getByText('Sign In')
    expect(signIn).toBeInTheDocument()
    expect(signIn).toHaveAttribute('href', '#signin')
  })

  it('renders the member prompt text', () => {
    render(<SocialLogin />)
    expect(screen.getByText("I'm already a member!")).toBeInTheDocument()
  })

  it('social buttons have brand color hover class', () => {
    render(<SocialLogin />)
    const facebook = screen.getByText('Facebook').closest('a')
    const twitter = screen.getByText('Twitter').closest('a')
    expect(facebook).toHaveClass('hover:bg-brand')
    expect(twitter).toHaveClass('hover:bg-brand')
  })
})
