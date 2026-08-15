import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { features } from '../data'
import { Features } from './Features'

describe('Features', () => {
  it('renders three feature cards with photo, icon, heading, and paragraph', () => {
    const { container } = render(<Features />)
    for (const feature of features) {
      expect(screen.getByRole('heading', { level: 3, name: feature.title })).toBeInTheDocument()
      expect(screen.getByText(feature.description)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('img')).toHaveLength(features.length)
    expect(container.querySelectorAll('svg')).toHaveLength(features.length)
  })
})
