import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('shows the features heading', () => {
    render(<Features />)
    expect(
      screen.getByRole('heading', { name: /Some Features that Made us Unique/ }),
    ).toBeInTheDocument()
  })

  it('renders six feature cards with titles and descriptions', () => {
    render(<Features />)
    for (const title of [
      'Expert Technicians',
      'Professional Service',
      'Great Support',
      'Technical Skills',
      'Highly Recommended',
      'Positive Reviews',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
