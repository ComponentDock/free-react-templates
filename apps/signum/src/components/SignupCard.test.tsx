import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SignupCard } from './SignupCard'

describe('SignupCard', () => {
  it('renders the glass card shell (transparent fill, thin white border, 4px radius)', () => {
    const { container } = render(<SignupCard />)
    const card = container.firstElementChild as HTMLElement
    expect(card.className).toContain('border-white/20')
    expect(card.className).toContain('bg-transparent')
    expect(card.className).toContain('rounded-[4px]')
    expect(card.className).toContain('p-10')
  })

  it('renders the light card heading', () => {
    render(<SignupCard />)
    const heading = screen.getByRole('heading', { level: 2, name: /^create your account$/i })
    expect(heading).toBeInTheDocument()
    expect(heading.className).toContain('font-light')
    expect(heading.className).toContain('text-white')
  })

  it('composes the signup form with all four fields', () => {
    render(<SignupCard />)
    expect(screen.getByLabelText(/^full name$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^email address$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^confirm password$/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^sign up$/i })).toBeInTheDocument()
  })

  it('renders the member sign-in line with accent link', () => {
    render(<SignupCard />)
    expect(screen.getByText(/i'm already a member!/i)).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /sign in/i })
    expect(link).toHaveAttribute('href', '#signin')
    expect(link.className).toContain('text-accent')
  })
})
