import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SignupWrap } from './SignupWrap'

describe('SignupWrap', () => {
  it('renders the rounded shadowed card with both panels', () => {
    const { container } = render(<SignupWrap />)
    const card = container.firstElementChild
    expect(card?.className).toContain('rounded-[5px]')
    expect(card?.className).toContain('shadow-wrap')
    expect(card?.className).toContain('overflow-hidden')
    expect(card?.className).toContain('md:flex')
    expect(
      screen.getByRole('heading', { level: 2, name: /welcome to signup form/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /create an account/i }),
    ).toBeInTheDocument()
  })

  it('renders the white form panel with the light-weight heading', () => {
    render(<SignupWrap />)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading.className).toContain('font-light')
    expect(heading.className).toContain('text-black')
  })

  it('composes the form, social block, and member line', () => {
    render(<SignupWrap />)
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument()
    expect(screen.getByText(/signup with this services/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^sign in$/i })).toBeInTheDocument()
  })
})
