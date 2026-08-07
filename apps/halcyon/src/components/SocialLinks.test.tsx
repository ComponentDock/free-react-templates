import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SocialLinks } from './SocialLinks'

describe('SocialLinks', () => {
  const socials = [
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'Facebook', href: 'https://facebook.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
  ] as const

  it('renders circular social links for twitter, instagram, facebook and linkedin', () => {
    render(<SocialLinks />)

    for (const social of socials) {
      const link = screen.getByRole('link', { name: social.name })
      expect(link).toHaveAttribute('href', social.href)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    }
  })

  it('renders the light variant by default for light section backgrounds', () => {
    render(<SocialLinks />)

    const link = screen.getByRole('link', { name: 'Twitter' })
    expect(link.className).toContain('bg-line')
    expect(link.className).toContain('hover:bg-brand')
  })

  it('renders the dark variant for the footer over a dark background', () => {
    render(<SocialLinks variant="dark" />)

    const link = screen.getByRole('link', { name: 'Twitter' })
    expect(link.className).toContain('bg-white/10')
    expect(link.className).toContain('text-white')
    expect(link.className).toContain('hover:bg-brand')
  })
})
