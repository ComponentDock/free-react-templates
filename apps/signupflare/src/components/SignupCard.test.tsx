import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SignupCard } from './SignupCard'

describe('SignupCard', () => {
  it('renders the avatar image from a deterministic placeholder', () => {
    render(<SignupCard />)
    const avatar = screen.getByRole('img', { name: /user avatar/i })
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/signupflare-1'),
    )
  })

  it('renders the gradient header band behind the content', () => {
    const { container } = render(<SignupCard />)
    const band = container.querySelector('[data-testid="gradient-band"]')
    expect(band).not.toBeNull()
    expect(band).toHaveAttribute('aria-hidden', 'true')
    expect(band?.className).toContain('linear-gradient(135deg')
    expect(band?.className).toContain('h-[160px]')
    expect(band?.className).toContain('rounded-[5px_5px_50%_0]')
  })

  it('renders the Sign Up card heading', () => {
    render(<SignupCard />)
    expect(screen.getByRole('heading', { level: 2, name: /^sign up$/i })).toBeInTheDocument()
  })

  it('composes the signup form', () => {
    render(<SignupCard />)
    expect(screen.getByLabelText(/^full name$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /continue/i })).toBeInTheDocument()
  })

  it('renders the member sign-in line with pink link', () => {
    render(<SignupCard />)
    expect(screen.getByText(/i'm already a member!/i)).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /sign in/i })
    expect(link).toHaveAttribute('href', '#signin')
    expect(link.className).toContain('text-accent')
  })
})
