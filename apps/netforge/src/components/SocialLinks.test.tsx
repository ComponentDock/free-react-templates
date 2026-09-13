import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialLinks } from './SocialLinks'

describe('SocialLinks', () => {
  it('renders GitHub, X, and LinkedIn links', () => {
    render(<SocialLinks />)

    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('opens links in a new tab', () => {
    render(<SocialLinks />)

    for (const name of ['GitHub', 'X', 'LinkedIn']) {
      const link = screen.getByRole('link', { name })
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    }
  })
})
