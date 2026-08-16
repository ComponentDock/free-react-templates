import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialLinks } from './SocialLinks'

describe('SocialLinks', () => {
  it('renders an accessible link for every social network', () => {
    render(<SocialLinks />)

    for (const social of ['Twitter', 'Instagram', 'Facebook']) {
      const link = screen.getByRole('link', { name: social })
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    }
  })
})
