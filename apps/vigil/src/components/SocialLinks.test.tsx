import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialLinks } from './SocialLinks'

describe('SocialLinks', () => {
  it('renders the follow us label', () => {
    render(<SocialLinks />)
    expect(screen.getByText(/follow us for update/i)).toBeInTheDocument()
  })

  it('renders five social links', () => {
    render(<SocialLinks />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /google\+/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /pinterest/i })).toBeInTheDocument()
  })

  it('Facebook link has correct brand color', () => {
    render(<SocialLinks />)
    const fb = screen.getByRole('link', { name: /facebook/i })
    expect(fb).toHaveStyle({ backgroundColor: '#2A61D6' })
  })

  it('Twitter link has correct brand color', () => {
    render(<SocialLinks />)
    const tw = screen.getByRole('link', { name: /twitter/i })
    expect(tw).toHaveStyle({ backgroundColor: '#3AA4F8' })
  })

  it('Google+ link has correct brand color', () => {
    render(<SocialLinks />)
    const gp = screen.getByRole('link', { name: /google\+/i })
    expect(gp).toHaveStyle({ backgroundColor: '#F43846' })
  })

  it('Instagram link has correct brand color', () => {
    render(<SocialLinks />)
    const ig = screen.getByRole('link', { name: /instagram/i })
    expect(ig).toHaveStyle({ backgroundColor: '#8F614A' })
  })

  it('Pinterest link has correct brand color', () => {
    render(<SocialLinks />)
    const pin = screen.getByRole('link', { name: /pinterest/i })
    expect(pin).toHaveStyle({ backgroundColor: '#E1C013' })
  })
})
