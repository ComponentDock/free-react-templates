import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialLinks } from './SocialLinks'

describe('SocialLinks', () => {
  it('renders the heading', () => {
    render(<SocialLinks />)
    expect(screen.getByRole('heading', { name: /follow us here/i })).toBeInTheDocument()
  })

  it('renders all social media links', () => {
    render(<SocialLinks />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /dribbble/i })).toBeInTheDocument()
  })

  it('social links have # href', () => {
    render(<SocialLinks />)
    const facebook = screen.getByRole('link', { name: /facebook/i })
    expect(facebook).toHaveAttribute('href', '#')
  })

  it('social links are uppercase and small', () => {
    render(<SocialLinks />)
    const facebook = screen.getByRole('link', { name: /facebook/i })
    expect(facebook).toHaveClass('uppercase')
    expect(facebook).toHaveClass('text-[13px]')
  })
})
