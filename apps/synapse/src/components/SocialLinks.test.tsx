import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialLinks } from './SocialLinks'

describe('SocialLinks', () => {
  it('renders the social links in the default (light) variant', () => {
    render(<SocialLinks />)

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com',
    )
    expect(screen.getByRole('link', { name: 'X' })).toHaveAttribute('href', 'https://x.com')
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com',
    )

    const link = screen.getByRole('link', { name: 'GitHub' })
    expect(link.className).toContain('bg-white')
    expect(link.className).toContain('ring-gray-200')
  })

  it('renders the social links in the inverted variant', () => {
    render(<SocialLinks inverted />)

    const link = screen.getByRole('link', { name: 'GitHub' })
    expect(link.className).toContain('bg-primary-600')
    expect(link.className).toContain('hover:bg-primary-700')
  })
})
