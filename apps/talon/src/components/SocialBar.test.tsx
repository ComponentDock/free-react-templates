import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialBar } from './SocialBar'

describe('SocialBar', () => {
  it('renders all social media links with correct labels and targets', () => {
    render(<SocialBar />)

    const expected = [
      { name: 'Facebook', href: 'https://facebook.com' },
      { name: 'Twitter', href: 'https://twitter.com' },
      { name: 'Pinterest', href: 'https://pinterest.com' },
      { name: 'Dribbble', href: 'https://dribbble.com' },
      { name: 'Behance', href: 'https://behance.net' },
      { name: 'LinkedIn', href: 'https://linkedin.com' },
    ]

    for (const social of expected) {
      const link = screen.getByRole('link', { name: social.name })
      expect(link).toHaveAttribute('href', social.href)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    }
  })
})
