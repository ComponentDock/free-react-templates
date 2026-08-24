import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialStrip } from './SocialStrip'
import { SOCIAL_LINKS } from '../data'

describe('SocialStrip', () => {
  it('renders a full-width tan band with six white social icons', () => {
    const { container } = render(<SocialStrip />)

    const band = container.querySelector('[aria-label="Social links"]') as HTMLElement
    expect(band.className).toMatch(/bg-brand/)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(6)
    for (const link of SOCIAL_LINKS) {
      const anchor = screen.getByRole('link', { name: link.label })
      expect(anchor.querySelector('svg path')).not.toBeNull()
      expect(anchor.className).toMatch(/hover:text-brand-hover/)
      expect(anchor.className).toMatch(/hover:bg-brand-dark/)
    }
  })
})
