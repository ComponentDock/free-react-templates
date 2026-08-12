import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VolunteerBand } from './VolunteerBand'

describe('VolunteerBand', () => {
  it('renders the centered Become a Volunteer heading link over a background image', () => {
    const { container } = render(<VolunteerBand />)
    expect(screen.getByRole('link', { name: 'Become a Volunteer' })).toHaveAttribute(
      'href',
      '#about',
    )
    expect(container.querySelector('section')).toHaveAttribute(
      'style',
      expect.stringContaining('kindred-volunteer/1920/900'),
    )
  })
})
