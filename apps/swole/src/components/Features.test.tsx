import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'
import { FEATURES } from '../data'

describe('Features', () => {
  it('renders the heading and four feature cards', () => {
    render(<Features />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Why You Should Choose Us' }),
    ).toBeInTheDocument()

    FEATURES.forEach((feature) => {
      expect(screen.getByText(feature.title)).toBeInTheDocument()
      expect(screen.getByText(feature.description)).toBeInTheDocument()
    })

    // One line icon per feature card.
    expect(document.querySelectorAll('svg')).toHaveLength(FEATURES.length)
  })
})
