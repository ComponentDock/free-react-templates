import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'
import { features } from '../data'

describe('Features', () => {
  it('renders exactly three feature cards with titles and descriptions', () => {
    render(<Features />)
    for (const feature of features) {
      expect(screen.getByRole('heading', { level: 3, name: feature.title })).toBeInTheDocument()
      expect(screen.getAllByText(feature.description)).toHaveLength(3)
    }
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
    expect(document.querySelectorAll('svg')).toHaveLength(3)
  })
})
