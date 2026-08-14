import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialBand } from './SocialBand'

describe('SocialBand', () => {
  it('renders a solid lime band with six accessible social icon links', () => {
    const { container } = render(<SocialBand />)

    expect(container.querySelector('section')).toHaveClass('bg-brand')

    for (const label of [
      'Follow us on Facebook',
      'Follow us on Twitter',
      'Follow us on Instagram',
      'Follow us on LinkedIn',
      'Follow us on Pinterest',
      'Subscribe on YouTube',
    ]) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(container.querySelectorAll('svg')).toHaveLength(6)
  })
})
