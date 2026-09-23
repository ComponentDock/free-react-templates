import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading and all feature cards', () => {
    render(<Features />)
    expect(screen.getByText(/Some Features that Made us Unique/i)).toBeInTheDocument()
    for (const title of ['Expert Writing', 'Unique Voice', 'Community', 'Award-Winning']) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })
})
