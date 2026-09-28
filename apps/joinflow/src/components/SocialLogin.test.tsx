import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SocialLogin } from './SocialLogin'

describe('SocialLogin', () => {
  it('renders three social login buttons', () => {
    render(<SocialLogin />)
    const buttons = screen.getAllByRole('link')
    expect(buttons).toHaveLength(3)
  })

  it('renders Facebook button with correct aria-label', () => {
    render(<SocialLogin />)
    const facebook = screen.getByRole('link', { name: /facebook/i })
    expect(facebook).toBeInTheDocument()
    expect(facebook).toHaveAttribute('href', '#')
  })

  it('renders Twitter button with correct aria-label', () => {
    render(<SocialLogin />)
    const twitter = screen.getByRole('link', { name: /twitter/i })
    expect(twitter).toBeInTheDocument()
    expect(twitter).toHaveAttribute('href', '#')
  })

  it('renders Google button with correct aria-label', () => {
    render(<SocialLogin />)
    const google = screen.getByRole('link', { name: /google/i })
    expect(google).toBeInTheDocument()
    expect(google).toHaveAttribute('href', '#')
  })

  it('renders the "Or register with" text', () => {
    render(<SocialLogin />)
    expect(screen.getByText(/or register with/i)).toBeInTheDocument()
  })

  it('applies hover styles on Facebook button', async () => {
    const user = userEvent.setup()
    render(<SocialLogin />)
    const facebook = screen.getByRole('link', { name: /facebook/i })
    await user.hover(facebook)
    expect(facebook.style.backgroundColor).toBe('var(--color-facebook-hover)')
  })

  it('restores default style on Facebook button mouse leave', async () => {
    const user = userEvent.setup()
    render(<SocialLogin />)
    const facebook = screen.getByRole('link', { name: /facebook/i })
    await user.hover(facebook)
    await user.unhover(facebook)
    expect(facebook.style.backgroundColor).toBe('var(--color-facebook)')
  })

  it('applies hover styles on Twitter button', async () => {
    const user = userEvent.setup()
    render(<SocialLogin />)
    const twitter = screen.getByRole('link', { name: /twitter/i })
    await user.hover(twitter)
    expect(twitter.style.backgroundColor).toBe('var(--color-twitter-hover)')
  })

  it('restores default style on Twitter button mouse leave', async () => {
    const user = userEvent.setup()
    render(<SocialLogin />)
    const twitter = screen.getByRole('link', { name: /twitter/i })
    await user.hover(twitter)
    await user.unhover(twitter)
    expect(twitter.style.backgroundColor).toBe('var(--color-twitter)')
  })

  it('applies hover styles on Google button', async () => {
    const user = userEvent.setup()
    render(<SocialLogin />)
    const google = screen.getByRole('link', { name: /google/i })
    await user.hover(google)
    expect(google.style.backgroundColor).toBe('var(--color-google-hover)')
  })

  it('restores default style on Google button mouse leave', async () => {
    const user = userEvent.setup()
    render(<SocialLogin />)
    const google = screen.getByRole('link', { name: /google/i })
    await user.hover(google)
    await user.unhover(google)
    expect(google.style.backgroundColor).toBe('var(--color-google)')
  })
})
