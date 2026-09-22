import { render, screen } from '@testing-library/react'
import { Features } from './Features'
import { FEATURES } from '../data'
import { describe, expect, it } from 'vitest'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Hotel Features')
  })

  it('renders all 8 features', () => {
    render(<Features />)
    for (const feature of FEATURES) {
      expect(screen.getByText(feature.name)).toBeInTheDocument()
    }
  })

  it('renders an icon for each feature', () => {
    render(<Features />)
    const icons = screen.getAllByTestId(/feature-icon/i)
    expect(icons.length).toBe(FEATURES.length)
  })
})
