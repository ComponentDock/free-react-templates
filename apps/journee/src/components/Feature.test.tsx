import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { featureCards, featureParagraph, featureTitle } from '../data'
import { Feature } from './Feature'

describe('Feature', () => {
  it('renders the heading, paragraph, and three place-count cards', () => {
    const { container } = render(<Feature />)
    expect(screen.getByRole('heading', { name: featureTitle })).toBeInTheDocument()
    expect(screen.getByText(featureParagraph)).toBeInTheDocument()
    expect(container.querySelector('img')).toBeInTheDocument()

    for (const card of featureCards) {
      expect(screen.getByRole('heading', { name: card.place })).toBeInTheDocument()
      expect(screen.getByText(card.count)).toBeInTheDocument()
    }
  })
})
