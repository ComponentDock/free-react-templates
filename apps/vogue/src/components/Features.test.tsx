import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'
import { features } from '../data'

describe('Features', () => {
  it('renders three feature columns with icon, title and description', () => {
    render(<Features />)
    const section = screen.getByRole('region', { name: 'Store features' })
    expect(section).toBeInTheDocument()
    expect(features).toHaveLength(3)
    for (const feature of features) {
      expect(screen.getByRole('heading', { level: 4, name: feature.title })).toBeInTheDocument()
      expect(screen.getAllByText(feature.description).length).toBeGreaterThan(0)
    }
    expect(section.querySelectorAll('svg')).toHaveLength(3)
  })
})
