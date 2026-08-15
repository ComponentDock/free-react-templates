import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features, featureCards } from './Features'

describe('Features', () => {
  it('shows the highlighted heading and three circular icon cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /The real workout starts when you want to stop\./,
    )
    expect(screen.getByText('workout')).toBeInTheDocument()
    for (const card of featureCards) {
      expect(screen.getByRole('heading', { name: card.title })).toBeInTheDocument()
      expect(screen.getByText(card.blurb)).toBeInTheDocument()
    }
  })
})
