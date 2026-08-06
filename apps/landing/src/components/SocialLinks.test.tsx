import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialLinks } from './SocialLinks'

describe('SocialLinks', () => {
  it('renders GitHub, X, and LinkedIn links with accessible labels', () => {
    render(<SocialLinks />)

    for (const name of ['GitHub', 'X', 'LinkedIn']) {
      const link = screen.getByRole('link', { name })
      expect(link).toHaveAttribute('href', expect.stringMatching(/^https:\/\//))
      expect(link).toHaveAttribute('target', '_blank')
    }
  })
})
