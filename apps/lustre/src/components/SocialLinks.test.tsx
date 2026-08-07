import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialLinks } from './SocialLinks'

describe('SocialLinks', () => {
  it('renders six circular social brand links', () => {
    render(<SocialLinks />)

    for (const social of ['Pinterest', 'Facebook', 'Twitter', 'Dribbble', 'Behance', 'LinkedIn']) {
      const link = screen.getByRole('link', { name: social })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('target', '_blank')
    }
  })
})
