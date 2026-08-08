import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three feature items with titles and blurbs', () => {
    render(<Features />)
    expect(screen.getAllByRole('heading', { name: /Architecture/i })).toHaveLength(3)
    expect(screen.getAllByText(/blank cassettes on the web/i)).toHaveLength(3)
  })

  it('shows the feature image with an accessible name', () => {
    render(<Features />)
    expect(screen.getByAltText(/feature/i)).toBeInTheDocument()
  })
})
