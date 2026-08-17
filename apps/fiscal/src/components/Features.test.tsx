import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'
import { FEATURES } from '../data'

describe('Features', () => {
  it('renders three feature cards with heading and text', () => {
    render(<Features />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(3)
    headings.forEach((heading) => expect(heading).toHaveTextContent('On Time Service'))
    FEATURES.forEach((feature) => {
      expect(screen.getAllByText(feature.text).length).toBeGreaterThan(0)
    })
  })
})
