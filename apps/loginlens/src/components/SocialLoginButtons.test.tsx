import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SocialLoginButtons } from './SocialLoginButtons'

describe('SocialLoginButtons', () => {
  it('renders Facebook login button', () => {
    render(<SocialLoginButtons />)
    const fbButton = screen.getByRole('link', { name: /login with facebook/i })
    expect(fbButton).toBeInTheDocument()
    expect(fbButton).toHaveAttribute('href', '#')
  })

  it('renders Twitter login button', () => {
    render(<SocialLoginButtons />)
    const twitterButton = screen.getByRole('link', { name: /login with twitter/i })
    expect(twitterButton).toBeInTheDocument()
    expect(twitterButton).toHaveAttribute('href', '#')
  })

  it('Facebook button has correct label', () => {
    render(<SocialLoginButtons />)
    expect(screen.getByLabelText(/login with facebook/i)).toBeInTheDocument()
  })

  it('Twitter button has correct label', () => {
    render(<SocialLoginButtons />)
    expect(screen.getByLabelText(/login with twitter/i)).toBeInTheDocument()
  })

  it('renders two social buttons', () => {
    render(<SocialLoginButtons />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2)
  })

  it('applies hover color on mouse enter and reverts on mouse leave', async () => {
    const user = userEvent.setup()
    render(<SocialLoginButtons />)
    const fbButton = screen.getByRole('link', { name: /login with facebook/i })

    await user.hover(fbButton)
    expect(fbButton.style.backgroundColor).toBe('var(--color-facebook-hover)')

    await user.unhover(fbButton)
    expect(fbButton.style.backgroundColor).toBe('var(--color-facebook)')
  })

  it('applies hover color on Twitter button', async () => {
    const user = userEvent.setup()
    render(<SocialLoginButtons />)
    const twitterButton = screen.getByRole('link', { name: /login with twitter/i })

    await user.hover(twitterButton)
    expect(twitterButton.style.backgroundColor).toBe('var(--color-twitter-hover)')

    await user.unhover(twitterButton)
    expect(twitterButton.style.backgroundColor).toBe('var(--color-twitter)')
  })
})
