import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Facilities } from './Facilities'

describe('Facilities', () => {
  it('renders the heading, paragraph, CTA, and photo', () => {
    render(<Facilities />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Modern Medical Facilities' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/state-of-the-art imaging/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Schedule a Visit' })).toHaveAttribute(
      'href',
      '#appointment',
    )
    expect(screen.getByAltText('Modern medical facility')).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/medora-facility'),
    )
  })
})
