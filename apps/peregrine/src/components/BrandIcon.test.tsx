import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { socials } from '../data'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders a labelled svg for every brand icon', () => {
    for (const social of socials) {
      const { unmount } = render(
        <BrandIcon name={social.name} label={social.label} className="h-5 w-5" />,
      )
      const icon = screen.getByRole('img', { name: social.label })
      expect(icon).toHaveAttribute('viewBox', '0 0 24 24')
      expect(icon).toHaveAttribute('fill', 'currentColor')
      expect(icon.getAttribute('class')).toContain('h-5')
      unmount()
    }
  })
})
